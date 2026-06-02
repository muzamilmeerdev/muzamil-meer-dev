import { useState } from "react";
import { Search, ArrowRight, Shield, CheckCircle } from "lucide-react";

const popularSearches = [
  "Passport renewal",
  "Business licence",
  "Tax return",
  "Driving licence",
  "Benefits claim",
  "Planning permission",
];

export function GovHero({ onSearch }: { onSearch?: (q: string) => void }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #001f5e 0%, #003087 55%, #005ea2 100%)",
      }}
    >
      {/* Geometric background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full opacity-10"
          style={{
            width: 600,
            height: 600,
            top: -200,
            right: -150,
            background: "radial-gradient(circle, #FFD700, transparent)",
          }}
        />
        <div
          className="absolute opacity-5"
          style={{
            width: 300,
            height: 300,
            bottom: -80,
            left: 60,
            background: "#ffffff",
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded mb-6"
            style={{ background: "rgba(255,215,0,0.15)", border: "1px solid rgba(255,215,0,0.3)" }}>
            <Shield size={14} style={{ color: "#FFD700" }} />
            <span className="text-sm" style={{ color: "#FFD700" }}>Official Government Guidance Portal</span>
          </div>

          <h1 className="text-white mb-4" style={{ fontSize: "2.8rem", fontWeight: 700, lineHeight: 1.15 }}>
            Find Government<br />
            <span style={{ color: "#FFD700" }}>Guidance & Services</span>
          </h1>

          <p className="text-white/75 mb-8 max-w-xl" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
            Access official guidance, policies, procedures, forms, and services from all
            government departments in one place.
          </p>

          {/* Search box */}
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex items-stretch gap-0 rounded-lg overflow-hidden shadow-2xl max-w-2xl"
              style={{ border: "2px solid rgba(255,215,0,0.4)" }}>
              <div className="flex-1 flex items-center bg-white px-4">
                <Search size={20} className="text-gray-400 mr-3 flex-shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Search guidance, services, forms, departments…"
                  className="flex-1 py-4 text-gray-900 focus:outline-none bg-transparent"
                  style={{ fontSize: "1rem" }}
                />
              </div>
              <button
                type="submit"
                className="flex items-center gap-2 px-6 text-white font-medium transition-colors"
                style={{ background: "#FFD700", color: "#001f5e" }}
              >
                Search
                <ArrowRight size={16} />
              </button>
            </div>
          </form>

          {/* Popular searches */}
          <div className="flex flex-wrap gap-2">
            <span className="text-white/50 text-sm mr-1 self-center">Popular:</span>
            {popularSearches.map(term => (
              <button
                key={term}
                onClick={() => { setQuery(term); onSearch?.(term); }}
                className="text-sm px-3 py-1 rounded-full text-white/80 hover:text-white transition-colors"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 max-w-3xl">
          {[
            { value: "42+", label: "Departments" },
            { value: "1,200+", label: "Guidance Documents" },
            { value: "300+", label: "Online Services" },
            { value: "24/7", label: "Availability" },
          ].map(stat => (
            <div key={stat.label} className="flex items-center gap-3">
              <CheckCircle size={18} style={{ color: "#FFD700", flexShrink: 0 }} />
              <div>
                <div className="text-white font-bold" style={{ fontSize: "1.3rem", lineHeight: 1 }}>{stat.value}</div>
                <div className="text-white/55 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
