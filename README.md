# Yuvraj Jaiswal — Portfolio

Personal portfolio website for **Yuvraj Jaiswal**, AI/LLM Engineer and Python Backend Engineer.

Live at: [yuvrajjaiswal.dev](https://yuvrajjaiswal.dev)

---

## About

2+ years building production AI systems at Erasmith Pvt Ltd — RAG pipelines, LangChain agents, async FastAPI backends, and LLM observability. This site is built to communicate that clearly to recruiters and hiring managers in under 10 seconds.

Target roles: AI/LLM Engineer · Applied AI Engineer · Python Backend Engineer

---

## Tech Stack

| Layer | Tools |
|---|---|
| Framework | React 18, TypeScript, Vite |
| Styling | Tailwind CSS, custom CSS design system |
| UI | Radix UI, Lucide React |
| Routing | React Router v6 |
| State | TanStack Query |

---

## Design System

- Background: `#0a0a0a` (dark) / `#fcfcfc` (light)
- Text: `#ededed` (dark) / `#18181b` (light)
- Accent: `#3b82f6` — used only on CTAs and interactive states
- Font: Inter, system-ui fallback
- Type scale: Display (clamp 2.5–4.5rem) · Section (2rem) · Body (16px) · Label (11px)
- Grid: 4px base, `py-28` section rhythm
- No gradients. No progress bars. No purple AI tropes.

---

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx          # Fixed nav, dark/light toggle
│   ├── Hero.tsx                # Display headline, CTAs, metrics strip
│   ├── About.tsx               # Bio + focus areas
│   ├── Experience.tsx          # Single role timeline card
│   ├── Projects.tsx            # Bento grid — HyphenView featured
│   ├── Skills.tsx              # 4-group skill cards
│   ├── CurrentlyExploring.tsx  # Pill tags
│   ├── Contact.tsx             # Email CTA + links
│   ├── Footer.tsx
│   └── ProjectPreviewLayout.tsx  # Shared project detail template
├── pages/
│   ├── Index.tsx
│   └── projects/
│       ├── HyphenViewPreview.tsx
│       ├── HyphenDeskPreview.tsx
│       ├── SmartJobHunterPreview.tsx
│       ├── ReportingConsolePreview.tsx
│       └── InventoryManagementPreview.tsx
public/
├── Hyphen_Screenshots/
├── Hyphendesk_Screenshots/
├── Reporting_Console_Screenshots/
├── Inventory_Management_Screenshots/
├── Ai_smart_Job_hunter.png
└── Yuvraj_Jaiswal_AI_LLM_Engineer_2.5_Years.pdf   ← active resume
```

---

## Routes

| Path | Page |
|---|---|
| `/` | Homepage |
| `/projects/hyphenview` | HyphenView case study |
| `/projects/hyphendesk` | HyphenDesk case study |
| `/projects/smart-job-hunter` | Smart Job Hunter case study |
| `/projects/reporting-console` | Reporting Console case study |
| `/projects/inventory-management` | Inventory Management case study |

---

## Getting Started

```bash
npm install
npm run dev       # dev server at localhost:5173
npm run build     # production build
npm run preview   # preview production build
```

Node 18+ required.

---

## Featured Projects

**HyphenView** — AI analytics platform. Text-to-SQL with LangChain, GPT-4, and Claude. 65% adoption across 50+ enterprise users.

**Smart Job Hunter** — Autonomous job search agent. LangChain AgentExecutor, LLaMA-3, Tavily API, resume-aware semantic matching.

**AI Budget Shopping Assistant** — Tool-calling agent with deterministic budget logic + LLM reasoning.

**Personal AI Knowledge Base** — Full-stack RAG app. FastAPI + ChromaDB + streaming chat.

---

## Contact

- Email: [yuvraj8257@gmail.com](mailto:yuvraj8257@gmail.com)
- LinkedIn: [yuvraj-jaiswal-65ab5a217](https://linkedin.com/in/yuvraj-jaiswal-65ab5a217)
- GitHub: [YuvrajJais9257](https://github.com/YuvrajJais9257)
- Location: Noida, India · Available immediately to 15 days

---

© 2025 Yuvraj Jaiswal. All screenshots from UAT/demo environments — portfolio purposes only.
