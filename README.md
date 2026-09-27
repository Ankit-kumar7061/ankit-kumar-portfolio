# Ankit Kumar — Portfolio

A premium, dark, cinematic personal portfolio built with React + Vite.

## Setup

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build a production version:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/   # Navbar, Hero, About, Skills, ProjectCard, ProjectModal,
                # Projects, AISection, Education, Certifications, Contact, Footer, Intro, Reveal
  data/
    data.js     # all project/skill/education/certification/contact content
  index.css     # design system (colors, layout, animations)
  App.jsx
  main.jsx
public/
  assets/
    profile.jpg
    resume file (see below)
    project-movie.jpg
    project-restaurant.jpg
    project-genai.jpg
```

## Where your files live

Your photo, resume and project images are already placed in `public/assets/`:

- `public/assets/profile.jpg` — your profile photo
- `public/assets/Ankit_Kumar_Resume.pdf` — your resume (linked from the navbar and hero "Download Resume" buttons)
- `public/assets/project-movie.jpg` — Movie Recommender / CineScope reference image
- `public/assets/project-restaurant.jpg` — Restaurant Management (MultiResto) reference image
- `public/assets/project-genai.jpg` — GenAI Image Captioning reference image

If you ever want to swap any of these, just replace the file in `public/assets/` with a new one of the same name (or update the path in `src/data/data.js`).

## Editing content

All personal/project/education/certification content lives in `src/data/data.js` and directly inside the relevant component files (e.g. hero text in `src/components/Hero.jsx`, about text in `src/components/About.jsx`). Nothing is hardcoded elsewhere, so updates are quick.

## Notes

- Built with plain CSS (no Tailwind/UI framework) so there are no extra build dependencies.
- Respects `prefers-reduced-motion`.
- Fully responsive: desktop, tablet and mobile (hamburger menu below 860px).
- The Restaurant Management project image is a polished visual reference (as noted in the UI), not a screenshot of the exact deployed app.
- No live deployment URLs are included since none exist yet — only GitHub links from the resume.
