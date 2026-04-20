# 🚀 AI Resume Analyzer

**A modern web application that uses Artificial Intelligence to analyze resumes, provide instant feedback, and optimize for Applicant Tracking Systems (ATS).**

---

## ✨ Features

*   📄 **PDF Upload**: Securely upload your resume via a drag-and-drop interface.
*   🤖 **AI-Powered Analysis**: Uses GPT-4o via Puter AI to review content, structure, and relevance.
*   📊 **Overall Score**: Get an instant 0–10 rating of your resume's quality.
*   🔍 **Strengths & Improvements**: Identify top strengths and specific areas for improvement.
*   📉 **Performance Metrics**: Detailed breakdown of Content Quality, Formatting, Keyword Usage, and ATS Compatibility.
*   ✅ **ATS Checklist**: Verify if essential sections (Contact, Experience, Education) are present.
*   🔑 **Keyword Optimization**: Get recommended industry keywords to beat the bots.
*   💡 **Actionable Tips**: Receive specific "Next Steps" to improve your chances of getting hired.

---

## 🛠️ Tech Stack

*   **Frontend**: React (Hooks), Vite, Tailwind CSS
*   **PDF Processing**: `pdfjs-dist` (Client-side text extraction)
*   **AI Engine**: Puter AI (GPT-4o Model)
*   **Deployment**: Vercel / Netlify

---

## 📂 Project Structure

```
ai-resume-analyzer/
├── src/
│   ├── App.jsx           # Main application component
│   ├── constants.js      # AI Prompts and configuration
│   ├── index.css         # Tailwind CSS styles
│   └── main.jsx          # React entry point
├── public/
│   └── index.html        # HTML template with Puter AI SDK
├── package.json
└── vite.config.js
```
