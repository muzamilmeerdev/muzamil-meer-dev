import {
  CreditCard, FileCheck, Plane, Car, Building2, Baby,
  HeartHandshake, Gavel, BarChart3, ArrowRight
} from "lucide-react";

const services = [
  { icon: CreditCard, label: "Pay Tax Online", desc: "File and pay your taxes", color: "#1565c0" },
  { icon: FileCheck, label: "Apply for Benefits", desc: "Check eligibility & apply", color: "#2e7d32" },
  { icon: Plane, label: "Renew Passport", desc: "Apply or renew travel docs", color: "#6a1b9a" },
  { icon: Car, label: "Driving Services", desc: "Licence, MOT & vehicle tax", color: "#e65100" },
  { icon: Building2, label: "Planning Permission", desc: "Submit planning applications", color: "#00695c" },
  { icon: Baby, label: "Register a Birth", desc: "Birth, death & marriage", color: "#c0392b" },
  { icon: HeartHandshake, label: "Citizen Support", desc: "Welfare & social services", color: "#37474f" },
  { icon: Gavel, label: "Legal Aid", desc: "Access to justice services", color: "#bf360c" },
  { icon: BarChart3, label: "Business Permits", desc: "Licences & registrations", color: "#01579b" },
];

export function QuickServices() {
  return (
    <section style={{ background: "#001f5e" }} className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-white" style={{ fontSize: "1.6rem", fontWeight: 700 }}>
              Quick Access Services
            </h2>
            <p className="text-white/60 text-sm mt-1">Most-used government online services</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-1 text-sm text-white/70 hover:text-white">
            All services <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-9 gap-3">
          {services.map(svc => {
            const Icon = svc.icon;
            return (
              <button
                key={svc.label}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl text-center transition-all duration-200 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="flex items-center justify-center rounded-xl transition-colors group-hover:scale-110 duration-200"
                  style={{
                    width: 48,
                    height: 48,
                    background: "rgba(255,255,255,0.1)",
                    color: "#FFD700",
                  }}
                >
                  <Icon size={22} />
                </div>
                <div className="text-white text-xs font-medium leading-tight">{svc.label}</div>
                <div className="text-white/45 text-xs hidden md:block leading-tight">{svc.desc}</div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
