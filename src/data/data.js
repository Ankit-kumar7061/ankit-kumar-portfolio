export const skillCategories = {
  "Programming": ["Python", "Java", "C", "C++"],
  "Web Development": ["HTML5", "CSS3", "JavaScript", "React", "Django", "Django REST Framework", "REST APIs", "Django ORM"],
  "Database": ["SQL", "MySQL", "PostgreSQL", "DBMS"],
  "Data / ML": ["Pandas", "NumPy", "Scikit-learn", "Machine Learning", "TF-IDF", "CountVectorizer", "Cosine Similarity", "EDA"],
  "AI / GenAI": ["GenAI", "Prompt Engineering", "LangChain", "LangGraph", "Agentic AI"],
  "Tools": ["Git", "GitHub", "VS Code", "Streamlit"],
  "Cloud": ["AWS", "S3", "EC2", "Lambda", "EBS"],
};

export const projects = [
  {
    title: "Movie Recommender System",
    img: "/assets/project-movie.jpg",
    url: "localhost:8501",
    desc: "An ML-powered content-based movie recommendation system built with Python and Streamlit.",
    tags: ["Python", "Streamlit", "Pandas", "Scikit-learn", "TMDB API", "Cosine Similarity"],
    github: "https://github.com/Ankit-kumar7061/movie_recommender_system",
    modal: {
      overview: "A content-based movie recommendation system built on the TMDB dataset, deployed as an interactive Streamlit web app.",
      problem: "Finding movies similar to ones a viewer already likes usually means manually browsing genres and ratings.",
      solution: "Processed 5,000+ movies across six features (title, genre, cast, crew, keywords, overview), then used Count Vectorizer and Cosine Similarity to compute movie-to-movie similarity scores.",
      tech: "Python, Pandas, NumPy, Scikit-learn, Jupyter Notebook, Streamlit.",
      features: [
        "Cleaned and merged multiple CSV data sources, handling nulls and nested JSON fields",
        "Feature engineering across genre, cast and keyword columns",
        "Interactive Streamlit app returning top-5 recommendations instantly",
      ],
      contribution: "Designed and implemented the full pipeline — data cleaning, feature engineering, similarity modeling and the Streamlit interface.",
      outcome: "A working app where selecting any movie instantly surfaces five similar recommendations.",
    },
  },
  {
    title: "Restaurant Management Web Application",
    img: "/assets/project-restaurant.jpg",
    url: null,
    desc: "A Django-based restaurant management web application designed to manage restaurant operations and booking workflows.",
    tags: ["Django", "HTML", "CSS", "SQLite", "Mailtrap SMTP"],
    github: "https://github.com/Ankit-kumar7061",
    reference: true,
    modal: {
      overview: "A full-stack restaurant management web application supporting menu browsing, table booking and automated email notifications.",
      problem: "Restaurants need a simple, structured way to manage menus, bookings and customer communication in one place.",
      solution: "Built on Django's MVT architecture across five-plus database models to separate application logic, data and interface cleanly.",
      tech: "Python, Django, HTML, CSS, SQLite, Mailtrap SMTP.",
      features: [
        "Django ORM operations across menu items, bookings, customers and orders",
        "Automated email confirmations for every table booking via Mailtrap SMTP",
        "Three core modules: menu browsing, table booking, notifications",
      ],
      contribution: "Built the Django backend, data models and email notification workflow end to end.",
      outcome: "100% automated email confirmation delivery for every booking request.",
    },
  },
  {
    title: "GenAI Powered Image Captioning",
    img: "/assets/project-genai.jpg",
    url: null,
    desc: "An AI-powered image captioning application that generates meaningful descriptions from uploaded images.",
    tags: ["BLIP", "Hugging Face Transformers", "PyTorch", "Gradio", "Python"],
    github: "https://github.com/Ankit-kumar7061",
    modal: {
      overview: "An AI-powered image captioning system using the BLIP vision-language model to generate descriptive captions for uploaded images.",
      problem: "Automatically describing image content in natural language requires combining vision and language models effectively.",
      solution: "Integrated the Hugging Face Transformers pipeline with the pre-trained BLIP model for image feature extraction and caption generation, using transfer learning instead of training from scratch.",
      tech: "Python, Hugging Face Transformers, PyTorch, Gradio, BLIP.",
      features: [
        "Real-time caption generation in under 3 seconds",
        "Gradio UI for uploading images and viewing captions",
        "Transfer learning on a pre-trained vision-language model",
      ],
      contribution: "Integrated the BLIP model pipeline and built the Gradio interface for real-time use.",
      outcome: "A working demo that generates accurate captions for any uploaded image in real time.",
    },
  },
];

export const certifications = [
  { name: "SQL", org: "Coursera / IBM · 2024" },
  { name: "Python with Generative AI", org: "Coursera" },
  { name: "DSA using C/C++", org: "Udemy" },
  { name: "Python", org: "Udemy · 2024" },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Pimpri Chinchwad University, Pune, Maharashtra",
    period: "Jul 2024 – May 2026",
    cgpa: "8.94",
    status: "Completed",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Aisect University, Hazaribag, Jharkhand",
    period: "Aug 2021 – May 2024",
    cgpa: "8.14",
    status: "Completed",
  },
];

export const contact = {
  email: "kashyapankitapps@gmail.com",
  linkedin: "https://linkedin.com/in/ankit-kumar5",
  github: "https://github.com/Ankit-kumar7061",
};

export const aiNodes = [
  { label: "LLM / Prompting", core: true, x: 50, y: 50 },
  { label: "Agents", x: 18, y: 18 },
  { label: "Tools", x: 82, y: 18 },
  { label: "Memory", x: 14, y: 80 },
  { label: "RAG", x: 86, y: 80 },
  { label: "LangChain", x: 50, y: 10 },
  { label: "LangGraph", x: 50, y: 90 },
];
