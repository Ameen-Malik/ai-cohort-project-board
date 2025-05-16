
import { ProblemStatement } from "@/components/ProblemCard";

export const problemStatements: ProblemStatement[] = [
  {
    id: 1,
    title: "HireAI: Talent Matchmaking",
    problem: "AI companies and enterprises struggle to fill specialized roles quickly. Scarcity of qualified candidates, manual sourcing, inefficient screening, and bias stretch the average time-to-hire past 60 days and push costs sky-high. An LLM-driven, natural-language search engine that understands skills, projects, and context promises to compress this cycle from weeks to minutes.",
    solution: "Build an end-to-end hiring copilot that lets recruiters type a plain-English request (e.g., 'Find senior Gen-AI engineers with LangChain + RAG experience in Europe, open to contract work') and instantly returns relevant candidates, auto-screens them, and sends personalized outreach.",
    scope: [
      "Natural-language multi-source talent search ('PeopleGPT')",
      "Auto resume parsing & skill extraction",
      "Talent-pool insights dashboards (charts)",
      "Candidate Ranking: Automatically ranks, scores, and organizes candidate profiles based on recruiter criteria, eliminating manual screening",
      "Background Checking and Pre-Screening",
      "Uses AI to verify candidate information and generate screening Q&A for assessment",
      "Sends personalized outreach"
    ],
    deliverables: [
      "2-minute demo video",
      "Public GitHub repository",
      "Live demo link"
    ]
  },
  {
    id: 2,
    title: "CareerAI: Personalized Career Companion",
    problem: "Students and working professionals switching to AI roles face a lack of structured, personalized guidance throughout their job search and career-building journey. They require a clear, phase-by-phase roadmap from self-discovery to job offer, plus a single place to plan projects, broadcast progress, collect feedback, and manage every application—to showcase skills and secure aligned roles.",
    solution: "An AI-powered career platform with a personalized dashboard that steers each candidate through four phases: Introspection, Exploration, Reflection, Action with built-in action-item checklists, status tracking, and AI assistance.\n\nPhase\nAction Items (Status: Not Started / In Progress / Done)\n1 · Introspection\n• Guided Ikigai journaling  \n• Research Industry/role aligns with your ikigai\n• Personalised outreach to connect with recruiters/founders\n2 · Exploration\n• Research project topics aligns with the target firms\n• Daily Build-in-Public post generator\n3 · Reflection\n• Peer/Mentor feedback funnel \n• Strength-weakness analyzer\n• Case-study Generator  \n4 · Action\n• Project milestone tracker \n• Delta 4 prompt to identify friction & delight points\n• Alerts from target firms",
    scope: [
      "Phase Workflow Engine: unlock phases, update status, track progress.",
      "Guided Ikigai & journaling with AI summaries and sentiment insights",
      "Project & milestone dashboards (Kanban views)",
      "GitHub-like profile auto-pulling repos, case studies, endorsements",
      "Build-in-Public post generator for Twitter & LinkedIn",
      "Mentor feedback hub with comments, ratings, and progress reports",
      "Candidate ATS board + integrated personalized recruiter outreach",
      "Delta 4 prompt to identify friction & delight points",
      "Alerts from target firms"
    ]
  },
  {
    id: 3,
    title: "PortfolioAI — Instant Personal Brand & Job-Readiness Suite",
    problem: "Early-career engineers and career-switchers often lack a polished online presence and spend days wrestling with portfolios, résumés, and cover letters.\nGeneric job alerts bury the few perfect openings in a flood of noise.\nInterview prep is ad-hoc, leaving candidates unsure of real-world expectations.",
    solution: "Build an AI-driven web app that, in minutes, turns raw inputs (existing CV, LinkedIn URL, or a short Q&A) into:\nA fully hosted portfolio site\nATS-ready résumé\nTailored cover letters\nPersonalized job alerts Then drills users with an AI interviewer offering real-time coaching.",
    scope: [
      "AI Portfolio Builder Accepts PDF/Word résumé or guided Q&A to generate a responsive, host-ready site (custom subdomain + exportable HTML)",
      "AI CV Generator When no résumé exists, dynamic interview prompts collect work history, skills, metrics; outputs ATS-friendly PDF/docx",
      "AI Cover-Letter Writer One-click, job-specific letters using role description + user portfolio data; editable tone presets",
      "Résumé / Portfolio Optimizer Real-time score, keyword gap analysis vs. target job description, and auto-rewrite suggestions",
      "AI Mock Interviewer Role-aware question sets (technical, behavioral) with live transcript, confidence metrics, and improvement tips",
      "AI-driven personalized career coaching and skill gap analysis",
      "Job-Opening Alert Engine Users choose sources (LinkedIn, AngelList, Wellfound, company RSS, etc.), keywords, and frequency; alerts via email & in-app with 'Apply-with-Profile' shortcut"
    ]
  },
  {
    id: 4,
    title: "SuperNetworkAI — AI-Powered Networking to Find Cofounders, Teams & Clients",
    problem: "Online communities often face challenges in networking for instance finding the right cofounders, teammates, or clients isn't straightforward. Manual networking is time-consuming and often results in mismatched partnerships due to incomplete information about members' passions, skills, and intentions.",
    solution: "Build an AI-powered web app that uses LLM-driven natural language search to intelligently match members based on their Ikigai (self-discovery answers), portfolios, social profiles, intent, and skills. The system ranks and categorizes matches, provides AI-generated explanations, and supports in-app messaging for seamless connection building.",
    scope: [
      "Concise onboarding capturing Ikigai, portfolio, social profiles, intent, with import/export from CV or portfolio website",
      "AI pre-fills and continuously updates matchmaking criteria, allowing manual user customization (skills, interests, availability, working style)",
      "Natural language search interface for easy match discovery",
      "Ranked, filterable match lists categorized by cofounder, client, or teammate roles",
      "AI-generated summaries explaining match suggestions",
      "Built-in messaging and connection requests within the app",
      "Public/private profile visibility options with user controls",
      "User ability to block or control visibility settings",
      "Web-only, minimalistic UI focused on simplicity and clarity",
      "No initial member vetting required; open access"
    ]
  },
  {
    id: 5,
    title: "EliteBuilders: AI Builders Competition Platform",
    problem: "AI‑centric companies—and even non‑tech enterprises—need proof that candidates can ship real, product‑ready AI solutions, not just solve algorithm puzzles. Traditional coding challenge sites (e.g., LeetCode, HackerRank) measure algorithmic skill but fail to assess end‑to‑end applied‑AI product thinking (prompt design, UX flow, data handling, business framing). Meanwhile, self‑taught builders struggle to showcase tangible, holistic AI projects that translate into job offers. The gap results in long hiring cycles, mismatched talent, and limited visibility for capable but non‑traditional candidates.",
    solution: "Launch a web‑based competitive arena where solo builders rapidly craft and submit AI‑powered MVPs complete with prototype, pitch deck, and demo video—against company‑authored or sponsored challenges. Automated LLM‑driven scoring, human judge reviews, and hybrid leaderboards surface top talent. Hiring partners gain early access to ranked submissions and can directly engage winners, while participants earn badges, prizes, and bragging‑rights that convert into job/freelance opportunities.",
    scope: [
      "Solo Challenges Catalogue – Filterable list of companies‑authored & sponsored problems with deadlines, data packs, and evaluation rubrics.",
      "User Onboarding – OAuth sign‑in ➜ connect GitHub/portfolio/CV ➜ suggested first challenge.",
      "Submission Pipeline – Deliverable uploader (repo link, deck, video) → sandboxed automated tests → LLM rubric evaluation → provisional score.",
      "Hybrid Leaderboards – Real‑time event boards + season‑based cumulative 'Career Score.'",
      "Badging & Recognition – Auto‑awarded badges (Top‑10 %, Category Winner, Sponsor Favorite) post‑review.",
      "Sponsor Dashboard – Create/manage challenges, fund prizes, view ranked submissions, download candidate packets.",
      "Notification System – Email alerts for submission status, score updates, and badge drops."
    ]
  },
  {
    id: 6,
    title: "Open Category",
    problem: "Submit your own idea for review.",
    solution: "",
    scope: [],
    isOpenCategory: true
  }
];
