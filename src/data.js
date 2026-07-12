export const profile = {
  name: 'Prakash Palsaniya',
  fullName: 'Prakash Chand Palsaniya',
  username: 'PrakashPalsaniya',
  role: 'Backend & AI Engineer',
  tagline: 'I build backend systems and AI-native apps that are fast and reliable.',
  location: 'Srinagar, India',
  company: 'NIT Srinagar',
  email: 'prakash8290682001@gmail.com',
  phone: '+91 7006640507',
  github: 'https://github.com/PrakashPalsaniya',
  linkedin: 'https://www.linkedin.com/in/prakash-palsaniya',
  resume: '/Prakash-Palsaniya-Resume.pdf',
  avatar: '/avatar.jpg',
  headline: 'Final-year IT student · Backend & AI engineer building AI-native apps, RAG pipelines and scalable backends.',
  bio: `I'm a final-year IT student who spends most of my time building backend systems and AI-native applications. I like working with APIs, databases, caching and message queues, and lately I've been building with LLM APIs, RAG pipelines and agentic workflows. I care about writing clean code that other people can actually read and maintain.`,
  education: {
    school: 'National Institute of Technology, Srinagar',
    degree: 'B.Tech, Information Technology',
    detail: 'CGPA 8.4 · 2023 — 2027',
  },
}

export const languages = [
  { name: 'JavaScript', pct: 62, color: '#f1e05a' },
  { name: 'Python', pct: 16, color: '#3572A5' },
  { name: 'C++', pct: 14, color: '#f34b7d' },
  { name: 'Other', pct: 8, color: '#8b949e' },
]

export const stats = [
  { value: '85%', label: 'Latency cut with Redis caching (800ms → 120ms)' },
  { value: '500+', label: 'DSA problems solved on LeetCode & GFG' },
  { value: '4', label: 'Production apps shipped, end to end' },
  { value: '8.4', label: 'CGPA · B.Tech IT, NIT Srinagar' },
]

export const projects = [
  {
    id: 'documind',
    name: 'DocuMind',
    repo: 'Docu-Mind',
    lang: 'JavaScript',
    langColor: '#f1e05a',
    stars: 18,
    forks: 4,
    category: 'Agentic RAG / AI',
    year: '2025',
    accent: '#6366f1',
    accent2: '#2dd4bf',
    tagline: 'A chat-with-PDF platform powered by an agentic RAG pipeline.',
    description:
      'An AI platform where you upload PDFs and ask questions about them. Instead of a single retrieval step, I built an agentic pipeline with LangGraph that rewrites the query, retrieves, grades the results, and only then answers — falling back to web search when the documents do not have enough context. Retrieval fuses dense embeddings with BM25 and a reranker so answers stay grounded in the actual document.',
    highlights: [
      'Agentic RAG pipeline built with LangGraph orchestrating rewrite → retrieve → grade → generate, with a Tavily web-search fallback when the document context is not enough',
      'Hybrid retrieval over a Qdrant vector DB — dense embeddings fused with BM25 sparse search via Reciprocal Rank Fusion, then a cross-encoder reranker for better grounding',
      'Async ingestion pipeline using BullMQ + Redis workers for PDF parsing, chunking and embedding, so heavy processing never blocks uploads',
      'SSE token streaming for instant responses and a semantic cache that serves repeated questions immediately',
      'Clerk authentication and AWS S3 storage wired across decoupled services',
    ],
    stack: ['Node.js', 'LangGraph', 'Qdrant', 'BullMQ', 'Redis', 'PostgreSQL', 'AWS S3', 'Clerk'],
    architecture: {
      flow: ['Client', 'Express API', 'LangGraph Agent', 'Qdrant + Rerank', 'LLM'],
      async: ['PDF Upload', 'BullMQ + Redis', 'Parse · Chunk · Embed'],
      stores: ['PostgreSQL', 'AWS S3', 'Clerk Auth', 'Tavily Search'],
    },
    metrics: [
      { k: 'Agentic', v: 'RAG pipeline' },
      { k: 'Hybrid', v: 'search + rerank' },
      { k: 'SSE', v: 'token streaming' },
    ],
    links: { demo: 'https://docu-mind-alpha-topaz.vercel.app/', code: 'https://github.com/PrakashPalsaniya/Docu-Mind' },
  },
  {
    id: 'finmate',
    name: 'Finmate',
    repo: 'finmate',
    lang: 'JavaScript',
    langColor: '#f1e05a',
    stars: 12,
    forks: 3,
    category: 'AI Finance Platform',
    year: '2025',
    accent: '#22c55e',
    accent2: '#a3e635',
    tagline: 'An expense tracker with an AI assistant for spending insights.',
    description:
      'A MERN expense tracker where you can add expenses in plain English, ask an AI assistant questions about your spending, and log transactions from a Telegram bot. I added Redis caching on the reporting queries to keep the dashboard fast.',
    highlights: [
      'Gemini AI assistant that answers questions about your spending in plain language',
      'Login with JWT + email OTP (Brevo) and Google OAuth 2.0',
      'Redis caching on report queries brought response time down from 800ms to 120ms',
      'Telegram bot that parses expenses from normal text messages',
      'Excel report exports and monthly spending summaries',
    ],
    stack: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Gemini AI', 'Google OAuth', 'React', 'AWS EC2'],
    architecture: {
      flow: ['Client / Telegram', 'Express API', 'Intent Router', 'Gemini AI'],
      async: ['Report query', 'Redis cache', 'Fast dashboard'],
      stores: ['MongoDB', 'Google OAuth', 'JWT + OTP', 'AWS EC2'],
    },
    metrics: [
      { k: '85%', v: 'faster queries' },
      { k: '2', v: 'auth methods' },
      { k: 'AI', v: 'assistant' },
    ],
    links: { demo: 'https://fin-mate-zeta.vercel.app/', code: 'https://github.com/PrakashPalsaniya/finmate' },
  },
  {
    id: 'screenly',
    name: 'Screenly',
    repo: 'cineaxis',
    lang: 'JavaScript',
    langColor: '#f1e05a',
    stars: 15,
    forks: 5,
    category: 'Real-time Ticketing',
    year: '2025',
    accent: '#7c5cff',
    accent2: '#22d3ee',
    tagline: 'A movie ticket booking app with live seat updates and payments.',
    description:
      'A movie ticket booking platform with live seat selection and online payments. When two people try to book the same seat, MongoDB transactions make sure only one booking goes through. Posters are served through a CDN and emails are sent in the background using a queue.',
    highlights: [
      'Live seat availability using Socket.IO so users see updates instantly',
      'MongoDB transactions to prevent two people booking the same seat',
      'Razorpay payments with idempotency keys so retries do not double-charge',
      'AWS Lambda resizes images on S3 upload; CloudFront CDN cut load time by 40%',
      'RabbitMQ queue for sending confirmation emails, with JWT auth and role-based access',
    ],
    stack: ['Node.js', 'Socket.IO', 'RabbitMQ', 'MongoDB', 'Razorpay', 'AWS S3', 'Lambda', 'CloudFront'],
    architecture: {
      flow: ['Client', 'Express API', 'Socket.IO', 'MongoDB Txn'],
      async: ['Booking event', 'RabbitMQ', 'Email Worker'],
      stores: ['Razorpay', 'AWS S3 + Lambda', 'CloudFront CDN', 'JWT / RBAC'],
    },
    metrics: [
      { k: '0', v: 'race conditions' },
      { k: '40%', v: 'faster media' },
      { k: 'Live', v: 'seat sync' },
    ],
    links: { demo: 'https://cineaxis.vercel.app/', code: 'https://github.com/PrakashPalsaniya/cineaxis' },
  },
  {
    id: 'pklinks',
    name: 'PKLinks',
    repo: 'Pklinks-micro-services',
    lang: 'JavaScript',
    langColor: '#f1e05a',
    stars: 9,
    forks: 2,
    category: 'Distributed Systems',
    year: '2025',
    accent: '#f97316',
    accent2: '#f43f5e',
    tagline: 'A URL shortener built as a set of small microservices.',
    description:
      'A URL shortener I built as six separate services behind an API Gateway to practice microservices. Redirects are cached in Redis so they stay fast, and click analytics are processed in the background so the redirect itself never waits.',
    highlights: [
      'Six services behind an API Gateway: Auth, Link, Redirect, Analytics and more',
      'Redis caching on redirects reduced latency by around 60% under load',
      'Click events are pushed to a queue and processed by a separate Analytics worker',
      'GeoIP and device parsing run in the background, off the redirect path',
      'Separate Auth service (JWT) and a Notification service that handles emails',
    ],
    stack: ['Node.js', 'Express', 'Redis', 'RabbitMQ', 'MongoDB', 'API Gateway', 'Docker Compose'],
    architecture: {
      flow: ['Client', 'API Gateway', 'Redirect Service', 'Redis Cache'],
      async: ['Click event', 'RabbitMQ', 'Analytics Worker'],
      stores: ['Auth Service', 'Link Service', 'Notification Service', 'MongoDB'],
    },
    metrics: [
      { k: '6', v: 'services' },
      { k: '60%', v: 'lower latency' },
      { k: 'Async', v: 'analytics' },
    ],
    links: { demo: 'https://pklinks-frontend.vercel.app', code: 'https://github.com/PrakashPalsaniya/Pklinks-micro-services' },
  },
]

export const skillGroups = [
  {
    title: 'Agentic / AI',
    items: ['RAG', 'LangGraph', 'LangChain', 'LLM APIs', 'Qdrant', 'Prompt Engineering'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Microservices', 'API Gateway', 'Socket.IO'],
  },
  {
    title: 'Data & Messaging',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'RabbitMQ', 'BullMQ'],
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS EC2', 'S3', 'Lambda', 'CloudFront', 'Docker', 'Docker Compose'],
  },
  {
    title: 'Languages & Core',
    items: ['C++', 'JavaScript', 'Python', 'SQL', 'DSA', 'System Design'],
  },
]

export const timeline = [
  {
    when: '2025',
    title: 'Building full projects',
    text: 'Built DocuMind, Finmate, Screenly and PKLinks. Each one let me try something new: an agentic RAG pipeline, an AI finance assistant, real-time booking, and microservices.',
  },
  {
    when: '2024',
    title: 'Learning backend and DSA',
    text: 'Spent time learning message queues, caching and how to split an app into services. Also solved 500+ DSA problems to get comfortable with data structures.',
  },
  {
    when: '2023',
    title: 'Started B.Tech at NIT Srinagar',
    text: 'Began my Information Technology degree and built up the basics in OS, DBMS and computer networks.',
  },
]
