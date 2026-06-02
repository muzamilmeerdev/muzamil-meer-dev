import { useState, useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    desc: "My personal developer portfolio website built with React and 3D animations. Features particle canvas, glassmorphism cards, smooth scroll animations, and a fully responsive layout.",
    tags: ["React", "TypeScript", "Motion", "Tailwind CSS", "Canvas API"],
    color: "#00d4ff",
    gradient: "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(0,212,255,0.03))",
    emoji: "🧑‍💻",
    metrics: ["3D animations", "Fully responsive", "Dark theme"],
    liveUrl: "https://muzamil-introduction.vercel.app/",
    githubUrl: "https://github.com/muzamilmeerdev",
  },
  {
    id: 2,
    title: "E-Commerce Store",
    desc: "Full-stack e-commerce platform with product listings, cart management, secure checkout, order tracking, and an admin dashboard for inventory management.",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    color: "#bf5af2",
    gradient: "linear-gradient(135deg, rgba(191,90,242,0.15), rgba(191,90,242,0.03))",
    emoji: "🛒",
    metrics: ["Secure payments", "Admin dashboard", "Real-time stock"],
    liveUrl: "https://e-commerce-by-com.vercel.app/",
    githubUrl: "https://github.com/muzamilmeerdev",
  },
  {
    id: 3,
    title: "Bandipora Explore",
    desc: "A tourism and travel guide web app for Bandipora, Kashmir. Showcases scenic spots, local culture, hotels, and trekking routes with an interactive map and photo gallery.",
    tags: ["React", "Leaflet Maps", "Node.js", "PostgreSQL", "Cloudinary"],
    color: "#00ffcc",
    gradient: "linear-gradient(135deg, rgba(0,255,204,0.15), rgba(0,255,204,0.03))",
    emoji: "🏔️",
    metrics: ["Interactive map", "Photo gallery", "Local guides"],
    liveUrl: "https://bandipora-com-muzamil.vercel.app/",
    githubUrl: "https://github.com/muzamilmeerdev",
  },
];

type Project = typeof projects[0];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale3d(1.02,1.02,1.02)`;
  };

  const onMouseLeave = () => {
    if (cardRef.current)
      cardRef.current.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onMouseEnter={() => setHovered(true)}
        style={{ transition: "transform 0.15s ease" }}
      >
        <div
          className="p-6 rounded-2xl h-full flex flex-col"
          style={{
            background: hovered ? project.gradient : "rgba(255,255,255,0.03)",
            border: `1px solid ${hovered ? project.color + "40" : "rgba(255,255,255,0.06)"}`,
            backdropFilter: "blur(16px)",
            boxShadow: hovered ? `0 20px 60px ${project.color}20, inset 0 1px 0 rgba(255,255,255,0.05)` : "none",
            transition: "all 0.4s ease",
          }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className="flex items-center justify-center rounded-xl text-2xl"
                style={{ width: 50, height: 50, background: `${project.color}15`, border: `1px solid ${project.color}25` }}
              >
                {project.emoji}
              </div>
              <div>
                <h3 style={{ fontFamily: "'Orbitron', monospace", fontSize: "1rem", fontWeight: 700, color: "#e8eaf6" }}>
                  {project.title}
                </h3>
                <div style={{ width: 40, height: 2, background: project.color, borderRadius: 9999, marginTop: 4 }} />
              </div>
            </div>
            <div className="flex gap-2">
              <a
                href={project.githubUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="flex items-center justify-center rounded-lg transition-all hover:scale-110"
                style={{
                  width: 32, height: 32,
                  background: project.githubUrl ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)",
                  color: project.githubUrl ? "#ccd6f6" : "#444",
                  cursor: project.githubUrl ? "pointer" : "default",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                onClick={e => !project.githubUrl && e.preventDefault()}
              >
                <Github size={15} />
              </a>
              <a
                href={project.liveUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                title={project.liveUrl ? "Live Site" : "Coming Soon"}
                className="flex items-center justify-center rounded-lg transition-all hover:scale-110"
                style={{
                  width: 32, height: 32,
                  background: project.liveUrl ? `${project.color}20` : "rgba(255,255,255,0.03)",
                  color: project.liveUrl ? project.color : "#444",
                  cursor: project.liveUrl ? "pointer" : "default",
                  border: `1px solid ${project.liveUrl ? project.color + "30" : "rgba(255,255,255,0.06)"}`,
                }}
                onClick={e => !project.liveUrl && e.preventDefault()}
              >
                <ExternalLink size={15} />
              </a>
            </div>
          </div>

          <p style={{ color: "#8892b0", fontSize: "0.9rem", lineHeight: 1.7, fontFamily: "'Inter', sans-serif", marginBottom: "1rem", flex: 1 }}>
            {project.desc}
          </p>

          {/* Metrics */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.metrics.map(m => (
              <span
                key={m}
                className="text-xs px-2.5 py-1 rounded-full"
                style={{ background: `${project.color}15`, color: project.color, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem" }}
              >
                {m}
              </span>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-md"
                style={{ background: "rgba(255,255,255,0.04)", color: "#8892b0", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div style={{ fontFamily: "'JetBrains Mono', monospace", color: "#00ffcc", fontSize: "0.85rem", letterSpacing: "0.2em", marginBottom: 12 }}>
            // 03. PROJECTS
          </div>
          <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "#e8eaf6" }}>
            What I've Built
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, x: 4 }}
            className="inline-flex items-center gap-2 text-sm font-medium"
            style={{ color: "#00d4ff", fontFamily: "'JetBrains Mono', monospace" }}
          >
            View all projects on GitHub <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
