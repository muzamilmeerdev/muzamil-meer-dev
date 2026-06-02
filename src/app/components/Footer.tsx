import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Code2, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ background: "rgba(0,0,0,0.4)", borderTop: "1px solid rgba(0,212,255,0.08)" }}>
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div
            style={{
              width: 32, height: 32, borderRadius: 8,
              background: "linear-gradient(135deg, #00d4ff, #bf5af2)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <Code2 size={16} color="#050510" strokeWidth={2.5} />
          </div>
          <span style={{ fontFamily: "'Orbitron', monospace", fontSize: "0.9rem", fontWeight: 700, color: "#8892b0" }}>
            DEV.IO
          </span>
        </div>

        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.78rem", color: "#8892b0", display: "flex", alignItems: "center", gap: 6 }}>
          Built with <Heart size={13} style={{ color: "#bf5af2" }} /> by Muzamil Ahmad Mir · © 2026
        </div>

        <div className="flex items-center gap-3">
          {[
            { Icon: Github, href: "https://github.com/muzamilmeerdev" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/muzamil-ahmad-mir" },
            { Icon: Twitter, href: "#" },
          ].map(({ Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              whileHover={{ scale: 1.2, color: "#00d4ff" }}
              style={{ color: "#8892b0", display: "flex" }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
