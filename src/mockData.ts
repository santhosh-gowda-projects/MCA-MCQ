/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MCQQuestion, CandidateResult } from "./types";

export const MOCK_QUESTIONS: MCQQuestion[] = [
  {
    id: "q1",
    title: "What is the worst-case time complexity of searching in a self-balancing binary search trees (e.g., AVL tree or Red-Black Tree) with N nodes?",
    options: ["O(1)", "O(log N)", "O(N)", "O(N log N)"],
    category: "DSA",
    correctAnswer: "O(log N)",
    explanation: "Self-balancing binary search trees maintain their height proportional to log(N), ensuring search, insertion, and deletion always take O(log N) time in the worst case."
  },
  {
    id: "q2",
    title: "In Database Management Systems, which normal form is specifically defined by eliminating transitive functional dependencies?",
    options: ["First Normal Form (1NF)", "Second Normal Form (2NF)", "Third Normal Form (3NF)", "Boyce-Codd Normal Form (BCNF)"],
    category: "DBMS",
    correctAnswer: "Third Normal Form (3NF)",
    explanation: "A relation is in 3NF if it is in 2NF and no non-prime attribute is transitively dependent on any candidate key."
  },
  {
    id: "q3",
    title: "Which scheduling algorithm can lead to indefinite block or 'starvation' of low-priority computer processes?",
    options: ["Round Robin (RR)", "First-Come First-Served (FCFS)", "Priority Scheduling", "Shortest Job First (SJF)"],
    category: "OS",
    correctAnswer: "Priority Scheduling",
    explanation: "Priority scheduling can leave low-priority processes waiting indefinitely if there is a steady stream of higher-priority tasks. This is resolved by 'aging'."
  },
  {
    id: "q4",
    title: "In IP Networking, which of the following subnets represents a standard private Class C IPv4 address block?",
    options: ["10.0.0.0 to 10.255.255.255", "172.16.0.0 to 172.31.255.255", "192.168.0.0 to 192.168.255.255", "169.254.0.0 to 169.254.255.255"],
    category: "CN",
    correctAnswer: "192.168.0.0 to 192.168.255.255",
    explanation: "RFC 1918 defines Class A private space as 10./8, Class B as 172.16./12, and Class C private space as 192.168./16 (192.168.0.0 to 192.168.255.255)."
  },
  {
    id: "q5",
    title: "In OOP (C++ or Java), what does overriding a 'virtual' method or executing standard subtype polymorphism achieve?",
    options: ["Compile-time static binding", "Run-time dynamic binding", "Reduces compiler memory overhead", "Disables class inheritance"],
    category: "OOP/Programming",
    correctAnswer: "Run-time dynamic binding",
    explanation: "Virtual functions ensure that the correct override is invoked at runtime according to the actual object type, which is dynamic binding."
  },
  {
    id: "q6",
    title: "Which primary data structure is utilized internally by the operating system to support function recursion and local stack frame storage?",
    options: ["FIFO Queue", "LIFO Stack", "Doubly Linked List", "Binary Min-Heap"],
    category: "DSA",
    correctAnswer: "LIFO Stack",
    explanation: "A Last-In First-Out (LIFO) Stack holds the activation records (local variables, return address) of active functions, enabling correct return after recursive flows."
  },
  {
    id: "q7",
    title: "Which DBMS mechanism acts as the primary guarantee of ACID transaction 'Isolation' under highly concurrent requests?",
    options: ["Write-Ahead logging / Redo logs", "Concurrency controls (e.g., Two-Phase Locking / 2PL or MVCC)", "Foreign key constraint validation", "B-Tree cluster indexing"],
    category: "DBMS",
    correctAnswer: "Concurrency controls (e.g., Two-Phase Locking / 2PL or MVCC)",
    explanation: "Isolation ensures concurrent transactions run independently. This is enforced via locks (like 2PL) or Multi-Version Concurrency Control (MVCC)."
  },
  {
    id: "q8",
    title: "Under virtual memory architecture, what triggers a CPU 'Page Fault' interrupt?",
    options: ["A hardware RAM read/write failure", "An out of bounds segment pointer crash", "When a virtual memory page accessed is not active in physical RAM", "When the process buffer overflows standard stack sizes"],
    category: "OS",
    correctAnswer: "When a virtual memory page accessed is not active in physical RAM",
    explanation: "A page fault is a trap raised by hardware when a program accesses a page mapped in virtual address space, but not currently loaded in physical memory."
  }
];

export const MOCK_RESULTS: CandidateResult[] = [
  {
    id: "cand1",
    candidateName: "Aditya Sharma",
    candidateEmail: "aditya.sharma.mca@gmail.com",
    timestamp: "2026-06-15T14:32:00Z",
    scoreSummary: { score: 7, total: 8, percentage: 87.5 },
    categoryScores: {
      "DSA": { score: 2, total: 2, percentage: 100 },
      "DBMS": { score: 2, total: 2, percentage: 100 },
      "OS": { score: 2, total: 2, percentage: 100 },
      "CN": { score: 0, total: 1, percentage: 0 },
      "OOP/Programming": { score: 1, total: 1, percentage: 100 }
    },
    responses: {
      "q1": { questionId: "q1", selectedOption: "O(log N)", isCorrect: true },
      "q2": { questionId: "q2", selectedOption: "Third Normal Form (3NF)", isCorrect: true },
      "q3": { questionId: "q3", selectedOption: "Priority Scheduling", isCorrect: true },
      "q4": { questionId: "q4", selectedOption: "172.16.0.0 to 172.31.255.255", isCorrect: false }, // Chooses Class B instead of C
      "q5": { questionId: "q5", selectedOption: "Run-time dynamic binding", isCorrect: true },
      "q6": { questionId: "q6", selectedOption: "LIFO Stack", isCorrect: true },
      "q7": { questionId: "q7", selectedOption: "Concurrency controls (e.g., Two-Phase Locking / 2PL or MVCC)", isCorrect: true },
      "q8": { questionId: "q8", selectedOption: "When a virtual memory page accessed is not active in physical RAM", isCorrect: true }
    },
    aiAnalysis: {
      readiness: "Ready",
      strengths: ["Outstanding DSA data structure execution", "Perfect OS virtualization/scheduling comprehension", "Excellent Relational Algebra & DBMS normal forms"],
      knowledgeGaps: [
        {
          topic: "Computer Networks IPv4 Address Structuring",
          severity: "Low",
          summary: "Confused private Class B address range with private Class C subnets.",
          evidence: "Selected standard 172.16./12 class boundaries when prompted for Private Class C IPv4 range."
        }
      ],
      feedback: "Aditya is an elite candidate demonstrating a brilliant command over systems and application fundamentals. His conceptual execution in AVL balance criteria, ACID transaction concurrency, virtual memory page interrupt flow, and recursion stack dynamics shows deep intellectual readiness for advanced MCA course study.",
      studyPlan: [
        "Revise private IPv4 address allocation boundaries and RFC 1918 subnets.",
        "Practice physical subnet routing questions in Computer Networks."
      ]
    }
  },
  {
    id: "cand2",
    candidateName: "Sneha Patel",
    candidateEmail: "sneha.p.recruit@yahoo.co.in",
    timestamp: "2026-06-15T15:10:00Z",
    scoreSummary: { score: 5, total: 8, percentage: 62.5 },
    categoryScores: {
      "DSA": { score: 1, total: 2, percentage: 50 },
      "DBMS": { score: 1, total: 2, percentage: 50 },
      "OS": { score: 1, total: 2, percentage: 50 },
      "CN": { score: 1, total: 1, percentage: 100 },
      "OOP/Programming": { score: 1, total: 1, percentage: 100 }
    },
    responses: {
      "q1": { questionId: "q1", selectedOption: "O(N log N)", isCorrect: false }, // AVL worst case search wrong
      "q2": { questionId: "q2", selectedOption: "Third Normal Form (3NF)", isCorrect: true },
      "q3": { questionId: "q3", selectedOption: "Priority Scheduling", isCorrect: true },
      "q4": { questionId: "q4", selectedOption: "192.168.0.0 to 192.168.255.255", isCorrect: true },
      "q5": { questionId: "q5", selectedOption: "Run-time dynamic binding", isCorrect: true },
      "q6": { questionId: "q6", selectedOption: "LIFO Stack", isCorrect: true },
      "q7": { questionId: "q7", selectedOption: "B-Tree cluster indexing", isCorrect: false }, // DBMS ACID isolation wrong
      "q8": { questionId: "q8", selectedOption: "A hardware RAM read/write failure", isCorrect: false } // Page fault trigger wrong
    },
    aiAnalysis: {
      readiness: "Needs Practice",
      strengths: ["Strong computer network class topology", "Solid OOP subclass runtime override capability", "Clear understanding of basic linear recursion implementation"],
      knowledgeGaps: [
        {
          topic: "Balanced Search Tree Complexities",
          severity: "Medium",
          summary: "Understands tree structures but over-estimates search lookup costs.",
          evidence: "Selected O(N log N) worst-case search instead of O(log N) for balanced AVL search trees."
        },
        {
          topic: "DBMS ACID Isolation Mechanisms",
          severity: "Medium",
          summary: "Lacks core understanding of concurrency control; attributes isolation to indexes instead of locking protocol.",
          evidence: "Assumed B-Tree clustering indexes guarantee concurrency boundaries instead of 2PL or MVCC locks."
        },
        {
          topic: "OS Virtual Memory Page Fault Logic",
          severity: "High",
          summary: "Confuses regular software virtual memory swapping routines with catastrophic physical hardware read/write crashes.",
          evidence: "Selected 'hardware RAM read/write failure' when evaluating typical page faults."
        }
      ],
      feedback: "Sneha exhibits strong baseline logic and excellent scores in computer networking and standard object oriented programming paradigms. However, advanced MCA topics—such as logarithmic BST heights, transaction concurrency serializability, and operating system virtual paging traps—require immediate active revision.",
      studyPlan: [
        "Go through standard AVL and Red-Black tree insertion, deletion, and rotation principles.",
        "Deeply analyze virtual-to-physical memory mapping and page replacement policies.",
        "Study the difference between indexing structures (B-Trees) and concurrent database isolation levels (2PL/SSI)."
      ]
    }
  },
  {
    id: "cand3",
    candidateName: "Ronit Verma",
    candidateEmail: "ronit.v.computing@outlook.com",
    timestamp: "2026-06-15T16:01:00Z",
    scoreSummary: { score: 3, total: 8, percentage: 37.5 },
    categoryScores: {
      "DSA": { score: 0, total: 2, percentage: 0 },
      "DBMS": { score: 1, total: 2, percentage: 50 },
      "OS": { score: 1, total: 2, percentage: 50 },
      "CN": { score: 1, total: 1, percentage: 100 },
      "OOP/Programming": { score: 0, total: 1, percentage: 0 }
    },
    responses: {
      "q1": { questionId: "q1", selectedOption: "O(N)", isCorrect: false }, // BST Search wrong
      "q2": { questionId: "q2", selectedOption: "Second Normal Form (2NF)", isCorrect: false }, // Transitive dependency wrong
      "q3": { questionId: "q3", selectedOption: "Priority Scheduling", isCorrect: true },
      "q4": { questionId: "q4", selectedOption: "192.168.0.0 to 192.168.255.255", isCorrect: true },
      "q5": { questionId: "q5", selectedOption: "Compile-time static binding", isCorrect: false }, // OOP Virtual keyword wrong
      "q6": { questionId: "q6", selectedOption: "Binary Min-Heap", isCorrect: false }, // Stack recursion wrong
      "q7": { questionId: "q7", selectedOption: "Concurrency controls (e.g., Two-Phase Locking / 2PL or MVCC)", isCorrect: true },
      "q8": { questionId: "q8", selectedOption: "When the process buffer overflows standard stack sizes", isCorrect: false } // Page fault vrong
    },
    aiAnalysis: {
      readiness: "Not Yet Ready",
      strengths: ["Good foundation in computer process starvation models", "Understand generic private C network addresses"],
      knowledgeGaps: [
        {
          topic: "Fundamental Abstract Data Types (Stack vs Heap)",
          severity: "High",
          summary: "Misinterpreting heap structures with execution call frames used during recursive logic.",
          evidence: "Selected Binary Min-Heap instead of LIFO general memory stacks."
        },
        {
          topic: "Database Normalization Dependencies",
          severity: "High",
          summary: "Confused functional candidate dependencies (2NF) with transitive normalization steps (3NF).",
          evidence: "Mistyped Third Normal Form requirements with Second Normal Form (partial keys)."
        },
        {
          topic: "OOP Subtype Binding and Polymorphism",
          severity: "Medium",
          summary: "Assumes virtual inheritance achieves static compile binding rather than runtime overrides.",
          evidence: "Selected 'compile-time static binding' for C++/Java virtual methods."
        }
      ],
      feedback: "Ronit is passionate but needs a comprehensive ground-up study of core computer science primitives. His performance indicates an inadequate grasp of critical data mapping (stacks and heaps), normal database schemas, and polymorphism. Standard course prep must begin immediately with direct textbooks.",
      studyPlan: [
        "Go back to procedural coding basics: understand function activations and stack layouts.",
        "Read database normalization guides (1NF, 2NF, 3NF, BCNF) with clear relational mapping examples.",
        "Analyze dynamic binding, pointer types, and base class behaviors in OOP languages."
      ]
    }
  }
];

export const MOCK_COHORT_TRENDS = {
  averagePercentage: 62.5,
  cohortStrengths: [
    "High competence in IP Addressing & Networking (Class C subnets)",
    "Strong conceptual grasp of Process Starvation under Priority Scheduling",
    "Familiarity with Relational ACID Transaction Concurrency Locks"
  ],
  commonWeaknesses: [
    "Severe struggles in Virtual Memory Paging Fault Logic vs Hardware faults (66% incorrect)",
    "Weak understanding of Polymorphic Virtual Inheritance & sub-bindings",
    "Struggles with Balanced Binary Search Trees height complexities"
  ],
  cohortAdvice: "The cohort displays strong mechanical skills in networks and database locks, but lacks systems-level computer architecture insight (virtual paging, heaps vs stacks, dynamic resolution). It is highly recommended to introduce a 2-day workshop focused entirely on OS Kernel scheduling, memory paging processes, and dynamic polymorphic binding in C++/Java before the final MCA selections. This will dramatically uplift their interview conversion ratios.",
  bentoStats: {
    dsaAvg: 50,
    dbmsAvg: 75,
    osAvg: 50,
    cnAvg: 100
  }
};
