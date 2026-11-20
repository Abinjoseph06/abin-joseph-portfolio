import { useState } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, BrainCircuit, Database, Smartphone, ExternalLink, MapPin, BriefcaseBusiness, GraduationCap, Sparkles } from 'lucide-react';

const projects = [
  {
    number: '01', name: 'DeepReveal', type: 'AI / COMPUTER VISION',
    description: 'A manipulated-face image analysis project designed to classify potentially altered images and localize suspicious regions.',
    stack: ['Python', 'PyTorch', 'CNN', 'Streamlit'],
    points: ['Image preprocessing and classification workflow', 'Tampering-region localization as a project capability'],
    link: 'https://github.com/Abinjoseph06', linkLabel: 'Explore GitHub'
  },
  {
    number: '02', name: 'AIcare', type: 'AI / BACKEND DEVELOPMENT',
    description: 'An AI-assisted healthcare application concept for uploading and processing medical reports through a web interface and backend API.',
    stack: ['Python', 'FastAPI', 'Tesseract OCR', 'Vite'],
    points: ['Report upload and text-extraction workflow', 'API-driven backend with a web application interface'],
    link: 'https://github.com/Abinjoseph06/AIcare', linkLabel: 'View repository'
  },
  {
    number: '03', name: 'ATS Recruitment Backend', type: 'BACKEND / DJANGO',
    description: 'A recruitment-system backend with custom authentication, role-based user management and automatically associated candidate and employer profiles.',
    stack: ['Python', 'Django', 'SQLite', 'Signals'],
    points: ['ADMIN, EMPLOYER and CANDIDATE roles', 'Automatic profile creation and Django Admin management'],
    link: 'https://github.com/Abinjoseph06', linkLabel: 'Explore GitHub'
  },
  {
    number: '04', name: 'MacroFit', type: 'MOBILE / FITNESS',
    description: 'A fitness and nutrition tracking application concept for monitoring daily food macros, workouts and calorie targets.',
    stack: ['React Native', 'Expo', 'JavaScript', 'SQLite'],
    points: ['Daily nutrition and workout tracking', 'Local profiles and BMI-informed calorie targets'],
    link: 'https://github.com/Abinjoseph06', linkLabel: 'Explore GitHub'
  }
];

const skillGroups = [
  { icon: Code2, title: 'Programming & backend', skills: ['Python', 'Django', 'FastAPI', 'REST APIs', 'JavaScript'] },
  { icon: BrainCircuit, title: 'AI & machine learning', skills: ['Machine Learning', 'Deep Learning', 'PyTorch', 'TensorFlow', 'Scikit-learn'] },
  { icon: Database, title: 'Data & databases', skills: ['SQL', 'Pandas', 'NumPy', 'Data Analysis', 'MySQL'] },
  { icon: Smartphone, title: 'Tools & platforms', skills: ['Git', 'GitHub', 'Streamlit', 'Jupyter', 'React Native'] }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const navItems = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Experience', '#experience'], ['Contact', '#contact']];
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Abin Joseph home"><span className="brand-mark">A.</span><span>ABIN JOSEPH<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR ENTRY-LEVEL OPPORTUNITIES</div>
            <h1>Building useful<br/>things with <span className="gradient-text">code & AI.</span></h1>
            <p className="hero-lede">I'm <strong>Abin Joseph</strong>, an Artificial Intelligence & Data Science graduate and Python developer interested in machine learning, data and backend engineering.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="button button-quiet" href="#contact">Get in touch <ArrowDown size={16}/></a><button className="button button-resume" type="button" disabled title="Add your resume PDF before publishing">Resume PDF · coming soon</button></div>
            <div className="hero-socials"><a href="https://github.com/Abinjoseph06" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><a href="https://www.linkedin.com/in/abinjosephaiengineer/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a><span><MapPin size={16}/> Kerala, India</span></div>
          </div>
          <div className="hero-art" aria-label="Futuristic AI agent portrait of Abin Joseph">
            <div className="hero-image-frame">
              <img src="/ai-agent-hero.png" alt="Abin Joseph portrayed as an AI agent developer in a futuristic blue-lit workspace" />
              <span className="image-scanline" aria-hidden="true" />
            </div>
            <div className="agent-status"><span className="agent-pulse" /> AI AGENT SYSTEM <strong>ONLINE</strong></div>
            <div className="agent-chip chip-workflow"><BrainCircuit size={15}/> Autonomous workflows</div>
            <div className="agent-chip chip-python"><Code2 size={15}/> Python · ML · APIs</div>
            <div className="hero-grid"/>
          </div>
          <a className="scroll-cue" href="#about">SCROLL TO EXPLORE <span/></a>
        </section>

        <section className="intro-strip"><div className="section-wrap strip-inner"><span>CURIOUS BY NATURE</span><p>From data to applications, I enjoy turning ideas into practical, thoughtful software.</p><span>KERALA · INDIA</span></div></section>

        <section className="content-section section-wrap" id="about">
          <div className="section-heading"><span className="section-index">01 / ABOUT</span><h2>A little about <span className="gradient-text">me.</span></h2></div>
          <div className="about-grid"><div className="about-main"><p className="large-copy">I’m an aspiring AI/ML professional passionate about  <em>Python, Artificial Intelligence, Machine Learning and Data Science..</em></p><p>I completed my B.Tech in Artificial Intelligence & Data Science at St. Joseph's College of Engineering and Technology, Palai. I like learning how intelligent systems work and building applications that solve practical problems.</p><p>My project work spans computer vision, healthcare report processing, recruitment workflows and mobile fitness tracking. I value clear problem-solving, continuous learning and code that is useful beyond a demo.</p></div><div className="about-facts"><div className="fact-card"><span className="fact-label">EDUCATION</span><GraduationCap/><strong>B.Tech</strong><small>Artificial Intelligence & Data Science</small></div><div className="fact-card"><span className="fact-label">FOCUS</span><BrainCircuit/><strong>AI + Software</strong><small>Machine learning · Python · Backend</small></div></div></div>
        </section>

        <section className="content-section section-wrap" id="skills">
          <div className="section-heading"><span className="section-index">02 / TOOLKIT</span><h2>Tools I work <span className="gradient-text">with.</span></h2><p className="section-subtitle">A growing toolkit for building, analysing and shipping ideas.</p></div>
          <div className="skills-grid">{skillGroups.map(({icon: Icon, title, skills}) => <article className="skill-card" key={title}><div className="skill-icon"><Icon size={21}/></div><h3>{title}</h3><div className="chips">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div>
        </section>

        <section className="projects-section" id="projects"><div className="section-wrap"><div className="section-heading"><span className="section-index">03 / SELECTED WORK</span><h2>Projects with a <span className="gradient-text">purpose.</span></h2><p className="section-subtitle">A selection of academic and personal projects across AI, backend and mobile development.</p></div>
          <div className="projects-grid">{projects.map(project => <article className="project-card" key={project.number}><div className="project-top"><span className="project-number">{project.number} / 04</span><span className="project-type">{project.type}</span></div><h3>{project.name}</h3><p className="project-description">{project.description}</p><ul>{project.points.map(point => <li key={point}>{point}</li>)}</ul><div className="project-footer"><div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div><a href={project.link} target="_blank" rel="noreferrer" aria-label={`${project.linkLabel} for ${project.name}`}><ArrowUpRight size={19}/></a></div></article>)}</div>
          <p className="project-note">Project descriptions summarize development work and intended capabilities. Visit the repositories for available source code and implementation details.</p>
        </div></section>

        <section className="content-section section-wrap" id="experience"><div className="section-heading"><span className="section-index">04 / EXPERIENCE & EDUCATION</span><h2>Learning by <span className="gradient-text">doing.</span></h2></div>
          <div className="timeline"><article className="timeline-item"><div className="timeline-marker"><BriefcaseBusiness size={18}/></div><div className="timeline-content"><div className="timeline-meta"><span>INTERNSHIP</span><span>DATA SCIENCE & MACHINE LEARNING</span></div><h3>Data Science & Machine Learning Intern</h3><h4>Camerinfolks</h4><p>Building practical exposure to data science and machine learning through hands-on learning and project work.</p></div></article><article className="timeline-item"><div className="timeline-marker"><GraduationCap size={19}/></div><div className="timeline-content"><div className="timeline-meta"><span>EDUCATION</span><span>B.TECH</span></div><h3>Artificial Intelligence & Data Science</h3><h4>St. Joseph's College of Engineering and Technology, Palai</h4><p>Undergraduate study focused on artificial intelligence, data science and computing foundations.</p></div></article></div>
        </section>

        <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><span className="section-index">05 / CONTACT</span><h2>Have an idea?<br/><span className="gradient-text">Let's build it.</span></h2><p>I'm interested in entry-level opportunities and meaningful projects in Python development, AI/ML and data-driven software.</p><div className="contact-actions"><a className="button button-primary" href="mailto:YOUR_EMAIL@example.com"><Mail size={17}/> Email me <ArrowUpRight size={16}/></a><a className="button button-outline" href="https://github.com/Abinjoseph06" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><a className="button button-outline" href="https://www.linkedin.com/in/abinjosephaiengineer/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a></div><div className="contact-placeholder">Before publishing, replace <code>YOUR_EMAIL@example.com</code> with your professional email address.</div></div></section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">A.</span><span>ABIN JOSEPH<span className="brand-dot">.</span></span></a><span>Designed & built with curiosity.</span><span>© {new Date().getFullYear()} Abin Joseph</span></footer>
    </div>
  );
}

export default App;
