import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Gemini Client
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (GEMINI_API_KEY) {
  ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
  console.log("Gemini Client initialized successfully server-side.");
} else {
  console.warn("GEMINI_API_KEY is not defined. AI analysis features will rely on detailed local analysis.");
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(express.json({ limit: "15mb" }));

  // API endpoint for analyzing a single candidate's response
  app.post("/api/analyze-candidate", async (req, res) => {
    try {
      const {
        candidateName,
        candidateEmail,
        formTitle,
        questions,
        responses,
        scoreSummary
      } = req.body;

      if (!questions || !responses) {
        return res.status(400).json({ error: "Missing required fields questions or responses" });
      }

      if (!ai) {
        // Fallback local analysis if Gemini key is missing
        return res.json({
          fallback: true,
          readiness: scoreSummary.percentage >= 80 ? "Ready" : scoreSummary.percentage >= 50 ? "Needs Practice" : "Not Yet Ready",
          strengths: [
            "Good attempt on MCQ",
            scoreSummary.percentage >= 70 ? "Solid overall understanding" : "Attempted core questions"
          ],
          knowledgeGaps: [
            {
              topic: "Overall CS Concepts",
              severity: scoreSummary.percentage < 60 ? "High" : "Medium",
              summary: `Scored ${scoreSummary.score} out of ${scoreSummary.total} (${scoreSummary.percentage.toFixed(1)}%). Review of missed topics recommended.`,
              evidence: `${scoreSummary.total - scoreSummary.score} incorrect answers out of ${scoreSummary.total}`
            }
          ],
          feedback: `While the API key is not configured, we calculated your score of ${scoreSummary.score}/${scoreSummary.total} (${scoreSummary.percentage.toFixed(1)}%). Master MCA computer science topics: DSA, DBMS, Operating Systems, Networks, and Programming.`,
          studyPlan: ["Analyze wrong MCQ answers", "Revise core computer science fundamentals", "Simulate mock interview questions"]
        });
      }

      const prompt = `
        You are an elite Computer Science Professor and MCA (Master of Computer Applications) Admissions & Interview Board Panel Member.
        Analyze the following MCA MCQ Interview Candidate Results and identify precise technical knowledge gaps, core strengths, and formulate actionable interview preparation feedback.

        ### Candidate Profile
        - Name: ${candidateName || "Candidate"}
        - Email: ${candidateEmail || "Unknown"}
        - Exam: ${formTitle || "MCA Technical MCQ"}
        - Core Score: ${scoreSummary.score} / ${scoreSummary.total} (${scoreSummary.percentage?.toFixed(2)}%)

        ### Questions Sheet & Candidate Submissions
        Here is the JSON representation of the questions and whether the candidate got them correct:
        ${JSON.stringify(
          questions.map((q: any, i: number) => {
            const resp = responses[q.id] || responses[i];
            const isCorrect = resp ? resp.isCorrect : false;
            return {
              questionText: q.title || q.text,
              category: q.category || "General CS",
              candidateAnswer: resp ? resp.selectedOption : "No Answer",
              correctAnswer: q.correctAnswer || "Not Configured",
              isCorrect: isCorrect,
              options: q.options || []
            };
          }),
          null,
          2
        )}

        Provide your expert evaluation strictly in the following JSON format. Your response must be valid parseable JSON only, starting with "{" and ending with "}". Do not include markdown block syntax like \`\`\`json.

        {
          "readiness": "Ready" | "Needs Practice" | "Not Yet Ready",
          "strengths": ["string", "string"],
          "knowledgeGaps": [
            {
              "topic": "string (e.g. DBMS Normalization, DSA Trees, OS Threading, IP Addressing)",
              "severity": "High" | "Medium" | "Low",
              "summary": "Brief explanation of what they missed or misunderstood about this topic.",
              "evidence": "Specific questions or patterns of wrong answers showing this gap."
            }
          ],
          "feedback": "Paragraph containing warm, highly professional, expert academic and professional feedback.",
          "studyPlan": ["Actionable checklist item with specific study topics", "Item 2"]
        }
      `;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });

      const responseText = response.text || "{}";
      const cleaned = responseText.replace(/```json/g, "").replace(/```/g, "").trim();
      const analysis = JSON.parse(cleaned);

      res.json(analysis);
    } catch (e: any) {
      console.error("Gemini candidate analysis error:", e);
      res.status(500).json({ error: "Failed to generate AI candidate report: " + e.message });
    }
  });

  // API endpoint for analyzing the overall cohort
  app.post("/api/analyze-cohort", async (req, res) => {
    try {
      const { formTitle, questions, cohortData } = req.body;

      if (!cohortData || !questions) {
        return res.status(400).json({ error: "Missing cohortData or questions payload" });
      }

      if (!ai) {
        return res.json({
          fallback: true,
          averagePercentage: cohortData.reduce((acc: number, c: any) => acc + (c.scoreSummary?.percentage || 0), 0) / cohortData.length,
          cohortStrengths: ["General MCA interest", "Participation in technical interview preparation"],
          commonWeaknesses: ["Core fundamentals could be strengthened with targeted workshops"],
          cohortAdvice: "Ensure all core subjects (DSA, OS, DBMS) are structured into a 30-day prep guide.",
          bentoStats: {
            dsaAvg: 70,
            dbmsAvg: 65,
            osAvg: 60,
            cnAvg: 62
          }
        });
      }

      const prompt = `
        You are an elite Computer Science Professor and MCA Admissions Coordinator.
        Analyze this cohort's performance on the Google Form MCQ quiz "${formTitle || "MCA Technical MCQ"}".
        
        ### Cohort Overview
        - Total Candidates: ${cohortData.length}
        - Score info:
        ${JSON.stringify(
          cohortData.map((c: any) => ({
            name: c.candidateName,
            score: c.scoreSummary?.score,
            total: c.scoreSummary?.total,
            percentage: c.scoreSummary?.percentage,
            gaps: c.aiAnalysis?.knowledgeGaps?.map((g: any) => g.topic) || []
          })),
          null,
          2
        )}

        Analyze the collective metrics and summarize trends.
        Provide your collective evaluation strictly in this JSON format:
        {
          "averagePercentage": number (overall average),
          "cohortStrengths": ["Core Strength 1", "Core Strength 2"],
          "commonWeaknesses": ["Common mistake topic 1 with brief reason", "Common mistake topic 2"],
          "cohortAdvice": "Detailed strategic report / recommendation for the MCA department or trainer to focus on.",
          "bentoStats": {
            "dsaAvg": number,
            "dbmsAvg": number,
            "osAvg": number,
            "cnAvg": number
          }
        }
      `;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });

      const responseText = response.text || "{}";
      const cleaned = responseText.replace(/```json/g, "").replace(/```/g, "").trim();
      const cohortReport = JSON.parse(cleaned);

      res.json(cohortReport);
    } catch (e: any) {
      console.error("Gemini cohort analysis error:", e);
      res.status(500).json({ error: "Failed to generate AI cohort trends: " + e.message });
    }
  });

  // Vite integration for dev server
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite development middleware mounted successfully.");
  } else {
    // Serve static frontend in production
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Serving compiled production assets from /dist.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`MCA MCQ Grader & Analytics server running on port ${PORT}`);
  });
}

startServer();
