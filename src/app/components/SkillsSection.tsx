import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const skillGroups = [
  {
    category: "Frontend",
    color: "#00d4ff",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Three.js / WebGL", level: 75 },
    ],
  },
  {
    category: "Backend",
    color: "#bf5af2",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "GraphQL", level: 78 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    category: "DevOps & Tools",
    color: "#00ffcc",
    skills: [
      { name: "Docker / K8s", level: 80 },
      { name: "AWS / GCP", level: 76 },
      { name: "CI/CD Pipelines", level: 84 },
      { name: "Git & GitHub", level: 95 },
    ],
  },
];

const techLogos = [
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL",
  "Docker", "AWS", "GraphQL", "Redis", "Tailwind",
  "Three.js", "Prisma",
];

export function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28 px-6" style={{ background: "rgba(0,0,0,0.2)" }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div style={{ fontFamily: "'JetBrains Mono', monospace", color: "#bf5af2", fontSize: "0.85rem", letterSpacing: "0.2em", marginBottom: 12 }}>
            // 02. SKILLS
          </div>
          <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "#e8eaf6" }}>
            Tech Arsenal
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.02, boxShadow: `0 20px 60px ${group.color}20` }}
              className="p-6 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${group.color}25`,
                backdropFilter: "blur(12px)",
                transition: "all 0.3s",
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: group.color, boxShadow: `0 0 12px ${group.color}` }} />
                <span style={{ fontFamily: "'Orbitron', monospace", fontSize: "0.85rem", fontWeight: 700, color: group.color, letterSpacing: "0.1em" }}>
                  {group.category.toUpperCase()}
                </span>
              </div>

              <div className="space-y-5">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem", color: "#ccd6f6" }}>
                        {skill.name}
                      </span>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: group.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="rounded-full overflow-hidden"
                      style={{ height: 5, background: "rgba(255,255,255,0.06)" }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: gi * 0.15 + si * 0.08 + 0.4, duration: 1, ease: "easeOut" }}
                        style={{
                          height: "100%",
                          background: `linear-gradient(90deg, ${group.color}, ${group.color}99)`,
                          borderRadius: 9999,
                          boxShadow: `0 0 8px ${group.color}80`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech logo ticker */}
        <div className="overflow-hidden" style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-4"
            style={{ width: "max-content" }}
          >
            {[...techLogos, ...techLogos].map((tech, i) => (
              <div
                key={`${tech}-${i}`}
                className="px-5 py-2.5 rounded-xl flex-shrink-0"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.8rem",
                  color: "#8892b0",
                  whiteSpace: "nowrap",
                }}
              >
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
