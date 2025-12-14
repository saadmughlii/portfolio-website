# React + TypeScript Portfolio

A modern, fast, and fully typed portfolio website built to demonstrate my skills as a **Software Engineering student**. The project emphasizes **clean structure, TypeScript usage, and modern frontend tooling**, making it suitable for internship and entry-level roles.

---

## 🎯 Purpose

This portfolio was created to:

- Showcase academic and personal projects
- Practice building scalable React applications with TypeScript
- Apply modern frontend tooling and best practices
- Serve as a foundation for continuous improvement during internships

---

## ✨ Tech Stack

- **React 18** – Component-based UI development
- **TypeScript** – Static typing for safety and maintainability
- **Vite** – Fast development server and optimized build tool
- **Tailwind CSS** – Utility-first styling using the Vite plugin
- **React Router** – Client-side routing

---

## 📁 Project Structure

```text
src/
 ├─ components/     # Reusable UI components
 ├─ pages/          # Page-level components (Home, Projects, Contact)
 ├─ assets/         # Images, icons, and static files
 ├─ App.tsx         # Application routes and layout
 ├─ main.tsx        # React entry point
 └─ index.css       # Tailwind CSS import
```

The structure follows common industry conventions and is designed to scale as new features are added.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/saadmughlii/portfolio-website.git
cd portfolio-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The application will be available at the URL shown in the terminal (usually `http://localhost:5173`).

---

## 🎨 Styling (Tailwind CSS)

Styling is implemented using **Tailwind CSS** via the official Vite plugin, enabling rapid UI development while maintaining consistency and responsiveness.

```css
@import "tailwindcss";
```

No PostCSS or Tailwind configuration file is required unless further customization is needed.

---

## 🧭 Routing

Client-side routing is handled using **React Router**, allowing for clean navigation between pages without full page reloads.

---

## 📦 Build for Production

```bash
npm run build
```

An optimized production build will be generated in the `dist/` directory.

---

## 🌍 Deployment

The project can be deployed using platforms such as:

- **Netlify** (recommended)
- **Vercel**
- **GitHub Pages**

Example Netlify settings:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

---

## 🔮 Future Improvements

- Dark mode support
- Improved accessibility
- Animations and transitions (Framer Motion)
- Contact form integration
- Additional project case studies

---

## 📄 License

This project is open source and available under the **MIT License**.

---

**Author:** Saad Arshad Pervez Mughal
Software Engineering Student
