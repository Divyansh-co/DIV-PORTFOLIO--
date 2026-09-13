# 🚀 Divyansh Mishra — 3D Interactive Portfolio

A modern, high-performance full-stack 3D portfolio website showcasing full-stack engineering, multi-agent AI architectures, and interactive 3D graphics.

[![GitHub Pages](https://github.com/Divyansh-co/DIV-PORTFOLIO-/actions/workflows/deploy.yml/badge.svg)](https://github.com/Divyansh-co/DIV-PORTFOLIO-/actions/workflows/deploy.yml)
[![Live Preview](https://img.shields.io/badge/Live-Preview-FF0000?style=flat&logo=googlechrome&logoColor=white)](https://divyansh-co.github.io/DIV-PORTFOLIO-/)

---

## 🌟 Features & Highlights

- **Interactive 3D Cartoon Avatar Head**: Custom Three.js 3D avatar with real-time mouse-tracking gaze, natural eyelid blinks, breathing motion, and glowing crimson rim lighting.
- **Pure Black & Crimson Aesthetic**: High-contrast nocturnal brutalist design with custom glowing buttons, tilt cards, and cyber grid effects.
- **Complete Architecture Flow**:
  1. **Hero**: Big display typography with interactive 3D avatar head and CTA buttons.
  2. **Services**: Multi-agent AI systems, full-stack development, and backend microservices cards.
  3. **About**: Engineering background, achievements, and tech stack.
  4. **Work / Projects**: Featured flagship projects with interactive cards and live status frames (VeriTrust AI, TutorConnect, APISentry, SentinelPrompt).
  5. **Experience**: Leadership and project milestones (IEEE, IIT Virtual Lab Portal, Hackathons).
  6. **FAQ & Contact**: Dynamic accordion FAQ and direct contact form connected to the backend API.
- **Production Backend API**: Built-in Node.js server handling contact submissions (`/api/contact`), message validation, and health checks (`/api/health`).
- **Automated CI/CD**: Seamless GitHub Actions workflow for zero-downtime deployment to GitHub Pages.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **3D Graphics**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom Glassmorphic Crimson Design System
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Endpoints**:
  - `GET /api/health`: Service health monitoring
  - `POST /api/contact`: Form submission receiver with validation and rate limits
  - `GET /api/messages`: Admin preview of local message submissions
- **CORS & Security**: Standard preflight and security headers

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Divyansh-co/DIV-PORTFOLIO-.git
cd DIV-PORTFOLIO-
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Servers

#### Start Frontend (Vite)
```bash
npm run dev
```
The frontend will launch at `http://localhost:5173`.

#### Start Backend API (Server)
```bash
npm run server
```
The backend will launch at `http://localhost:5000`.

---

## 📦 Build for Production

```bash
npm run build
```
Generates the optimized static distribution inside the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Deployment (GitHub Pages)

The project includes an automated deployment workflow at `.github/workflows/deploy.yml`. When you push to the `main` branch, GitHub Actions will automatically build and publish the site.

---

## 📬 Contact & Connect

- **Engineer**: Divyansh Mishra
- **Email**: [divyanshmishra.python@gmail.com](mailto:divyanshmishra.python@gmail.com)
- **LinkedIn**: [linkedin.com/in/divyanshmishra](https://www.linkedin.com/in/divyanshmishra/)
- **GitHub**: [github.com/Divyansh-co](https://github.com/Divyansh-co)
