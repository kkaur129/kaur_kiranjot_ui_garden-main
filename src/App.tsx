import React from "react";
import "./App.css";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

interface SetupItem {
  title: string;
  icon: string;
  summary: string;
  items: string[];
}

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <DeveloperSetup />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="logo">Kiranjot Kaur</h1>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#setup">Dev Setup</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Full Stack Developer</h1>
        <p className="hero-subtitle">
          Building modern web applications with React, Node.js, and cloud technologies
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>
            I am a passionate full-stack developer with experience in building modern web
            applications. Throughout my academic journey, I have completed various projects
            demonstrating proficiency in front-end and back-end technologies, deployment pipelines,
            and best coding practices.
          </p>
          <p>
            My focus is on creating efficient, scalable, and user-friendly applications using the
            latest web technologies and following industry-standard development workflows.
          </p>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects: Project[] = [
    {
      title: "UI Component Library",
      description:
        "A comprehensive React component library built with Storybook, featuring reusable UI components with extensive documentation and testing.",
      image: "🎨",
      tech: ["React", "Storybook", "CSS3", "JavaScript"],
      link: "#",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.",
      image: "🛒",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      link: "#",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative task management tool with real-time updates, team collaboration features, and project tracking capabilities.",
      image: "📋",
      tech: ["React", "Firebase", "Material-UI", "Redux"],
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather application displaying real-time weather data, forecasts, and historical weather patterns using external APIs.",
      image: "🌤️",
      tech: ["React", "REST API", "Chart.js", "CSS3"],
      link: "#",
    },
    {
      title: "Blog CMS",
      description:
        "Content management system for blogs with markdown support, image uploads, SEO optimization, and user management.",
      image: "✍️",
      tech: ["React", "Node.js", "PostgreSQL", "AWS S3"],
      link: "#",
    },
    {
      title: "Portfolio Website (This Site)",
      description:
        "Dockerized React portfolio website with CI/CD pipeline, deployed using modern DevOps practices and containerization.",
      image: "💼",
      tech: ["React", "Docker", "Nginx", "CI/CD"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card">
      <div className="project-icon">{project.image}</div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-tech">
        {project.tech.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
      <a href={project.link} className="project-link">
        View Project →
      </a>
    </div>
  );
}

function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      icon: "💻",
      skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Python", "Java", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      icon: "⚛️",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "Next.js",
        "Redux",
        "Material-UI",
        "Tailwind CSS",
      ],
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: ["Git & GitHub", "Docker", "AWS", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"],
    },
    {
      title: "DevOps & Deployment",
      icon: "🚀",
      skills: ["CI/CD Pipelines", "GitHub Actions", "Nginx", "Linux", "Webpack", "npm/yarn"],
    },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-description">
          A comprehensive overview of programming languages, frameworks, and tools I work with to
          build modern web applications.
        </p>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ category }: { category: SkillCategory }) {
  return (
    <div className="skill-category">
      <div className="skill-icon">{category.icon}</div>
      <h3 className="skill-title">{category.title}</h3>
      <ul className="skill-list">
        {category.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function DeveloperSetup() {
  const setupItems: SetupItem[] = [
    {
      title: "VS Code Setup",
      icon: "📝",
      summary: "My primary code editor configured for maximum productivity",
      items: [
        "Extensions: ESLint, Prettier, GitLens, Docker, Live Server",
        "Theme: One Dark Pro / Dracula",
        "Settings: Auto-save, format on save, bracket pair colorization",
      ],
    },
    {
      title: "Terminal Setup",
      icon: "⌨️",
      summary: "Command-line environment optimized for development workflows",
      items: [
        "Terminal: Windows Terminal / iTerm2",
        "Shell: Git Bash / Zsh with Oh My Zsh",
        "Aliases for common commands (git, docker, npm)",
      ],
    },
    {
      title: "Editor Preferences",
      icon: "✨",
      summary: "Font and appearance settings for comfortable coding sessions",
      items: [
        "Font: Fira Code / JetBrains Mono with ligatures",
        "Font Size: 14-16px",
        "Line Height: 1.5-1.6 for better readability",
      ],
    },
  ];

  return (
    <section id="setup" className="section developer-setup">
      <div className="container">
        <h2 className="section-title">Developer Setup</h2>
        <p className="section-description">
          Tools and configurations I use daily to maintain an efficient development environment.
        </p>
        <div className="setup-grid">
          {setupItems.map((item, index) => (
            <SetupCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SetupCard({ item }: { item: SetupItem }) {
  return (
    <div className="setup-card">
      <div className="setup-icon">{item.icon}</div>
      <h3 className="setup-title">{item.title}</h3>
      <p className="setup-summary">{item.summary}</p>
      <ul className="setup-list">
        {item.items.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2025 Kiranjot Kaur. All rights reserved.</p>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:your.email@example.com">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
