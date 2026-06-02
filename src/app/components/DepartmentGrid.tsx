import { useState } from "react";
import {
  Landmark, Heart, GraduationCap, Shield, Home, Scale,
  Car, Leaf, Briefcase, DollarSign, Globe2, Users,
  Factory, Flame, Anchor, FlaskConical, ChevronRight,
} from "lucide-react";

const departments = [
  { icon: DollarSign, name: "Finance & Treasury", docs: 143, color: "#1a6b3c", bg: "#e6f4ed" },
  { icon: Heart, name: "Health & Social Care", docs: 218, color: "#c0392b", bg: "#fdeaea" },
  { icon: GraduationCap, name: "Education", docs: 176, color: "#1565c0", bg: "#e3eefa" },
  { icon: Shield, name: "Defence", docs: 89, color: "#37474f", bg: "#eceff1" },
  { icon: Home, name: "Home Affairs", docs: 134, color: "#6a1b9a", bg: "#f3e5f5" },
  { icon: Scale, name: "Justice", docs: 97, color: "#bf360c", bg: "#fbe9e7" },
  { icon: Car, name: "Transport", docs: 112, color: "#00695c", bg: "#e0f2f1" },
  { icon: Leaf, name: "Environment", docs: 88, color: "#2e7d32", bg: "#e8f5e9" },
  { icon: Briefcase, name: "Business & Trade", docs: 201, color: "#e65100", bg: "#fff3e0" },
  { icon: Globe2, name: "Foreign Affairs", docs: 74, color: "#01579b", bg: "#e1f5fe" },
  { icon: Users, name: "Social Services", docs: 156, color: "#4a148c", bg: "#ede7f6" },
  { icon: Factory, name: "Industry & Labour", docs: 99, color: "#33691e", bg: "#f1f8e9" },
  { icon: Flame, name: "Energy", docs: 67, color: "#e53935", bg: "#ffebee" },
  { icon: Anchor, name: "Maritime & Ports", docs: 45, color: "#0277bd", bg: "#e1f5fe" },
  { icon: FlaskConical, name: "Science & Research", docs: 83, color: "#00838f", bg: "#e0f7fa" },
  { icon: Landmark, name: "Culture & Heritage", docs: 61, color: "#795548", bg: "#efebe9" },
];

export function DepartmentGrid() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-foreground" style={{ fontSize: "1.6rem", fontWeight: 700 }}>
            Government Departments
          </h2>
          <p className="text-muted-foreground text-sm mt-1">
            Browse guidance by ministry or department
          </p>
        </div>
        <a
          href="#"
          className="hidden md:flex items-center gap-1 text-sm font-medium hover:underline"
          style={{ color: "#003087" }}
        >
          All departments <ChevronRight size={15} />
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {departments.map(dept => {
          const Icon = dept.icon;
          const isHovered = hovered === dept.name;
          return (
            <button
              key={dept.name}
              onMouseEnter={() => setHovered(dept.name)}
              onMouseLeave={() => setHovered(null)}
              className="flex flex-col items-start p-4 rounded-lg text-left transition-all duration-200"
              style={{
                background: isHovered ? dept.bg : "#ffffff",
                border: `1px solid ${isHovered ? dept.color + "40" : "rgba(0,48,135,0.08)"}`,
                boxShadow: isHovered ? `0 4px 16px ${dept.color}20` : "0 1px 3px rgba(0,0,0,0.05)",
                transform: isHovered ? "translateY(-2px)" : "none",
              }}
            >
              <div
                className="flex items-center justify-center rounded-lg mb-3"
                style={{
                  width: 40,
                  height: 40,
                  background: dept.bg,
                  color: dept.color,
                }}
              >
                <Icon size={20} />
              </div>
              <div className="text-sm font-medium text-foreground leading-snug mb-1">{dept.name}</div>
              <div className="text-xs text-muted-foreground">{dept.docs} documents</div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
