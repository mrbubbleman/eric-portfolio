import React, { useEffect } from "react";

export default function Portfolio() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.pathname === '/resume') {
      window.location.replace('/Eric_Resume.pdf');
    }
  }, []);

  const links = {
    email: "mailto:elee01919@gmail.com",
    linkedin: "https://www.linkedin.com/in/eric-lee-el9/",
    github: "https://github.com/mrbubbleman", 
    resume: "/resume" 
  };

  const skills = [
    "Python", "C", "C#", "JavaScript", "TypeScript", "React", "Tailwind", "Node.js",
    ".NET", "Java", "SQL", "MongoDB", "Firebase", "AWS", "Spring Boot",
    "FastAPI", "Docker", "NumPy", "pandas", "Plotly", "Matplotlib",
    "scikit-learn", "PyTorch", "TensorFlow", "MediaPipe", "Django", "Flask",
    "Android SDK"
  ];

  const experience = [
    {
      role: "Data Scientist",
      company: "Dell Technologies",
      location: "Toronto, Ontario (Remote)",
      period: "Apr 2024 – Present",
      bullets: [
        "Redesigned internal Python API layers with FastAPI + async I/O, reducing request overhead by ~30%.",
        "Trained and tuned ML models (Random Forest, XGBoost) for NBA player position prediction (≈81% accuracy).",
        "Built an open-source Jupyter workflow for NBA API pipelines and visualization; boosted concurrent users by >50%."
      ]
    },
    {
      role: "Software Programmer Student",
      company: "City of Calgary",
      location: "Calgary, Alberta",
      period: "May 2025 – Aug 2025",
      bullets: [
        "Helped develop an internal Azure-based chatbot to streamline access to org resources.",
        "Contributed across 100+ tickets focused on SQL/data tasks; consistently hit deadlines.",
        "Migrated VBScript to .NET for internal automations, improving performance & maintainability."
      ]
    },
    {
      role: "Data Scientist Intern",
      company: "Cybera",
      location: "Calgary, Alberta",
      period: "May 2023 – Apr 2024",
      bullets: [
        "Implemented NLP pipelines with Python/BeautifulSoup across 10+ APIs for gov voting notebooks.",
        "Built KNN & Linear Regression for Alberta water-level prediction (≈93% accuracy).",
        "Refactored tax calculation pipelines using vectorized NumPy; ~50% latency reduction."
      ]
    }
  ];

  const projects = [
    {
      title: "\"Facebook\" Clone Web App",
      stack: ["Django", "Heroku", "JavaScript", "CSS", "HTML", "Swagger"],
      description:
        "Federated content distribution across separate Heroku instances; 100% API test coverage via Swagger.",
      href: "https://github.com/mrbubbleman/facebookclone",
      image: "/Facebookclone.png"
    },
    {
      title: "QR Code Hunter App",
      stack: ["Java", "Firebase", "JUnit", "Guava", "RXBinding", "Google Maps"],
      description:
        "QR scanning, geo-tagging with Maps API, real-time sync via Firebase; comprehensive intent testing.",
      href: "https://github.com/CMPUT301W23T14/QRHunter-App",
      image: "/QRCodeHunter.png"
    },
    {
      title: "AI Gym Exercise App",
      stack: ["Python", "Streamlit", "MediaPipe", "OpenCV", "NumPy"],
      description:
        "Pose estimation (holistic model), face landmarks; interactive Streamlit UI for real-time feedback.",
      href: "https://github.com/jtolentino1/MyGymBuddy",
      image: "/aigymbuddy.png"
    }
  ];


  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 antialiased selection:bg-neutral-900">
      <Header links={links} />
      <main className="mx-auto max-w-6xl px-6">
        <Hero links={links} />
        <Section id="projects" title="Projects">
          <ProjectsGrid projects={projects} />
        </Section>
        <Section id="experience" title="Experience">
          <ExperienceList items={experience} />
        </Section>
        <Section id="skills" title="Skills">
          <SkillsCloud items={skills} />
        </Section>
        <Section id="contact" title="Contact">
          <ContactCard links={links} />
        </Section>
      </main>
      <Footer />
    </div>
  );
}

function Header({ links }: { links: Record<string, string> }) {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-900/60 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="group inline-flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-tight">Eric Lee</span>
          <span className="text-xs text-neutral-400 group-hover:text-neutral-300 transition">Portfolio</span>
        </a>
        <nav className="hidden gap-6 text-sm md:flex">
          {[
            ["Projects", "#projects"],
            ["Experience", "#experience"],
            ["Skills", "#skills"],
            ["Contact", "#contact"]
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-neutral-400 hover:text-neutral-100 transition"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-neutral-800 px-3 py-1.5 text-sm text-neutral-200 hover:bg-neutral-900 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero({ links }: { links: Record<string, string> }) {
  return (
    <section id="top" className="relative isolate py-16 sm:py-24">
      <AccentGlow />
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-5">
        <div className="md:col-span-3">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Software Engineer / Data Scientist
          </h1>
          <p className="mt-4 max-w-prose text-neutral-400">
            I like solving problems with fast, clean code.
            <br />
            Outside of coding, I love bouldering and reading manga like Berserk!
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={links.linkedin}
              className="rounded-xl border border-neutral-800 px-4 py-2 hover:bg-neutral-900 transition"
            >
              LinkedIn
            </a>
            <a
              href={links.github}
              className="rounded-xl border border-neutral-800 px-4 py-2 hover:bg-neutral-900 transition"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="rounded-2xl border border-dashed border-neutral-800 bg-neutral-900/30 p-3">
              <img
                src="headshot.JPG"
                className="aspect-square w-full rounded-xl object-cover"
              />
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({ id, title, children }: React.PropsWithChildren<{ id: string; title: string }>) {
  return (
    <section id={id} className="py-14 sm:py-20">
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function ProjectsGrid({
  projects,
}: {
  projects: {
    title: string;
    stack: string[];
    description: string;
    href: string;
    image?: string;
  }[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <a
          key={p.title}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl border border-neutral-900/60 bg-neutral-950/40 p-3 hover:border-neutral-700 hover:bg-neutral-900/40 transition"
        >
          {/* Project image */}
          <img
            src={p.image || "/placeholder.png"}
            alt={p.title}
            className="aspect-[16/10] w-full rounded-xl object-contain bg-neutral-900 transition-transform duration-300 group-hover:scale-[1.03]"
          />

          <div className="p-2">
            <h3 className="mt-3 text-base font-medium text-neutral-100">
              {p.title}
            </h3>
            <p className="mt-1 text-sm text-neutral-400">{p.description}</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {p.stack.map((t) => (
                <li
                  key={t}
                  className="rounded-lg border border-neutral-800 px-2 py-0.5 text-xs text-neutral-400"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </a>
      ))}
    </div>
  );
}


function ExperienceList({ items }: { items: { role: string; company: string; location: string; period: string; bullets: string[] }[] }) {
  return (
    <ol className="space-y-6">
      {items.map((it) => (
        <li key={`${it.company}-${it.role}`} className="rounded-2xl border border-neutral-900/60 bg-neutral-950/40 p-4">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
            <div>
              <p className="text-neutral-200">
                <span className="font-medium">{it.role}</span> · {it.company}
              </p>
              <p className="text-sm text-neutral-500">{it.location}</p>
            </div>
            <p className="text-sm text-neutral-400">{it.period}</p>
          </div>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-300">
            {it.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

function SkillsCloud({ items }: { items: string[] }) {
  return (
    <div className="rounded-2xl border border-neutral-900/60 bg-neutral-950/40 p-4">
      <div className="flex flex-wrap gap-2">
        {items.map((s) => (
          <span key={s} className="rounded-lg border border-neutral-800 px-2 py-1 text-xs text-neutral-300">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function ContactCard({ links }: { links: Record<string, string> }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-neutral-900/60 bg-neutral-950/40 p-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="text-base font-medium text-neutral-100">Let’s connect</h3>
        <p className="mt-1 text-sm text-neutral-400">Open to internships, full-time roles, and collaborations.</p>
      </div>
      <div className="flex flex-wrap gap-2">
        <a href={links.email} className="rounded-xl bg-neutral-100 px-4 py-2 text-neutral-900 hover:bg-white transition">
          Email
        </a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-900/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Eric Lee</p>
        <a href="#top" className="hover:text-neutral-300 transition">Back to top</a>
      </div>
    </footer>
  );
}

function AccentGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 -top-20 -z-10 h-60 bg-[radial-gradient(120px_80px_at_20%_40%,rgba(59,130,246,0.12),transparent),radial-gradient(160px_120px_at_80%_30%,rgba(236,72,153,0.10),transparent)]"
    />
  );
}
