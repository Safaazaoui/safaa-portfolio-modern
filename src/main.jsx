import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Cpu,
  Database,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    number: "01",
    title: "Fitness & Nutrition AI",
    label: "Multimodal mobile AI",
    tagline: "Snap a meal photo, get itemized calories and macros through a secure serverless pipeline.",
    description:
      "Cross-platform mobile app that converts meal photos into structured macro estimates using a multimodal vision model behind a JSON schema. AI calls run through a Supabase Edge Function proxy with JWT auth, per-user rate limiting, and PostgreSQL row-level security.",
    image: "/images/fitness-app-project.png",
    metrics: [
      ["Payload cut", "~95%"],
      ["Upload", "4MB to 150KB"],
      ["Modes", "3"],
    ],
    stack: ["React Native", "TypeScript", "Expo", "Supabase", "Gemini API", "PostgreSQL"],
    live: "https://github.com/Safaazaoui/Fitness-app",
    repo: "https://github.com/Safaazaoui/Fitness-app",
  },
  {
    number: "02",
    title: "CSA-App",
    label: "Role-based web platform",
    tagline: "Co-op application portal serving students, coordinators, and employers from one codebase.",
    description:
      "Multi-role web app with three authenticated dashboards and reusable protected routes. Firebase Authentication gates each role, while the coordinator workflow manages searchable applications through a four-state approval pipeline in Firestore.",
    image: "/images/co-op-portal-project.png",
    metrics: [
      ["Roles", "3"],
      ["Pipeline", "4 stages"],
      ["Status", "Live"],
    ],
    stack: ["React", "Vite", "React Router", "Firebase Auth", "Firestore", "Cloudinary"],
    live: "https://csa-app-xi.vercel.app/",
    repo: "https://github.com/Safaazaoui/csa-app",
  },
];

const experiences = [
  {
    role: "Bilingual Support Team Lead",
    company: "Venngo",
    period: "Dec 2023 - Present",
    details: "Leads bilingual support for MemberPerks and WorkPerks, resolves account issues end-to-end, and maintains 98%+ customer satisfaction.",
  },
  {
    role: "Bilingual CSR & Credit Representative",
    company: "SNAP Home Finance / Financeit Group",
    period: "Aug 2020 - Dec 2023",
    details: "Analyzed home-renovation credit applications, made underwriting decisions, and coordinated clear customer and sales communication.",
  },
  {
    role: "Bilingual Sales Representative",
    company: "ADT Canada by Telus - S&P Data",
    period: "Jul 2019 - Aug 2020",
    details: "Prepared accounts across AS400, Mastermind, and CRM tools while using service data to surface better customer solutions.",
  },
  {
    role: "Programming Tutor",
    company: "College Boreal",
    period: "Sep 2018 - May 2019",
    details: "Taught programming concepts, mentored students through problem decomposition, and built Angular 6 web projects.",
  },
];

const skills = [
  ["Languages", "Python, TypeScript, JavaScript, Java, C, Rust, Elixir, SQL", Terminal],
  ["Frontend", "React, React Native, Expo, HTML5, CSS", Braces],
  ["Backend", "Node.js, REST APIs, Edge Functions", Cpu],
  ["Data & Auth", "PostgreSQL, Supabase, Firebase, Firestore, Cloudinary", Database],
  ["AI / ML", "Google Gemini API, multimodal vision, structured outputs", Sparkles],
  ["Delivery", "Git, Vite, Zustand, Postman, Salesforce, HubSpot", ShieldCheck],
];

const socials = [
  { label: "Email", value: "safaazaoui@gmail.com", href: "mailto:safaazaoui@gmail.com", Icon: Mail },
  { label: "LinkedIn", value: "in/safaa-zaoui", href: "https://linkedin.com/in/safaa-zaoui-3ab009149", Icon: Linkedin },
  { label: "GitHub", value: "github.com/Safaazaoui", href: "https://github.com/Safaazaoui", Icon: Github },
];

function usePointerGlow() {
  useEffect(() => {
    const root = document.documentElement;
    const update = (event) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", update);
    return () => window.removeEventListener("pointermove", update);
  }, []);
}

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.14 }
    );
    document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function useTilt() {
  const ref = useRef(null);
  const onMove = (event) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -10;
    card.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) translateY(-8px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return { ref, onMove, onLeave };
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = ["work", "experience", "skills", "contact"];
  return (
    <header className="nav-shell">
      <a className="brand" href="#top" aria-label="Safaa Zaoui home">
        SZ
      </a>
      <nav className={open ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link} href={`#${link}`} onClick={() => setOpen(false)}>
            {link}
          </a>
        ))}
      </nav>
      <button className="nav-toggle" type="button" aria-label="Toggle menu" onClick={() => setOpen((value) => !value)}>
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="hero-grid">
        <div className="hero-copy reveal">
          <div className="status-line">
            <span />
            Available for Summer 2026 Co-op
          </div>
          <h1>
            Safaa
            <br />
            Zaoui
          </h1>
          <p className="hero-subtitle">
            Computer science student building AI, mobile, and secure web software from Toronto.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              See the work <ArrowDownRight size={18} />
            </a>
            <a className="button ghost" href="mailto:safaazaoui@gmail.com">
              Contact me <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
        <div className="hero-panel reveal">
          <div className="panel-top">
            <MapPin size={16} />
            Toronto, ON
          </div>
          <div className="terminal-card">
            <p className="terminal-muted">~/portfolio/run</p>
            <p><span>student</span> TMU Computer Science 2028</p>
            <p><span>focus</span> AI products, auth, clean UX</p>
            <p><span>languages</span> English / Francais / Arabic</p>
            <div className="terminal-meter">
              <i style={{ width: "92%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="marquee" aria-label="Technology highlights">
        <div>
          <span>TypeScript</span><span>React Native</span><span>Supabase</span><span>Firebase</span><span>Gemini AI</span><span>PostgreSQL</span>
          <span>TypeScript</span><span>React Native</span><span>Supabase</span><span>Firebase</span><span>Gemini AI</span><span>PostgreSQL</span>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" aria-labelledby="about-title">
      <div className="section-kicker reveal">01 / About</div>
      <div className="about-layout">
        <h2 id="about-title" className="section-title reveal">
          I like software that feels clear, fast, and useful the first time someone touches it.
        </h2>
        <div className="about-copy reveal">
          <p>
            I am a B.Sc. Computer Science student at Toronto Metropolitan University, class of 2028, with a prior CS technical diploma from College Boreal and five years in bilingual customer-facing roles.
          </p>
          <p>
            My strongest projects blend product thinking with practical engineering: secure AI pipelines, role-based dashboards, and mobile flows that make complex tasks feel calm.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const tilt = useTilt();
  return (
    <article className="project reveal" ref={tilt.ref} onMouseMove={tilt.onMove} onMouseLeave={tilt.onLeave}>
      <div className="project-image-wrap">
        <img src={project.image} alt={`${project.title} screenshot`} />
      </div>
      <div className="project-content">
        <div className="project-meta">
          <span>{project.number}</span>
          <span>{project.label}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="tagline">{project.tagline}</p>
        <p>{project.description}</p>
        <div className="metric-row">
          {project.metrics.map(([label, value]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="stack">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.live} target="_blank" rel="noreferrer">
            {index === 0 ? "View repo" : "Live site"} <ArrowUpRight size={16} />
          </a>
          <a href={project.repo} target="_blank" rel="noreferrer">
            Code <Github size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="section-kicker reveal">02 / Selected work</div>
      <h2 id="work-title" className="section-title reveal">Shipped projects with real architecture behind the shine.</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="section-kicker reveal">03 / Experience</div>
      <h2 id="experience-title" className="section-title reveal">Five years with real customers sharpened the engineering instincts.</h2>
      <div className="timeline">
        {experiences.map((item) => (
          <article className="timeline-item reveal" key={item.role}>
            <time>{item.period}</time>
            <div>
              <h3>{item.role}</h3>
              <span>{item.company}</span>
              <p>{item.details}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="section-kicker reveal">04 / Stack</div>
      <h2 id="skills-title" className="section-title reveal">Tools for building the idea and hardening the system.</h2>
      <div className="skills-grid">
        {skills.map(([title, body, Icon]) => (
          <div className="skill-card reveal" key={title}>
            <Icon size={22} />
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>
      <div className="cert-strip reveal">
        <span>Google Project Management / 2024</span>
        <span>IBM AI Engineering / In Progress</span>
        <span>AWS Cloud Practitioner / In Progress</span>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="section-kicker reveal">05 / Contact</div>
      <h2 id="contact-title" className="contact-title reveal">
        Let&apos;s build something sharp.
      </h2>
      <a className="mail-cta reveal" href="mailto:safaazaoui@gmail.com">
        safaazaoui@gmail.com <ArrowUpRight size={22} />
      </a>
      <div className="social-grid">
        {socials.map(({ label, value, href, Icon }) => (
          <a className="social-card reveal" key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
            <Icon size={20} />
            <span>{label}</span>
            <strong>{value}</strong>
          </a>
        ))}
      </div>
      <footer>© 2026 Safaa Zaoui / Toronto, ON</footer>
    </section>
  );
}

function App() {
  usePointerGlow();
  useReveal();
  return (
    <>
      <div className="cursor-glow" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
