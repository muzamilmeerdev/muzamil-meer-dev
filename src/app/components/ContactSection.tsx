import { useState, useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { Send, Mail, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

// ─── EmailJS Setup ───────────────────────────────────────────────
// 1. emailjs.com par free account banao
// 2. Email Service add karo (Gmail select karo) → apna SERVICE_ID yahan likho
// 3. Email Template banao (variables: {{from_name}}, {{from_email}}, {{message}}) → TEMPLATE_ID
// 4. Account > API Keys se PUBLIC_KEY copy karo
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";   // ← yahan apna Service ID likho
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // ← yahan apna Template ID likho
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";   // ← yahan apna Public Key likho
// ────────────────────────────────────────────────────────────────

export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_email: "muzamilmeer598@gmail.com",
      },
      EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    })
    .catch(() => {
      setLoading(false);
      setError(true);
    });
  };

  return (
    <section id="contact" className="py-28 px-6" style={{ background: "rgba(0,0,0,0.2)" }}>
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div style={{ fontFamily: "'JetBrains Mono', monospace", color: "#bf5af2", fontSize: "0.85rem", letterSpacing: "0.2em", marginBottom: 12 }}>
            // 04. CONTACT
          </div>
          <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, color: "#e8eaf6" }}>
            Let's Work Together
          </h2>
          <p style={{ color: "#8892b0", marginTop: 12, fontFamily: "'Inter', sans-serif" }}>
            Have a project in mind? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:col-span-2 space-y-5"
          >
            {[
              { Icon: Mail, label: "Email", value: "muzamilmeer598@gmail.com", color: "#00d4ff" },
              { Icon: MapPin, label: "Location", value: "Bandipora, Jammu & Kashmir", color: "#bf5af2" },
              { Icon: Clock, label: "Response Time", value: "< 24 hours", color: "#00ffcc" },
            ].map(({ Icon, label, value, color }) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.03, x: 6 }}
                className="flex items-center gap-4 p-4 rounded-xl"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", transition: "all 0.3s" }}
              >
                <div style={{ width: 44, height: 44, background: `${color}15`, border: `1px solid ${color}25`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color }}>
                  <Icon size={19} />
                </div>
                <div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", color: "#8892b0", letterSpacing: "0.1em", marginBottom: 2 }}>{label.toUpperCase()}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", color: "#ccd6f6", fontSize: "0.9rem" }}>{value}</div>
                </div>
              </motion.div>
            ))}

            {/* Terminal-style availability */}
            <div
              className="p-4 rounded-xl mt-4"
              style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(0,212,255,0.15)", fontFamily: "'JetBrains Mono', monospace" }}
            >
              <div style={{ color: "#8892b0", fontSize: "0.72rem", marginBottom: 8 }}>$ status --current</div>
              <div style={{ color: "#00ff88", fontSize: "0.82rem" }}>✓ Available for freelance</div>
              <div style={{ color: "#00d4ff", fontSize: "0.82rem" }}>✓ Open to full-time roles</div>
              <div style={{ color: "#bf5af2", fontSize: "0.82rem" }}>✓ Open source collaborations</div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="md:col-span-3"
          >
            <div
              className="p-7 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(0,212,255,0.12)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 30px 80px rgba(0,212,255,0.06)",
              }}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <CheckCircle size={56} style={{ color: "#00ff88" }} />
                  <div style={{ fontFamily: "'Orbitron', monospace", color: "#e8eaf6", fontWeight: 700, fontSize: "1.2rem" }}>
                    Message Sent!
                  </div>
                  <div style={{ color: "#8892b0", fontFamily: "'Inter', sans-serif" }}>
                    I'll get back to you within 24 hours.
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { label: "Your Name", key: "name", type: "text", placeholder: "John Doe" },
                    { label: "Email Address", key: "email", type: "email", placeholder: "john@example.com" },
                  ].map(({ label, key, type, placeholder }) => (
                    <div key={key}>
                      <label style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "#8892b0", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>
                        {label.toUpperCase()}
                      </label>
                      <input
                        type={type}
                        required
                        placeholder={placeholder}
                        value={form[key as keyof typeof form]}
                        onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl outline-none focus:ring-1 transition-all"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "#e8eaf6",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.92rem",
                          ringColor: "#00d4ff",
                        }}
                        onFocus={e => (e.target.style.borderColor = "rgba(0,212,255,0.4)")}
                        onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "#8892b0", letterSpacing: "0.1em", display: "block", marginBottom: 8 }}>
                      MESSAGE
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your project…"
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl outline-none resize-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#e8eaf6",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.92rem",
                      }}
                      onFocus={e => (e.target.style.borderColor = "rgba(0,212,255,0.4)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.03, boxShadow: "0 0 40px rgba(0,212,255,0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold"
                    style={{
                      background: loading ? "rgba(0,212,255,0.3)" : "linear-gradient(135deg, #00d4ff, #bf5af2)",
                      color: "#050510",
                      fontFamily: "'Orbitron', monospace",
                      fontSize: "0.85rem",
                      letterSpacing: "0.08em",
                      cursor: loading ? "not-allowed" : "pointer",
                    }}
                  >
                    {loading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        style={{ width: 18, height: 18, border: "2px solid #050510", borderTopColor: "transparent", borderRadius: "50%" }}
                      />
                    ) : (
                      <><Send size={16} /> SEND MESSAGE</>
                    )}
                  </motion.button>

                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-3 rounded-xl"
                      style={{ background: "rgba(255,69,58,0.1)", border: "1px solid rgba(255,69,58,0.3)" }}
                    >
                      <AlertCircle size={16} style={{ color: "#ff453a", flexShrink: 0 }} />
                      <span style={{ color: "#ff453a", fontSize: "0.82rem", fontFamily: "'Inter', sans-serif" }}>
                        Message send nahi hua. EmailJS keys check karo ya baad mein try karo.
                      </span>
                    </motion.div>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
