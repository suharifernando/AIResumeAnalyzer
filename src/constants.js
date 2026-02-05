// src/constants.js

const ANALYZE_RESUME_PROMPT = `
You are an expert resume reviewer. Analyze the provided resume text and provide a detailed assessment.

Your response MUST be a valid JSON object with the following structure:

{
  "overallScore": (number between 1-10, overall quality score),
  "strengths": [array of 3-5 top strengths],
  "improvements": [array of 3-5 areas for improvement],
  "summary": "Concise executive summary (2-3 sentences)",
  "performanceMetrics": {
    "contentQuality": (number 1-10),
    "formatting": (number 1-10),
    "keywordUsage": (number 1-10),
    "atsCompatibility": (number 1-10)
  },
  "actionItems": [array of 3-5 specific action items],
  "proTips": [array of 3-5 professional tips],
  "keywords": [array of 10-15 recommended keywords for this industry]
}

Resume Text:
{{DOCUMENT_TEXT}}
`;

const buildPresenceChecklist = (text) => {
  const checklist = [
    { label: "Name", present: false },
    { label: "Email", present: false },
    { label: "Phone", present: false },
    { label: "LinkedIn Profile", present: false },
    { label: "Portfolio/GitHub", present: false },
    { label: "Summary/Objective", present: false },
    { label: "Work Experience", present: false },
    { label: "Education", present: false },
    { label: "Skills", present: false },
    { label: "Certifications", present: false },
  ];

  checklist[0].present = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/.test(text);
  checklist[1].present = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(text);
  checklist[2].present = /(\+\d{1,3}\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}/.test(text);
  checklist[3].present = /linkedin\.com\/in\//i.test(text);
  checklist[4].present = /(github\.com|portfolio\.com|behance\.net)/i.test(text);
  checklist[5].present = /(summary|objective|profile)/i.test(text);
  checklist[6].present = /(work experience|employment|job history)/i.test(text);
  checklist[7].present = /(education|academic|degree)/i.test(text);
  checklist[8].present = /(skills|technical skills|competencies)/i.test(text);
  checklist[9].present = /(certifications|certificates|accreditations)/i.test(text);

  return checklist;
};

const METRIC_CONFIG = [
  {
    key: "contentQuality",
    label: "Content Quality",
    icon: "Ì≥ù",
    colorClass: "from-blue-500 to-cyan-500",
    shadowClass: "shadow-blue-500/20",
    defaultValue: 0,
  },
  {
    key: "formatting",
    label: "Formatting",
    icon: "Ìæ®",
    colorClass: "from-purple-500 to-pink-500",
    shadowClass: "shadow-purple-500/20",
    defaultValue: 0,
  },
  {
    key: "keywordUsage",
    label: "Keyword Usage",
    icon: "Ì¥ë",
    colorClass: "from-green-500 to-emerald-500",
    shadowClass: "shadow-green-500/20",
    defaultValue: 0,
  },
  {
    key: "atsCompatibility",
    label: "ATS Compatibility",
    icon: "Ì¥ñ",
    colorClass: "from-amber-500 to-orange-500",
    shadowClass: "shadow-amber-500/20",
    defaultValue: 0,
  },
];

const constants = { ANALYZE_RESUME_PROMPT };
export default constants;
export { buildPresenceChecklist, METRIC_CONFIG };
