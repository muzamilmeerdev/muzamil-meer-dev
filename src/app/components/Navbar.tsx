import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Code2 } from "lucide-react";

const links = ["About", "Skills", "Projects", "Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{
        background: scrolled
          ? "rgba(5,5,16,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,212,255,0.1)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div
            className="flex items-center justify-center rounded-lg"
            style={{
              width: 36, height: 36,
              background: "linear-gradient(135deg, #00d4ff, #bf5af2)",
              boxShadow: "0 0 20px rgba(0,212,255,0.4)",
            }}
          >
            <Code2 size={18} color="#050510" strokeWidth={2.5} />
          </div>
          <span style={{
            fontFamily: "'Orbitron', monospace",
            fontSize: "1.1rem",
            fontWeight: 700,
            background: "linear-gradient(90deg, #00d4ff, #bf5af2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            DEV.IO
          </span>
        </motion.div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <motion.button
              key={link}
              onClick={() => scrollTo(link)}
              className="relative px-4 py-2 text-sm group"
              style={{ color: "#8892b0", fontFamily: "'JetBrains Mono', monospace" }}
              whileHover={{ color: "#00d4ff" }}
            >
              <span className="opacity-50 mr-0.5" style={{ color: "#00d4ff", fontFamily: "monospace" }}>./</span>
              {link}
              <span
                className="absolute bottom-0 left-4 right-4 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: "linear-gradient(90deg, #00d4ff, #bf5af2)" }}
              />
            </motion.button>
          ))}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 24px rgba(0,212,255,0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="ml-4 px-5 py-2 rounded-lg text-sm font-medium"
            style={{
              background: "linear-gradient(135deg, #00d4ff, #bf5af2)",
              color: "#050510",
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 600,
            }}
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white/70" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t"
            style={{ borderColor: "rgba(0,212,255,0.1)" }}
          >
            {links.map(link => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="block w-full text-left px-2 py-3 text-sm"
                style={{ color: "#8892b0", fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span style={{ color: "#00d4ff" }}>./</span>{link}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
