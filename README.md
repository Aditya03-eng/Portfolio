# Aditya Kumar — Developer Portfolio

> **Building Ideas. Engineering What's Next.**

A premium, futuristic dark-themed developer portfolio built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Lucide React**. Designed with a minimal engineering operating-system aesthetic, fine subtle borders, and vivid red accents.

---

## 🌟 Overview & Highlights

- **Hero & Branding**: Minimal engineering aesthetic with technical grid background, ambient glow, and oversized typography.
- **About Section**: Academic background at **Shoolini University (B.Tech CSE, 2025–2029)**, technology interests, and core engineering focus.
- **Experience**: Web Development Internship at **Thiranex** (acknowledging Gaurav Kumar Sir for mentorship and ByteXL for opportunity support).
- **Featured Project — [Lumora](https://lumora-student-success.vercel.app)**: An AI-powered university student-success intelligence platform showcasing performance analytics, risk identification, cohort segmentation, faculty mentorship management, and prescriptive AI recommendations.
- **Verified GitHub Projects**: Clean project cards highlighting verified machine learning & web repositories with tech tags, source code, and live demos.
- **Skills Matrix**: Seven distinct categories covering Programming, Frontend, Backend, Databases, AI/ML, Data Analytics, and Developer Tools.
- **Certifications**: Microsoft Certified Azure AI Fundamentals, Azure Fundamentals, and Microsoft AI Skills Fest achievement.
- **Achievements**: **HacXLerate 2026** — 2nd Position at University Level presenting Lumora.
- **Contact & Footer**: Functional links to GitHub, LinkedIn, and direct mail contact.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Inter & JetBrains Mono

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 1. Clone the repository
```bash
git clone https://github.com/Aditya03-eng/aditya-portfolio.git
cd aditya-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start local development server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 5. Preview production build locally
```bash
npm run preview
```

---

## 📂 Project Structure

```
aditya-portfolio/
├── public/
│   └── favicon.svg           # Custom branded SVG favicon
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # Sticky responsive navbar with mobile drawer
│   │   ├── Hero.tsx          # Technical hero with grid and call-to-actions
│   │   ├── About.tsx         # Bio, education, location, and interests
│   │   ├── Experience.tsx    # Thiranex internship timeline card
│   │   ├── Projects.tsx      # Lumora featured showcase + GitHub repository cards
│   │   ├── Skills.tsx        # Categorized technical competencies
│   │   ├── Certifications.tsx# Microsoft certification badges
│   │   ├── Achievements.tsx  # HacXLerate 2026 hackathon recognition
│   │   ├── Contact.tsx       # Direct outreach links (Email, GitHub, LinkedIn)
│   │   └── Footer.tsx        # Responsive footer with quick links and copyright
│   ├── data.ts               # Central editable data file for all portfolio content
│   ├── useScrollReveal.ts    # Lightweight IntersectionObserver animation hook
│   ├── App.tsx               # Main page layout orchestrator
│   ├── main.tsx              # React entry point
│   └── index.css             # Tailwind base styles, keyframes, and utilities
├── index.html                # HTML entry point with complete SEO metadata
├── tailwind.config.js        # Custom palette (#080808, #FF3030, #00D5FF)
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
└── README.md
```

---

## ⚙️ Customization

All portfolio data (name, links, bio, projects, skills, certifications, and email) is centralized in:
```
src/data.ts
```
Edit this single file to update your personal information or add new repositories anytime.

---

## 🌐 Deployment to Vercel

### Option 1: Via Vercel Web Dashboard (Recommended)

1. Push your repository to GitHub:
   ```bash
   git remote add origin https://github.com/Aditya03-eng/aditya-portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** -> **"Project"**.
4. Import your `aditya-portfolio` repository.
5. Vercel automatically detects the Vite configuration:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **Deploy**.

### Option 2: Via Vercel CLI

```bash
npm install -g vercel
vercel
```

---

## 👤 Author

**Aditya Kumar**
- GitHub: [@Aditya03-eng](https://github.com/Aditya03-eng)
- LinkedIn: [aditya-kumar-915800396](https://www.linkedin.com/in/aditya-kumar-915800396/)
- University: Shoolini University (B.Tech CSE, 2025–2029)
