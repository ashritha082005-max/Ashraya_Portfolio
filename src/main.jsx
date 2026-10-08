import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

/* =========================================================
   PERSONAL INFORMATION
========================================================= */

const PROFILE_IMAGE = `${import.meta.env.BASE_URL}profile.jpg/profile01.jpg`;

const RESUME_LINK = `${import.meta.env.BASE_URL}resume.pdf/resume (2).pdf`;

const GITHUB_LINK =
  "https://github.com/ashritha082005-max";

const LINKEDIN_LINK =
  "https://www.linkedin.com/in/ashritha-achary-a07003301/";

const EMAIL =
  "ashritha082005@gmail.com";

const PHONE =
  "6362793517";

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    number: "01",
    icon: "AI",
    title: "Ashraya AI",
    subtitle: "AI Emergency Response Copilot",

    description:
      "An AI-powered emergency response platform designed to provide structured guidance during critical situations such as accidents, fires, floods, severe bleeding, snake bites, heart emergencies and unconsciousness. The platform combines emergency assistance, SOS support, emergency contacts and location sharing into a full-stack web application.",

    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "GenAI",
      "JWT"
    ],

    link: "#",
    github: "https://github.com/ashritha082005-max/Ashraya_LocalLense_AI"
  },

  {
    number: "02",
    icon: "LL",
    title: "Ashraya_LocalLense_AI",
    subtitle: "AI-Powered Local Needs & Reuse Platform",

    description:
      "An AI-powered platform designed to help users discover practical local solutions through repair, reuse, donation, recycling and resale recommendations. The project combines Generative AI with location-based discovery using OpenStreetMap.",

    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "GenAI",
      "OpenStreetMap"
    ],

    link: "#",
    github:
      "https://github.com/ashritha082005-max/Ashraya_Business_Hub"
  },

  {
    number: "03",
    icon: "WEB",
    title: "ASHRAYA",
    subtitle: "Personal Portfolio & Digital Brand Website",

    description:
      "A responsive personal portfolio designed to showcase projects, technical skills, certifications and achievements through a modern interactive web experience with smooth animations and responsive layouts.",

    tags: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive Design"
    ],

    link: "#",
    github: "https://ashritha082005-max.github.io/Ashraya_Portfolio/"
  }
];

/* =========================================================
   SKILLS
========================================================= */

const skills = [
  ["Python", "Programming"],
  ["JavaScript", "Programming"],

  ["HTML5", "Frontend"],
  ["CSS3", "Frontend"],
  ["React.js", "Frontend"],
  ["Responsive Web Design", "Frontend"],

  ["Node.js", "Backend"],
  ["Express.js", "Backend"],
  ["REST APIs", "Backend"],

  ["MongoDB", "Database"],
  ["MySQL", "Database"],
  ["MongoDB Atlas", "Database"],

  ["Generative AI", "AI"],
  ["Prompt Engineering", "AI"],
  ["AI API Integration", "AI"],

  ["Git", "Tools"],
  ["GitHub", "Tools"],
  ["VS Code", "Tools"],
  ["Postman", "Tools"]
];

/* =========================================================
   CERTIFICATIONS
========================================================= */

const certifications = [
  {
    number: "01",
    title: "AWS Academy Graduate",
    subtitle: "Cloud Foundations",
    date: "SEP 2025"
  },

  {
    number: "02",
    title: "MongoDB CRUD Operations",
    subtitle: "Skill Badge",
    date: "OCT 2026"
  },

  {
    number: "03",
    title: "Introduction to Machine Learning",
    subtitle: "NPTEL — IIT Kharagpur",
    date: "ELITE · 61%"
  }
];

/* =========================================================
   NAVIGATION
========================================================= */

const navigation = [
  "home",
  "about",
  "skills",
  "projects",
  "education",
  "certifications",
  "contact"
];

/* =========================================================
   APP
========================================================= */

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [activeSkill, setActiveSkill] =
    useState("All");

  const [showTop, setShowTop] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("home");

  /* =======================================================
     SCROLL / REVEAL
  ======================================================= */

  useEffect(() => {
    const revealElements =
      document.querySelectorAll(".reveal");

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        {
          threshold: 0.12
        }
      );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      revealElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  /* =======================================================
     ACTIVE NAVIGATION
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 600);

      const sections =
        navigation
          .map((id) =>
            document.getElementById(id)
          )
          .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        const rect =
          section.getBoundingClientRect();

        if (rect.top <= 180) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  /* =======================================================
     SMOOTH SCROLL
  ======================================================= */

  const scrollTo = (id) => {
    setMenuOpen(false);

    const element =
      document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  /* =======================================================
     FILTER SKILLS
  ======================================================= */

  const filteredSkills =
    activeSkill === "All"
      ? skills
      : skills.filter(
          ([, category]) =>
            category === activeSkill
        );

  const skillCategories = [
    "All",
    "Programming",
    "Frontend",
    "Backend",
    "Database",
    "AI",
    "Tools"
  ];

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <div className="app">

      {/* BACKGROUND */}

      <div className="noise" />

      <div className="grid-bg" />

      <div className="orb orb-one" />

      <div className="orb orb-two" />

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="navbar">

        <button
          className="brand"
          onClick={() =>
            scrollTo("home")
          }
        >
          <span className="brand-mark">
            A
          </span>

          <span>
            ASHRAYA
          </span>
        </button>

        <nav
          className={
            menuOpen
              ? "nav-links open"
              : "nav-links"
          }
        >
          {navigation.map((item) => (
            <button
              key={item}
              className={
                activeSection === item
                  ? "active"
                  : ""
              }
              onClick={() =>
                scrollTo(item)
              }
            >
              {item}
            </button>
          ))}
        </nav>

        <button
          className="menu-btn"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main>

        {/* ===================================================
            HERO
        =================================================== */}

        <section
          id="home"
          className="hero section"
        >

          <div className="hero-copy">

            <div className="eyebrow reveal">

              <span className="pulse-dot" />

              AVAILABLE FOR OPPORTUNITIES

            </div>

            <p className="hero-small reveal">
              HELLO, I'M
            </p>

            <h1 className="hero-title reveal">
              Ashritha
              <span>
                Achary.
              </span>
            </h1>

            <div className="type-line reveal">

              <span>
                FULL STACK DEVELOPER
              </span>

              <b>·</b>

              <span>
                GENERATIVE AI
              </span>

              <b>·</b>

              <span>
                CSE STUDENT
              </span>

            </div>

            <p className="hero-description reveal">
              I build intelligent, responsive and
              meaningful digital experiences by
              combining full-stack development
              with Generative AI.
            </p>

            <div className="hero-actions reveal">

              <button
                className="primary-btn"
                onClick={() =>
                  scrollTo("projects")
                }
              >
                Explore My Work

                <span>
                  ↗
                </span>
              </button>

              <a
                className="ghost-btn"
                href={RESUME_LINK}
                target="_blank"
                rel="noreferrer"
              >
                Download Resume

                <span>
                  ↓
                </span>
              </a>

            </div>

            <div className="social-row reveal">

              <a
                href={GITHUB_LINK}
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href={LINKEDIN_LINK}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                href={`mailto:${EMAIL}`}
              >
                Email ↗
              </a>

            </div>

          </div>

          {/* HERO VISUAL */}

          <div className="hero-visual reveal">

            <div className="visual-ring ring-one" />

            <div className="visual-ring ring-two" />

            <div className="scan-line" />

            <div className="portrait-frame">

           <img
  src="https://ashritha082005-max.github.io/Ashraya_Portfolio/profile.jpg/profile01.jpg"
  alt="Ashritha Achary"
  className="profile-photo"
/>

              <div className="image-placeholder">

                <div className="placeholder-icon">
                  A
                </div>

                <strong>
                  ASHRITHA
                </strong>

                <span>
                  Add your professional photo
                  as public/profile.jpg
                </span>

              </div>

            </div>

            {/* FLOATING CARD */}

            <div className="floating-card card-top">

              <span>
                ✦
              </span>

              <div>

                <small>
                  FOCUS
                </small>

                <strong>
                  GenAI
                </strong>

              </div>

            </div>

            <div className="floating-card card-bottom">

              <span>
                ⌁
              </span>

              <div>

                <small>
                  BUILDING
                </small>

                <strong>
                  ASHRAYA
                </strong>

              </div>

            </div>

            <div className="tech-orbit orbit-a">
              REACT
            </div>

            <div className="tech-orbit orbit-b">
              NODE
            </div>

            <div className="tech-orbit orbit-c">
              AI
            </div>

          </div>

          <div className="scroll-hint">

            <span>
              SCROLL TO EXPLORE
            </span>

            <i />

          </div>

        </section>

        {/* ===================================================
            ABOUT
        =================================================== */}

        <section
          id="about"
          className="section content-section"
        >

          <div className="section-heading reveal">

            <span>
              01 / ABOUT
            </span>

            <h2>
              Ideas into{" "}
              <em>
                impact.
              </em>
            </h2>

          </div>

          <div className="about-grid">

            <div className="about-main reveal">

              <p className="big-text">
                I'm a Computer Science
                Engineering student at{" "}
                <strong>
                  CMR University,
                  Bengaluru
                </strong>
                , passionate about Full Stack
                Development and Generative AI.
              </p>

              <p>
                I enjoy building practical
                web applications that combine
                modern frontend experiences,
                backend APIs, databases and
                AI-powered functionality.
              </p>

              <p>
                My projects focus on solving
                real-world problems through
                technology while continuously
                improving my development,
                problem-solving and AI skills.
              </p>

              <p>
                My approach:
                <strong>
                  {" "}
                  Think → Build → Test →
                  Improve → Deploy.
                </strong>
              </p>

            </div>

            <div className="about-side reveal">

              <div className="stat-card">

                <span>
                  01
                </span>

                <strong>
                  9.12 CGPA
                </strong>

                <small>
                  B.Tech Computer Science
                </small>

              </div>

              <div className="stat-card">

                <span>
                  02
                </span>

                <strong>
                  100+ Problems
                </strong>

                <small>
                  Python coding practice
                </small>

              </div>

              <div className="stat-card">

                <span>
                  03
                </span>

                <strong>
                  2027
                </strong>

                <small>
                  Expected graduation
                </small>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            SKILLS
        =================================================== */}

        <section
          id="skills"
          className="section content-section"
        >

          <div className="section-heading reveal">

            <span>
              02 / SKILLS
            </span>

            <h2>
              My tech{" "}
              <em>
                arsenal.
              </em>
            </h2>

          </div>

          <div className="skill-filter reveal">

            {skillCategories.map(
              (category) => (

                <button
                  key={category}
                  className={
                    activeSkill === category
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveSkill(category)
                  }
                >
                  {category}
                </button>

              )
            )}

          </div>

          <div className="skills-grid">

            {filteredSkills.map(
              ([name, category], index) => (

                <div
                  className="skill-card reveal"
                  key={name}
                  style={{
                    transitionDelay:
                      `${index * 45}ms`
                  }}
                >

                  <span className="skill-number">

                    {String(
                      index + 1
                    ).padStart(2, "0")}

                  </span>

                  <div>

                    <small>
                      {category}
                    </small>

                    <h3>
                      {name}
                    </h3>

                  </div>

                  <span className="skill-arrow">
                    ↗
                  </span>

                </div>

              )
            )}

          </div>

        </section>

        {/* ===================================================
            PROJECTS
        =================================================== */}

        <section
          id="projects"
          className="section content-section projects-section"
        >

          <div className="section-heading reveal">

            <span>
              03 / SELECTED WORK
            </span>

            <h2>
              Built to{" "}
              <em>
                matter.
              </em>
            </h2>

          </div>

          <div className="projects-list">

            {projects.map(
              (project) => (

                <article
                  className="project-card reveal"
                  key={project.title}
                >

                  <div className="project-number">
                    {project.number}
                  </div>

                  <div className="project-icon">
                    {project.icon}
                  </div>

                  <div className="project-content">

                    <p className="project-kicker">
                      FEATURED PROJECT
                    </p>

                    <h3>
                      {project.title}
                    </h3>

                    <h4>
                      {project.subtitle}
                    </h4>

                    <p>
                      {project.description}
                    </p>

                    <div className="tag-list">

                      {project.tags.map(
                        (tag) => (
                          <span key={tag}>
                            {tag}
                          </span>
                        )
                      )}

                    </div>

                    <div className="project-actions">

                      {project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Project ↗
                        </a>
                      )}

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub ↗
                      </a>

                    </div>

                  </div>

                  <div className="project-glow" />

                </article>

              )
            )}

          </div>

        </section>

        {/* ===================================================
            EDUCATION
        =================================================== */}

        <section
          id="education"
          className="section content-section"
        >

          <div className="section-heading reveal">

            <span>
              04 / EDUCATION
            </span>

            <h2>
              Academic{" "}
              <em>
                journey.
              </em>
            </h2>

          </div>

          <div className="timeline">

            <div className="timeline-item reveal">

              <div className="timeline-dot" />

              <div className="timeline-date">
                2023 — 2027
              </div>

              <div className="timeline-card">

                <span>
                  B.TECH · COMPUTER SCIENCE
                </span>

                <h3>
                  CMR University
                </h3>

                <p>
                  Bengaluru, Karnataka
                </p>

                <div className="education-score">
                  <strong>
                    9.12
                  </strong>

                  <span>
                    CGPA / 10
                  </span>
                </div>

              </div>

            </div>

            <div className="timeline-item reveal">

              <div className="timeline-dot" />

              <div className="timeline-date">
                2021 — 2023
              </div>

              <div className="timeline-card">

                <span>
                  PUC
                </span>

                <h3>
                  Government Pre-University
                  College
                </h3>

                <p>
                  Kundapura, Karnataka
                </p>

                <div className="education-score">

                  <strong>
                    87.5%
                  </strong>

                  <span>
                    PUC
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================
            CERTIFICATIONS
        =================================================== */}

        <section
          id="certifications"
          className="section content-section"
        >

          <div className="section-heading reveal">

            <span>
              05 / CERTIFICATIONS
            </span>

            <h2>
              Learning beyond{" "}
              <em>
                classrooms.
              </em>
            </h2>

          </div>

          <div className="certifications-grid">

            {certifications.map(
              (certificate) => (

                <div
                  className="certificate-card reveal"
                  key={certificate.title}
                >

                  <div className="certificate-top">

                    <span>
                      {certificate.number}
                    </span>

                    <span>
                      ↗
                    </span>

                  </div>

                  <div className="certificate-icon">
                    ✦
                  </div>

                  <small>
                    CERTIFICATION
                  </small>

                  <h3>
                    {certificate.title}
                  </h3>

                  <p>
                    {certificate.subtitle}
                  </p>

                  <div className="certificate-date">
                    {certificate.date}
                  </div>

                </div>

              )
            )}

          </div>

        </section>

        {/* ===================================================
            ADDITIONAL
        =================================================== */}

        <section className="section content-section">

          <div className="section-heading reveal">

            <span>
              06 / MORE
            </span>

            <h2>
              What I{" "}
              <em>
                care about.
              </em>
            </h2>

          </div>

          <div className="interest-grid">

            <div className="interest-card reveal">

              <span>
                01
              </span>

              <h3>
                Full Stack
                Development
              </h3>

              <p>
                Building responsive,
                scalable and practical
                web applications.
              </p>

            </div>

            <div className="interest-card reveal">

              <span>
                02
              </span>

              <h3>
                Generative AI
              </h3>

              <p>
                Exploring AI-powered
                applications, LLM
                integration and
                prompt engineering.
              </p>

            </div>

            <div className="interest-card reveal">

              <span>
                03
              </span>

              <h3>
                Problem Solving
              </h3>

              <p>
                Practicing DSA,
                Python programming
                and practical
                problem solving.
              </p>

            </div>

            <div className="interest-card reveal">

              <span>
                04
              </span>

              <h3>
                Real-World Solutions
              </h3>

              <p>
                Turning everyday
                problems into useful
                digital products.
              </p>

            </div>

          </div>

        </section>

        {/* ===================================================
            CONTACT
        =================================================== */}

        <section
          id="contact"
          className="section contact-section"
        >

          <div className="contact-glow" />

          <div className="section-heading reveal">

            <span>
              07 / CONTACT
            </span>

            <h2>
              Let's build something{" "}
              <em>
                meaningful.
              </em>
            </h2>

          </div>

          <p className="contact-copy reveal">

            I'm open to opportunities,
            collaborations and projects
            where technology can solve
            meaningful problems.

          </p>

          <a
            className="contact-email reveal"
            href={`mailto:${EMAIL}`}
          >
            {EMAIL}

            <span>
              ↗
            </span>
          </a>


          <div className="contact-links reveal">

            <a
              href={GITHUB_LINK}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href={LINKEDIN_LINK}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href={RESUME_LINK}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>

          </div>

        </section>

      </main>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div>
          ASHRAYA © 2026
        </div>

        <div>
          BUILD · INNOVATE · IMPACT
        </div>

        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            })
          }
        >
          BACK TO TOP ↑
        </button>

      </footer>

      {/* =====================================================
          FLOATING TOP BUTTON
      ===================================================== */}

      {showTop && (
        <button
          className="top-btn"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            })
          }
          aria-label="Back to top"
        >
          ↑
        </button>
      )}

    </div>
  );
}

/* =========================================================
   RENDER
========================================================= */

createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);