import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Download, Coffee, Zap, Globe } from "lucide-react";

const facts = [
  { icon: Coffee, value: "1,200+", label: "Cups of coffee" },
  { icon: Zap, value: "50+", label: "Projects shipped" },
  { icon: Globe, value: "15+", label: "Countries reached" },
];

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div style={{ fontFamily: "'JetBrains Mono', monospace", color: "#00d4ff", fontSize: "0.85rem", letterSpacing: "0.2em", marginBottom: 12 }}>
            // 01. ABOUT
          </div>
          <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "#e8eaf6" }}>
            Who Am I?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div style={{ fontFamily: "'Inter', sans-serif", color: "#8892b0", lineHeight: 1.9, fontSize: "1.05rem", marginBottom: "1.5rem" }}>
              I'm <span style={{ color: "#00d4ff" }}>Muzamil Ahmad Mir</span>, a passionate Full-Stack Developer
              building high-performance web applications. I specialize in React, Node.js, and cloud
              architecture — turning complex ideas into elegant, scalable solutions.
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", color: "#8892b0", lineHeight: 1.9, fontSize: "1.05rem", marginBottom: "2rem" }}>
              When I'm not coding, I contribute to <span style={{ color: "#bf5af2" }}>open source</span>, write technical
              articles, and explore the intersection of design and engineering. I believe great software
              is both technically excellent and beautifully crafted.
            </div>

            <motion.a
              href="#"
              whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(0,212,255,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
              style={{
                background: "transparent",
                border: "1px solid rgba(0,212,255,0.4)",
                color: "#00d4ff",
                fontFamily: "'Orbitron', monospace",
                fontSize: "0.78rem",
                letterSpacing: "0.08em",
                transition: "all 0.3s",
              }}
            >
              <Download size={15} /> DOWNLOAD CV
            </motion.a>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-1 gap-4"
          >
            {facts.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.12 }}
                whileHover={{ scale: 1.03, x: 8 }}
                className="flex items-center gap-5 p-5 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(0,212,255,0.1)",
                  backdropFilter: "blur(10px)",
                  cursor: "default",
                  transition: "all 0.3s",
                }}
              >
                <div
                  className="flex items-center justify-center rounded-xl flex-shrink-0"
                  style={{
                    width: 52, height: 52,
                    background: "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(191,90,242,0.15))",
                    border: "1px solid rgba(0,212,255,0.2)",
                    color: "#00d4ff",
                  }}
                >
                  <Icon size={22} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Orbitron', monospace", fontSize: "1.6rem", fontWeight: 800, color: "#00d4ff", lineHeight: 1 }}>
                    {value}
                  </div>
                  <div style={{ color: "#8892b0", fontSize: "0.88rem", fontFamily: "'Inter', sans-serif", marginTop: 4 }}>
                    {label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
