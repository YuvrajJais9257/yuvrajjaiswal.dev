# Yuvraj Jaiswal - Portfolio Website

A modern, recruiter-focused portfolio website showcasing my experience as a Full Stack Developer specializing in AI/LLM Integration, React.js, Python (Flask/FastAPI), PostgreSQL, and advanced AI capabilities.

## 🚀 Key Highlights

- **2 years** of production experience building AI-powered applications
- **80+** production APIs architected and deployed with JWT authentication
- **1000+** active users served with AI-powered analytics and ITSM solutions
- **99.9%** system uptime achieved through strategic optimization and Docker deployment
- **AI/LLM Integration** expertise with LangChain, OpenAI GPT-4, and RAG pipelines
- **Enterprise Applications** solving real business problems with measurable impact

## 🎯 Recent Wins

- Built AI-powered Text-to-SQL generator using **LangChain multi-agent workflows** and **OpenAI GPT-4** achieving **90% accuracy**, increasing self-service analytics adoption by **65%**
- Architected REST API ecosystem with **80+ production endpoints** using Flask/FastAPI handling **5000+ assets** in real-time
- Optimized PostgreSQL database performance by **45%** (12s → 6.6s) through strategic indexing and query optimization
- Developed comprehensive ITSM platform (HyphenDesk) with incident management, workflow automation, and RBAC
- Created automated ETL pipelines using **Pandas** to process **5000+ records** with data normalization
- Deployed **100+ applications** using Docker and CI/CD pipelines maintaining **99.9% uptime**

## 🛠️ Tech Stack

### Frontend
- **Framework**: React.js 19.0 with TypeScript
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS with custom gradients
- **UI Components**: Radix UI, Material-UI, Lucide React
- **Build Tool**: Vite

### Backend & AI
- **Languages**: Python, JavaScript (ES6+), TypeScript
- **Backend**: Flask, FastAPI, Node.js
- **AI/ML**: LangChain, OpenAI GPT-4, Multi-Agent Systems, RAG Pipelines
- **Database**: PostgreSQL, MySQL, MongoDB, SQLAlchemy ORM
- **DevOps**: Docker, CI/CD, Git, Linux, Nginx

### Data & Analytics
- **Data Processing**: Pandas, ETL Pipelines
- **Visualization**: Highcharts, Dynamic Charts, Real-time Analytics
- **APIs**: 80+ RESTful endpoints with JWT Authentication

## 📋 Portfolio Sections

1. **Navigation**: Fixed header with smooth scroll navigation and hire me CTA
2. **Hero**: Eye-catching introduction with AI/LLM integration focus and resume download
3. **Stats**: Key metrics (2 years experience, 80+ APIs, 1000+ users, 99.9% uptime, 5000+ assets, 20+ locations)
4. **About**: Professional summary with recent wins and AI achievements
5. **Experience**: Detailed work experience at Erasmith Pvt Ltd with AI/LLM integration focus
6. **Projects**: Featured production projects with live preview system
7. **Skills**: Technical skills organized by AI/ML, Frontend, Backend, Database, DevOps categories
8. **Currently Exploring**: Advanced AI learning, building AI-powered tools, and job seeking
9. **Contact**: Multiple contact methods with immediate availability
10. **Footer**: Social links and professional copyright

## 🖼️ Project Preview System

Each project has a dedicated preview page with comprehensive details:

- **Detailed project information** and technical specifications
- **Screenshot galleries** with visual demonstrations
- **AI/LLM integration** explanations and workflows
- **Impact metrics** and performance improvements
- **Technical challenges** and innovative solutions
- **Related projects** navigation and cross-references

### Available Preview Pages:

- `/projects/smart-job-hunter` - AI Search Agent with LangChain AgentExecutor
- `/projects/hyphenview` - AI-powered analytics platform with Text-to-SQL
- `/projects/hyphendesk` - Comprehensive ITSM platform with workflow automation
- `/projects/reporting-console` - Enterprise reporting system with AI capabilities
- `/projects/inventory-management` - Asset management system with real-time tracking

## 🤖 Featured AI/ML Projects

### 1. Smart Job Hunter - AI Search Agent
- **Tech**: Python, Streamlit, LangChain AgentExecutor, Tavily API, Groq, LLaMA-3
- **Features**: Tool-calling capabilities, resume-aware filtering, structured reasoning
- **Impact**: Advanced agent design with explainable matches and multi-step workflows

### 2. HyphenView - AI-Powered Analytics Platform  
- **Tech**: Flask, FastAPI, LangChain, OpenAI GPT-4, React.js, PostgreSQL
- **Features**: Multi-agent workflows, Text-to-SQL generation, natural language processing
- **Impact**: 90% query accuracy, 65% user adoption, serving 50+ users

### 3. HyphenDesk - IT Service Management Platform
- **Tech**: React.js 19.0, Redux Toolkit, Material-UI, FastAPI, PostgreSQL, JWT Auth
- **Features**: Incident management, asset tracking, workflow automation, RBAC
- **Impact**: Comprehensive ITSM solution with automated processes

## 🎯 Professional Achievements

- **2 years** of production experience with AI/LLM integration
- **80+** RESTful API endpoints built and maintained
- **1000+** active users served across enterprise applications
- **99.9%** system uptime through strategic optimization
- **90%** AI query accuracy with LangChain multi-agent workflows
- **65%** increase in self-service analytics adoption
- **45%** database performance improvement (12s → 6.6s)
- **5000+** assets managed through automated ETL pipelines
- **AI Integration** expertise with natural language processing and automated query generation

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/YuvrajJais9257/portfolio
cd portfolio
```

2. Install dependencies

```bash
npm install
```

3. Add project screenshots

```bash
# Screenshots are now organized in public directory:
# public/Hyphen_Screenshots/                    # HyphenView platform (29 files)
# public/Hyphendesk_Screenshots/                # HyphenDesk ITSM platform (37 files)  
# public/Reporting_Console_Screenshots/         # Reporting system (10 files)
# public/Inventory_Management_Screenshots/      # Inventory system (9 files)
# public/Ai_smart_Job_hunter.png               # AI job hunter demo
```

4. Start development server

```bash
npm run dev
```

5. Build for production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ProjectPreviewLayout.tsx    # Shared layout for project previews
│   ├── Hero.tsx                    # AI/LLM integration focused hero section
│   ├── About.tsx                   # Professional summary with AI achievements
│   ├── Experience.tsx              # AI/LLM integration work experience
│   ├── Projects.tsx                # Featured projects with screenshots
│   ├── Skills.tsx                  # AI/ML first technical skills
│   └── ...
├── pages/
│   ├── projects/
│   │   ├── SmartJobHunterPreview.tsx      # NEW: AI Search Agent
│   │   ├── HyphenViewPreview.tsx          # AI-powered analytics platform
│   │   ├── HyphenDeskPreview.tsx          # UPDATED: Comprehensive ITSM platform
│   │   ├── ReportingConsolePreview.tsx    # Enterprise reporting system
│   │   └── InventoryManagementPreview.tsx # Asset management system
│   └── Index.tsx
public/
├── Hyphen_Screenshots/                    # HyphenView platform screenshots (29 files)
├── Hyphendesk_Screenshots/                # NEW: HyphenDesk ITSM screenshots (37 files)
├── Reporting_Console_Screenshots/         # Reporting module screenshots (10 files)
├── Inventory_Management_Screenshots/      # Inventory module screenshots (9 files)
├── Ai_smart_Job_hunter.png               # NEW: AI job hunter screenshot
└── Yuvraj_Jaiswal_Full_Stack_Dev_2_Years_Resume.pdf  # UPDATED: Latest resume
```

## 🔗 Source Code Repositories

- **Smart Job Hunter**: https://github.com/YuvrajJais9257/Smart-Job-Hunter (AI Search Agent)
- **HyphenView**: https://github.com/YuvrajJais9257/HyphenView.git (AI-powered analytics platform)
- **HyphenDesk**: https://github.com/YuvrajJais9257/Hyphendesk.git (ITSM platform)
- **Reporting Console**: https://github.com/YuvrajJais9257/Hyphenview_Reporting_Console.git (Enterprise reporting)
- **Inventory Management**: https://github.com/YuvrajJais9257/Inventory_Management_System.git (Asset management)

## 📱 Contact Information

- **Email**: [yuvraj.jaiswal@gmail.com](mailto:yuvraj.jaiswal@gmail.com)
- **Phone**: [+91-7838379576](tel:+917838379576)
- **LinkedIn**: [yuvraj-jaiswal-65ab5a217](https://linkedin.com/in/yuvraj-jaiswal-65ab5a217)
- **GitHub**: [YuvrajJais9257](https://github.com/YuvrajJais9257)
- **Location**: Noida, India
- **Availability**: Immediate to 15 days

## 💼 Open to Opportunities

Currently seeking **Full Stack Developer** roles with **AI/LLM Integration** focus at ₹12-20 LPA in:

- **Product-based companies** building AI-powered, scalable applications
- **AI-forward startups** with modern tech stacks (LangChain, OpenAI, RAG pipelines)
- **Impact-driven roles** where I can contribute to measurable business value through AI innovation
- **Remote, Noida, Bangalore, or Gurgaon** locations
- **Available**: Immediate to 15 days

### What I Bring:
- **AI/LLM Expertise**: LangChain, OpenAI GPT-4, Multi-Agent Systems, RAG Pipelines, Text-to-SQL
- **Full Stack Proficiency**: React, Python (Flask/FastAPI), PostgreSQL, 80+ production APIs
- **Business Impact**: Proven track record of 90% AI accuracy, 65% user adoption, 99.9% uptime
- **Scale Experience**: Built systems serving 1000+ users with enterprise-grade reliability
- **AI Innovation**: Natural language processing, automated query generation, intelligent workflows

## 📄 License

© 2025 Yuvraj Jaiswal. All rights reserved.
