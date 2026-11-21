"use client";

import { useState } from "react";

type IconName = "github" | "moon" | "sun" | "arrow" | "mail" | "leaf" | "code" | "spark" | "download";

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "github":
      return <svg {...common}><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.2-.4-3.8 1.4a13.2 13.2 0 0 0-6.9 0C5.4 1.1 4.2 1.5 4.2 1.5a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.1 6.4 6.1 6.7a3.4 3.4 0 0 0-.9 2.7V22"/></svg>;
    case "moon":
      return <svg {...common}><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.7 8.7 0 1 0 20.5 14.2Z"/></svg>;
    case "sun":
      return <svg {...common}><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>;
    case "arrow":
      return <svg {...common}><path d="M5 12h14m-6-6 6 6-6 6"/></svg>;
    case "mail":
      return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>;
    case "leaf":
      return <svg {...common}><path d="M20.5 3.5C11 3.5 4 7 4 14a6 6 0 0 0 6 6c7 0 10.5-7 10.5-16.5Z"/><path d="M3 21c3-5 7-8 13-11"/></svg>;
    case "code":
      return <svg {...common}><path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 14"/></svg>;
    case "spark":
      return <svg {...common}><path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z"/><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"/></svg>;
    case "download":
      return <svg {...common}><path d="M12 3v12m-5-5 5 5 5-5M4 20h16"/></svg>;
  }
}

const projects = [
  {
    number: "01",
    title: "TaskBoard",
    description: "A responsive task management app with a Kanban board, list view, priorities, due dates, search, filters and browser-based saving.",
    type: "Built project",
    state: "Built",
    tone: "blue",
    symbol: "✓",
    tags: ["React", "TypeScript", "Vite", "Local storage"],
    href: "https://taskboard-snowy-nine.vercel.app/",
    github: "https://github.com/nahinadeel5-web/taskboard",
  },
  {
    number: "02",
    title: "Math AI",
    description: "A learning-focused maths helper designed to make working through problems clearer, one step at a time.",
    type: "Built project",
    state: "Built",
    tone: "lilac",
    symbol: "∑",
    tags: ["Python", "AI", "Problem solving"],
     href: "https://math-ai-98zdeaefmbtt6jf4bwvhdf.streamlit.app/",
  github: "https://github.com/nahinadeel5-web/Math-AI",
  },
  {
    number: "03",
    title: "PDF & File Toolkit",
    description: "A practical file utility concept for converting documents, compressing files and keeping common tasks together.",
    type: "Built project",
    state: "Built",
    tone: "peach",
    symbol: "PDF",
    tags: ["Python", "File handling", "Utilities"],
    href: "#contact",
  },
  {
    number: "04",
    title: "Business Desk",
    description: "A compact workspace concept for organising clients, tracking invoices and understanding business activity.",
    type: "Portfolio build",
    state: "Planned",
    tone: "sage",
    symbol: "BD",
    tags: ["Next.js", "TypeScript", "Supabase"],
    href: "#contact",
  },
  {
    number: "05",
    title: "Support Studio",
    description: "A document-aware support assistant concept that helps people find answers from a focused knowledge base.",
    type: "Portfolio build",
    state: "Planned",
    tone: "rose",
    symbol: "✳",
    tags: ["AI", "React", "Documents"],
    href: "#contact",
  },
  {
    number: "06",
    title: "Pocket Ledger",
    description: "A simple personal finance tracker concept for recording income, expenses and monthly spending patterns.",
    type: "Portfolio build",
    state: "Planned",
    tone: "butter",
    symbol: "₨",
    tags: ["TypeScript", "Charts", "Supabase"],
    href: "#contact",
  },
];

const skills = [
  { name: "Python", mark: "Py", tone: "skill-purple" },
  { name: "JavaScript", mark: "JS", tone: "skill-gold" },
  { name: "TypeScript", mark: "TS", tone: "skill-blue" },
  { name: "React", mark: "⚛", tone: "skill-cyan" },
  { name: "Next.js", mark: "N", tone: "skill-dark" },
  { name: "Node.js", mark: "⬡", tone: "skill-green" },
  { name: "Tailwind CSS", mark: "≈", tone: "skill-sky" },
  { name: "Supabase", mark: "✦", tone: "skill-mint" },
  { name: "MySQL", mark: "⌁", tone: "skill-orange" },
  { name: "SEO Writing", mark: "Aa", tone: "skill-rose" },
];

export default function Home() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className={dark ? "site dark" : "site"}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#home" aria-label="Nahin Adeel home">
          <span className="brand-mark"><Icon name="leaf" size={24} /></span>
          <span>Nahin Adeel<span className="brand-dot">.</span></span>
        </a>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          <span /><span /><span />
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
        </nav>

        <div className="top-actions">
          <a className="icon-button" href="https://github.com/nahinadeel5-web" target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <Icon name="github" />
          </a>
          <button className="icon-button" onClick={() => setDark(!dark)} aria-label="Toggle dark mode">
            <Icon name={dark ? "sun" : "moon"} />
          </button>
          <a className="button button-small button-primary" href="#contact">Let&apos;s talk <Icon name="arrow" size={15} /></a>
        </div>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> IT Student · Developer · Curious Builder</div>
          <p className="script-intro">Hello, I&apos;m</p>
          <h1>Nahin <em>Adeel</em><span className="heading-flourish">✳</span></h1>
          <h2>Developer <span>&amp;</span> problem solver</h2>
          <p className="hero-description">
            I build thoughtful digital tools, explore new technologies, and turn practical ideas into useful web experiences.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my projects <Icon name="arrow" /></a>
            <a className="button button-outline" href="/Nahin-Adeel-CV.pdf" download>Download CV <Icon name="download" /></a>
          </div>
          <div className="hero-stats">
            <div><strong>3</strong><span>Projects built</span></div>
            <i />
            <div><strong>BS IT</strong><span>Currently studying</span></div>
            <i />
            <div><strong>Always</strong><span>Learning & creating</span></div>
          </div>
        </div>

        <div className="hero-art" aria-label="Illustration of a calm creative coding desk">
          <div className="art-sun" />
          <div className="art-note"><span>little reminder</span><strong>Dream it.<br/>Build it. ♡</strong></div>
          <div className="art-plant plant-back"><i /><i /><i /><i /><b /></div>
          <div className="art-books"><span>MAKE</span><span>CREATE</span><span>REPEAT</span></div>
          <div className="desk">
            <div className="laptop">
              <div className="laptop-screen">
                <div className="screen-top"><b /><b /><b /><span>my-next-project.tsx</span></div>
                <div className="code-lines">
                  <span className="code-pink">const</span> idea = <span className="code-green">&quot;something useful&quot;</span>;
                  <br/><span className="code-purple">function</span> <span className="code-yellow">build</span>() {"{"}
                  <br/>&nbsp;&nbsp;return <span className="code-blue"> &lt;GoodThings /&gt;</span>;
                  <br/>{"}"}
                  <br/><span className="code-muted">// one thoughtful step at a time</span>
                </div>
              </div>
              <div className="laptop-base" />
            </div>
            <div className="desk-mug">{"</>"}</div>
            <div className="desk-pot"><i /><i /><i /><b /></div>
          </div>
          <div className="art-spark spark-a">✧</div><div className="art-spark spark-b">✦</div>
          <div className="art-caption">A little curiosity goes a long way <span>↗</span></div>
        </div>
      </section>

      <section className="projects-section section-wrap" id="projects">
        <div className="section-intro">
          <span className="section-kicker"><Icon name="spark" size={16}/> Selected work</span>
          <h2>Ideas turned into<br/><em>useful things.</em></h2>
          <p>A growing collection of projects, experiments and practical ideas. I care about making things clear, helpful and enjoyable to use.</p>
          <a className="text-link" href="https://github.com/nahinadeel5-web" target="_blank" rel="noreferrer">Find me on GitHub <Icon name="arrow" size={16}/></a>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.tone}`} key={project.number}>
              <div className="project-art">
                <span className="project-number">{project.number}</span>
                <div className="project-symbol">{project.symbol}</div>
                <span className="project-orbit orbit-one" /><span className="project-orbit orbit-two" />
              </div>
              <div className="project-content">
                <div className="project-title-row"><h3>{project.title}</h3><span className={project.state === "Built" ? "status status-built" : "status"}>{project.state}</span></div>
                <p>{project.description}</p>
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-actions">
                  <a className="project-link" href={project.href} target={project.href.startsWith("http") ? "_blank" : undefined} rel={project.href.startsWith("http") ? "noreferrer" : undefined} aria-label={project.title === "TaskBoard" ? "Open TaskBoard live demo" : `Details about ${project.title}`}>
                    {project.title === "TaskBoard" ? "Live demo" : "View details"} <Icon name="arrow" size={15}/>
                  </a>
                  {"github" in project && project.github ? <a className="project-link project-link-secondary" href={project.github} target="_blank" rel="noreferrer">Source code <Icon name="github" size={14}/></a> : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section section-wrap" id="about">
        <div className="about-visual">
          <div className="photo-frame frame-back"><div className="frame-art frame-art-one"><span>✿</span></div></div>
          <div className="photo-frame frame-front"><div className="frame-art frame-art-two"><span>☼</span></div></div>
          <div className="sticky-note">Keep learning<br/>and growing <b>♡</b></div>
          <div className="leaf-doodle">〰</div>
        </div>
        <div className="about-copy">
          <span className="section-kicker"><Icon name="leaf" size={16}/> A little about me</span>
          <h2>Curious by nature.<br/><em>Developer by choice.</em></h2>
          <p>
            I&apos;m Nahin, a BS Information Technology student who enjoys learning how digital products work and building tools that solve everyday problems. I like combining logical thinking with thoughtful design.
          </p>
          <p>
            My interests include web development, Python, AI-assisted learning tools, and SEO content writing. I&apos;m always looking for the next thing to understand and improve.
          </p>
          <a className="button button-primary" href="#contact">Say hello <Icon name="arrow" /></a>
        </div>
        <div className="values-card">
          <div><span className="value-icon">✦</span><p><strong>Thoughtful work</strong><small>Useful details matter.</small></p></div>
          <div><span className="value-icon">♡</span><p><strong>Always learning</strong><small>Curiosity keeps me moving.</small></p></div>
          <div><span className="value-icon">⌘</span><p><strong>Problem solving</strong><small>One step at a time.</small></p></div>
          <div><span className="value-icon">↗</span><p><strong>Keep improving</strong><small>Better with every build.</small></p></div>
        </div>
      </section>

      <section className="skills-section section-wrap" id="skills">
        <div className="skills-heading">
          <span className="section-kicker"><Icon name="code" size={16}/> My toolkit</span>
          <h2>Tools I use<br/><em>to make things.</em></h2>
          <p>A mix of programming, web technologies and creative skills I&apos;m developing through study and hands-on projects.</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <span className={`skill-mark ${skill.tone}`}>{skill.mark}</span>
              <strong>{skill.name}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <div className="contact-leaf contact-leaf-one"><Icon name="leaf" size={82}/></div>
        <div className="contact-copy">
          <span className="contact-kicker"><Icon name="mail" size={16}/> Let&apos;s connect</span>
          <h2>Have an idea<br/>you&apos;d like to build?</h2>
          <p>I&apos;d be happy to hear about it. Send me a message and let&apos;s start a conversation.</p>
        </div>
        <div className="contact-details">
          <a href="mailto:nahinadeel5@gmail.com"><span><Icon name="mail"/></span> nahinadeel5@gmail.com</a>
          <div className="contact-note">Add your real GitHub and LinkedIn profile links here when ready.</div>
        </div>
        <a className="button button-light" href="mailto:nahinadeel5@gmail.com?subject=Hello%20Nahin">Send a message <Icon name="arrow"/></a>
      </section>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark"><Icon name="leaf" size={20}/></span><span>Nahin Adeel<span className="brand-dot">.</span></span></a>
        <p>Designed with care · Built while learning</p>
        <div className="footer-links"><a href="#home">Back to top ↑</a><span>© {new Date().getFullYear()} Nahin Adeel</span></div>
      </footer>
    </main>
  );
}
