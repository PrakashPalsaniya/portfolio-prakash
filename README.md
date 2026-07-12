# Portfolio — Prakash Palsaniya

My personal portfolio, themed to look like a GitHub profile page. Backend &
AI engineer — this is where I keep my projects, stack and contact info.

**Live:** https://prakash-portfolio.vercel.app

## Tech

- React + Vite
- Plain CSS (GitHub dark/light theme, custom properties)
- Framer-free, no UI kit — everything hand-built

## Projects featured

- **DocuMind** — agentic RAG chat-with-PDF (LangGraph + Qdrant)
- **Finmate** — AI expense tracker (MERN + Gemini)
- **Screenly** — real-time movie ticketing (Socket.IO + RabbitMQ)
- **PKLinks** — URL shortener built as microservices

## Run locally

```bash
npm install
npm run dev      # start dev server
npm run build    # production build to /dist
npm run preview  # preview the build
```

## Deploy

Deployed on Vercel. `vercel.json` handles SPA routing and asset caching.
