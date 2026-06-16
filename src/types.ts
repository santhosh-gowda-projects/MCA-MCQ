/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MCQQuestion {
  id: string; // Question ID or Index
  title: string; // The question text itself
  options: string[]; // Options array
  category: "DSA" | "DBMS" | "OS" | "CN" | "OOP/Programming" | "General CS";
  correctAnswer: string; // The text of the correct choice
  explanation?: string; // Explanation of the correct answer
}

export interface CandidateResponse {
  questionId: string;
  selectedOption: string;
  isCorrect: boolean;
}

export interface CandidateResult {
  id: string;
  candidateName: string;
  candidateEmail: string;
  timestamp: string;
  scoreSummary: {
    score: number;
    total: number;
    percentage: number;
  };
  categoryScores: {
    [category: string]: {
      score: number;
      total: number;
      percentage: number;
    };
  };
  responses: {
    [questionId: string]: CandidateResponse;
  };
  aiAnalysis?: AIAnalysisReport;
  aiLoading?: boolean;
  aiError?: string;
}

export interface AIAnalysisReport {
  readiness: "Ready" | "Needs Practice" | "Not Yet Ready";
  strengths: string[];
  knowledgeGaps: {
    topic: string;
    severity: "High" | "Medium" | "Low";
    summary: string;
    evidence: string;
  }[];
  feedback: string;
  studyPlan: string[];
  fallback?: boolean;
}

export interface CohortTrends {
  averagePercentage: number;
  cohortStrengths: string[];
  commonWeaknesses: string[];
  cohortAdvice: string;
  bentoStats: {
    dsaAvg: number;
    dbmsAvg: number;
    osAvg: number;
    cnAvg: number;
  };
  fallback?: boolean;
}

export interface GoogleFormMetadata {
  id: string;
  name: string;
  webViewLink?: string;
}
