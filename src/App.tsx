import React from "react";
import "./App.css";

interface SkillCategory {
  icon: string;
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: "💻",
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++"],
  },
  {
    icon: "⚛️",
    title: "Frontend Development",
    skills: ["React", "HTML", "CSS", "Vite"],
  },
  {
    icon: "🛠️",
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Figma"],
  },
];

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Kaur's UI Garden</h1>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <h2>Welcome to My Creative Space</h2>
      <p>
        I design and build beautiful, user-friendly web interfaces powered by React and modern web tools.
      </p>
      <button className="primary-btn">Explore My Work</button>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <SkillCategoryCard key={index} category={category} />
        ))}
      </div>
    </section>
  );
}

function SkillCategoryCard({ category }: { category: SkillCategory }) {
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

function Footer() {
  return (
    <footer className="footer" id="contact">
      <p>© 2025 Kaur's UI Garden. All Rights Reserved.</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills />
      <Footer />
    </div>
  );
}