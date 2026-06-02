import { useState } from "react";
import { AlertTriangle, Info, CheckCircle, X, ChevronRight } from "lucide-react";

const alerts = [
  {
    id: 1,
    type: "warning" as const,
    title: "System Maintenance Notice",
    body: "Online tax services will be unavailable on 2 June 2026 from 02:00–06:00 for scheduled maintenance.",
  },
  {
    id: 2,
    type: "info" as const,
    title: "New Digital Identity Pilot",
    body: "The government digital identity scheme is now accepting applications in selected regions. Check eligibility.",
  },
  {
    id: 3,
    type: "success" as const,
    title: "Benefits Portal Updated",
    body: "The benefits claims portal has been updated with a faster application process. Existing claims are unaffected.",
  },
];

const styles = {
  warning: {
    bg: "#fffbeb",
    border: "#f59e0b",
    text: "#92400e",
    Icon: AlertTriangle,
    iconColor: "#d97706",
  },
  info: {
    bg: "#eff6ff",
    border: "#3b82f6",
    text: "#1e40af",
    Icon: Info,
    iconColor: "#3b82f6",
  },
  success: {
    bg: "#f0fdf4",
    border: "#22c55e",
    text: "#14532d",
    Icon: CheckCircle,
    iconColor: "#16a34a",
  },
};

export function AlertsBanner() {
  const [dismissed, setDismissed] = useState<number[]>([]);
  const visible = alerts.filter(a => !dismissed.includes(a.id));

  if (visible.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-3">
      <div className="flex items-center gap-2 mb-1">
        <AlertTriangle size={16} style={{ color: "#003087" }} />
        <span className="text-sm font-semibold" style={{ color: "#003087" }}>Important Notices</span>
      </div>
      {visible.map(alert => {
        const s = styles[alert.type];
        const Icon = s.Icon;
        return (
          <div
            key={alert.id}
            className="flex items-start gap-3 p-4 rounded-lg"
            style={{ background: s.bg, borderLeft: `4px solid ${s.border}` }}
          >
            <Icon size={18} style={{ color: s.iconColor, flexShrink: 0, marginTop: 1 }} />
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm" style={{ color: s.text }}>{alert.title}</div>
              <div className="text-sm mt-0.5 opacity-80" style={{ color: s.text }}>{alert.body}</div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <a href="#" className="text-xs font-medium hover:underline flex items-center gap-0.5" style={{ color: s.text }}>
                Details <ChevronRight size={12} />
              </a>
              <button
                onClick={() => setDismissed(d => [...d, alert.id])}
                className="p-1 rounded hover:bg-black/10 transition-colors"
                style={{ color: s.text }}
              >
                <X size={14} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
