import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowDown, Github, Linkedin, Twitter, Sparkles } from "lucide-react";

const roles = ["Full-Stack Developer", "UI/UX Engineer", "Open Source Contributor", "3D Web Creator"];
const FULL_NAME = "Muzamil Ahmad Mir";

function Card3D({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const springConfig = { stiffness: 120, damping: 18, mass: 0.8 };
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-28, 28]), springConfig);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [22, -22]), springConfig);
  const scale   = useSpring(1, { stiffness: 200, damping: 20 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rawX.set(x);
    rawY.set(y);
    glowX.set(((e.clientX - rect.left) / rect.width) * 100);
    glowY.set(((e.clientY - rect.top) / rect.height) * 100);
    scale.set(1.06);
  };

  const onMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
    glowX.set(50);
    glowY.set(50);
    scale.set(1);
  };

  const shimmerBg = useTransform(
    [glowX, glowY],
    ([gx, gy]) =>
      `radial-gradient(circle at ${gx}% ${gy}%, rgba(0,212,255,0.18) 0%, rgba(191,90,242,0.10) 40%, transparent 70%)`
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateY,
        rotateX,
        scale,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
    >
      {/* Shimmer layer */}
      <motion.div
        style={{
          position: "absolute", inset: 0, borderRadius: 16,
          background: shimmerBg,
          zIndex: 2, pointerEvents: "none",
          mixBlendMode: "screen",
        }}
      />
      {children}
    </motion.div>
  );
}

export function HeroSection() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [nameDone, setNameDone] = useState(false);
  const [displayedName, setDisplayedName] = useState("");

  // Type the name first
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i++;
      setDisplayedName(FULL_NAME.slice(0, i));
      if (i === FULL_NAME.length) {
        clearInterval(t);
        setTimeout(() => setNameDone(true), 400);
      }
    }, 70);
    return () => clearInterval(t);
  }, []);

  // Then cycle roles
  useEffect(() => {
    if (!nameDone) return;
    const role = roles[roleIdx];
    let i = 0;
    setDisplayed("");
    setTyping(true);

    const typeInterval = setInterval(() => {
      i++;
      setDisplayed(role.slice(0, i));
      if (i === role.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setTyping(false);
          setTimeout(() => {
            setRoleIdx(r => (r + 1) % roles.length);
          }, 400);
        }, 1800);
      }
    }, 60);

    return () => clearInterval(typeInterval);
  }, [roleIdx, nameDone]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6"
      style={{ paddingTop: 100 }}
    >
      {/* Glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{
          position: "absolute", top: "15%", left: "10%",
          width: 480, height: 480,
          background: "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(40px)",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", right: "5%",
          width: 520, height: 520,
          background: "radial-gradient(circle, rgba(191,90,242,0.1) 0%, transparent 70%)",
          borderRadius: "50%", filter: "blur(50px)",
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <Sparkles size={16} style={{ color: "#00d4ff" }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.85rem",
              color: "#00d4ff",
              letterSpacing: "0.15em",
            }}>
              AVAILABLE FOR HIRE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: "'Orbitron', monospace",
              fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: "0.5rem",
            }}
          >
            <span style={{ color: "#e8eaf6" }}>Hi, I'm</span>
            <br />
            <span style={{
              background: "linear-gradient(135deg, #00d4ff 0%, #bf5af2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
            }}>
              {displayedName}
              {!nameDone && (
                <span style={{
                  display: "inline-block",
                  width: 3,
                  height: "0.9em",
                  background: "#00d4ff",
                  borderRadius: 2,
                  animation: "blink 1s step-end infinite",
                  WebkitTextFillColor: "initial",
                }} />
              )}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-6"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
              color: "#00d4ff",
              height: "2rem",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span>{displayed}</span>
            <span
              style={{
                display: "inline-block",
                width: 2,
                height: "1.1em",
                background: "#00d4ff",
                animation: "blink 1s step-end infinite",
              }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              color: "#8892b0",
              lineHeight: 1.8,
              fontSize: "1.05rem",
              maxWidth: 480,
              fontFamily: "'Inter', sans-serif",
              marginBottom: "2rem",
            }}
          >
            I craft blazing-fast, pixel-perfect web experiences with modern
            technologies. Turning complex problems into elegant digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0,212,255,0.5), 0 0 80px rgba(0,212,255,0.2)" }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 rounded-xl font-semibold"
              style={{
                background: "linear-gradient(135deg, #00d4ff, #bf5af2)",
                color: "#050510",
                fontFamily: "'Orbitron', monospace",
                fontSize: "0.85rem",
                letterSpacing: "0.05em",
              }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              VIEW PROJECTS
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: "#00d4ff", boxShadow: "0 0 20px rgba(0,212,255,0.2)" }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3.5 rounded-xl font-semibold"
              style={{
                background: "transparent",
                color: "#00d4ff",
                border: "1px solid rgba(0,212,255,0.4)",
                fontFamily: "'Orbitron', monospace",
                fontSize: "0.85rem",
                letterSpacing: "0.05em",
                transition: "all 0.3s",
              }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              CONTACT ME
            </motion.button>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-4 mt-8"
          >
            {[
              { Icon: Github, href: "https://github.com/muzamilmeerdev", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/muzamil-ahmad-mir", label: "LinkedIn" },
              { Icon: Twitter, href: "#", label: "Twitter" },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.2, color: "#00d4ff" }}
                className="flex items-center justify-center rounded-lg transition-colors"
                style={{
                  width: 40, height: 40,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#8892b0",
                }}
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
            <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.1)" }} />
            <span style={{ color: "#8892b0", fontSize: "0.8rem", fontFamily: "'JetBrains Mono', monospace" }}>
              5+ years exp
            </span>
          </motion.div>
        </div>

        {/* Right — 3D card */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotateY: -20 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="hidden md:flex justify-center"
          style={{ perspective: 1000 }}
        >
          <Card3D>
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                width: 340,
                height: 420,
                background: "linear-gradient(145deg, rgba(0,212,255,0.08), rgba(191,90,242,0.08))",
                border: "1px solid rgba(0,212,255,0.25)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 30px 80px rgba(0,212,255,0.2), 0 0 0 1px rgba(255,255,255,0.06) inset, 0 0 120px rgba(191,90,242,0.1)",
                transformStyle: "preserve-3d",
                position: "relative",
              }}
            >
              {/* Avatar placeholder */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(145deg, rgba(0,212,255,0.05) 0%, rgba(191,90,242,0.1) 100%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div
                  className="rounded-full overflow-hidden"
                  style={{
                    width: 140, height: 140,
                    background: "linear-gradient(135deg, #00d4ff 0%, #bf5af2 100%)",
                    boxShadow: "0 0 40px rgba(0,212,255,0.4)",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/dxjkbpmgm/image/upload/v1782961846/WhatsApp_Image_2026-07-02_at_8.38.22_AM_1_otdfvt.jpg"
                    alt="Muzamil Ahmad Mir"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                  />
                </div>
                <div style={{ fontFamily: "'Orbitron', monospace", color: "#e8eaf6", fontWeight: 700, fontSize: "1.3rem" }}>
                  Muzamil Ahmad Mir
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", color: "#00d4ff", fontSize: "0.85rem" }}>
                  Full-Stack Developer
                </div>

                {/* Stats row */}
                <div className="flex gap-6 mt-2">
                  {[["50+", "Projects"], ["5+", "Years"], ["30+", "Clients"]].map(([num, label]) => (
                    <div key={label} className="text-center">
                      <div style={{ fontFamily: "'Orbitron', monospace", color: "#00d4ff", fontWeight: 700, fontSize: "1.1rem" }}>{num}</div>
                      <div style={{ color: "#8892b0", fontSize: "0.7rem", fontFamily: "'JetBrains Mono', monospace" }}>{label}</div>
                    </div>
                  ))}
                </div>

                {/* Status */}
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-full mt-2"
                  style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}
                >
                  <span
                    style={{
                      width: 8, height: 8, borderRadius: "50%", background: "#00ff88",
                      boxShadow: "0 0 8px #00ff88",
                      animation: "pulse 2s infinite",
                    }}
                  />
                  <span style={{ color: "#00d4ff", fontSize: "0.78rem", fontFamily: "'JetBrains Mono', monospace" }}>
                    Available for work
                  </span>
                </div>
              </div>

              {/* Corner decorations */}
              <div style={{ position: "absolute", top: 16, left: 16, width: 20, height: 20, borderTop: "2px solid #00d4ff", borderLeft: "2px solid #00d4ff", borderRadius: "2px 0 0 0" }} />
              <div style={{ position: "absolute", top: 16, right: 16, width: 20, height: 20, borderTop: "2px solid #bf5af2", borderRight: "2px solid #bf5af2", borderRadius: "0 2px 0 0" }} />
              <div style={{ position: "absolute", bottom: 16, left: 16, width: 20, height: 20, borderBottom: "2px solid #bf5af2", borderLeft: "2px solid #bf5af2", borderRadius: "0 0 0 2px" }} />
              <div style={{ position: "absolute", bottom: 16, right: 16, width: 20, height: 20, borderBottom: "2px solid #00d4ff", borderRight: "2px solid #00d4ff", borderRadius: "0 0 2px 0" }} />
            </div>
          </Card3D>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span style={{ color: "#8892b0", fontSize: "0.75rem", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.15em" }}>SCROLL</span>
        <ArrowDown size={18} style={{ color: "#00d4ff" }} />
      </motion.div>

      <style>{`
        @keyframes blink { 0%,100% { opacity:1 } 50% { opacity:0 } }
        @keyframes pulse { 0%,100% { opacity:1 } 50% { opacity:0.5 } }
      `}</style>
    </section>
  );
}
