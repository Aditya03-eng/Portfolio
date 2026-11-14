// ── Portfolio Data ──
// Central editable data file for all portfolio content.
// Update this file to change any information displayed on the website.

export const personalInfo = {
  name: 'Aditya Kumar',
  tagline: 'BUILDING IDEAS. ENGINEERING WHAT\'S NEXT.',
  subtitle: 'B.Tech Computer Science Engineering student with a focus on software development, AI/ML, and building practical technology projects.',
  email: 'your.email@example.com', // ← Update with your actual email
  location: 'India',
  education: {
    degree: 'B.Tech Computer Science Engineering',
    university: 'Shoolini University',
    period: '2025 – 2029',
  },
  profiles: {
    github: 'https://github.com/Aditya03-eng',
    linkedin: 'https://www.linkedin.com/in/aditya-kumar-915800396/',
  },
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const interests = [
  'Software Development',
  'Artificial Intelligence & Machine Learning',
  'Data Analytics',
  'Web Development',
  'Building Practical Technology Projects',
];

export const experience = [
  {
    company: 'Thiranex',
    role: 'Web Development Intern',
    type: 'Online / Remote',
    description: [
      'Successfully completed an online/remote Web Development Internship.',
      'Gained experience through a practical development and learning opportunity.',
      'Acknowledge Gaurav Kumar Sir for mentorship and ByteXL for supporting the opportunity.',
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
  featured?: boolean;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    title: 'Lumora',
    description: 'An AI-powered university student-success intelligence platform designed to help administrators monitor student performance, identify at-risk students, analyse skill gaps, and make data-driven academic decisions.',
    technologies: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Recharts', 'Lucide React', 'PapaParse', 'FastAPI'],
    github: 'https://github.com/Aditya03-eng/lumora-student-success',
    live: 'https://lumora-student-success.vercel.app',
    featured: true,
    highlights: [
      'Student performance analytics',
      'Risk identification & cohort segmentation',
      'Skill-gap intelligence',
      'Faculty mentorship management',
      'AI prescriptive recommendations',
      'Mock interviews & coding assessments',
    ],
  },
  {
    title: 'HR Analytics — Machine Learning',
    description: 'Machine learning project on HR analytics — data cleaning, handling missing values, EDA, preprocessing, and visualisation using a real HR dataset.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Jupyter Notebook'],
    github: 'https://github.com/Aditya03-eng/HR-Analytics-Machine-Learning-',
  },
  {
    title: 'House Price Prediction',
    description: 'ML model for predicting house prices using regression techniques with comprehensive data preprocessing and feature engineering.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter Notebook'],
    github: 'https://github.com/Aditya03-eng/house-prediction',
  },
  {
    title: 'Calorie Prediction App',
    description: 'Machine learning application that predicts calorie burn based on user input parameters using trained regression models.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter Notebook'],
    github: 'https://github.com/Aditya03-eng/calorie-prediction-app',
  },
  {
    title: 'Heart Disease Prediction',
    description: 'ML-based classification model to predict heart disease risk using patient health metrics and clinical data.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter Notebook'],
    github: 'https://github.com/Aditya03-eng/heart-disease-app',
  },
  {
    title: 'E-Commerce Website',
    description: 'A frontend e-commerce website built with HTML, CSS, and deployed on Vercel.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Aditya03-eng/E-Commerce',
    live: 'https://e-commerce-two-lemon-99.vercel.app',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard application providing real-time weather data and forecasts.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Aditya03-eng/Weather-Dashboard',
  },
];

export const skills = {
  'Programming': ['Python', 'JavaScript', 'TypeScript', 'C'],
  'Frontend': ['React', 'HTML', 'CSS', 'Tailwind CSS'],
  'Backend': ['FastAPI', 'Node.js'],
  'Databases': ['SQL'],
  'AI / ML': ['Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  'Data Analytics': ['EDA', 'Data Preprocessing', 'Data Visualisation', 'Jupyter Notebook'],
  'Developer Tools': ['Git', 'GitHub', 'VS Code', 'Vite', 'Vercel'],
};

export const certifications = [
  {
    title: 'Microsoft Certified: Azure AI Fundamentals',
    issuer: 'Microsoft',
    date: 'March 2026',
    type: 'certification' as const,
  },
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'October 2026',
    type: 'certification' as const,
  },
  {
    title: 'Microsoft AI Skills Fest 2026',
    issuer: 'Microsoft',
    date: '2026',
    type: 'achievement' as const,
  },
];

export const achievements = [
  {
    title: 'HacXLerate 2026',
    position: '2nd Position — University Level',
    description: [
      'Participated in first hackathon at university level.',
      'Built and presented Lumora — Student Success Intelligence Platform.',
      'Did not qualify for the second round.',
    ],
  },
];
