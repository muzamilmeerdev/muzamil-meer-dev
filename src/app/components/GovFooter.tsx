import { Globe, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const footerLinks = [
  {
    heading: "Government",
    links: ["About This Portal", "Ministerial Departments", "Cabinet Office", "Civil Service", "Parliament"],
  },
  {
    heading: "Services",
    links: ["All Services A–Z", "Online Forms", "Apply for Benefits", "Pay Tax", "Business Services"],
  },
  {
    heading: "Guidance",
    links: ["Policies & Procedures", "Legislation", "Circulars", "Consultations", "Whitepapers"],
  },
  {
    heading: "Help & Support",
    links: ["Contact Government", "Accessibility", "Privacy Policy", "Terms of Use", "Cookies"],
  },
];

export function GovFooter() {
  return (
    <footer>
      {/* Contact strip */}
      <div style={{ background: "#005ea2" }} className="text-white">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <Phone size={20} className="flex-shrink-0 mt-0.5 opacity-70" />
            <div>
              <div className="font-semibold text-sm">Government Helpline</div>
              <div className="text-white/75 text-sm">0800 GOV-HELP (0800 468 4357)</div>
              <div className="text-white/55 text-xs">Mon–Fri 8am–6pm</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail size={20} className="flex-shrink-0 mt-0.5 opacity-70" />
            <div>
              <div className="font-semibold text-sm">Email Enquiries</div>
              <div className="text-white/75 text-sm">enquiries@gov.guidance.example</div>
              <div className="text-white/55 text-xs">Response within 5 working days</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin size={20} className="flex-shrink-0 mt-0.5 opacity-70" />
            <div>
              <div className="font-semibold text-sm">Central Government Office</div>
              <div className="text-white/75 text-sm">1 Government Square, Capital City</div>
              <div className="text-white/55 text-xs">Open to public Mon–Fri 9am–4pm</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div style={{ background: "#001f5e" }} className="text-white">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            {footerLinks.map(section => (
              <div key={section.heading}>
                <div className="text-xs font-bold uppercase tracking-widest mb-4 opacity-50">{section.heading}</div>
                <ul className="space-y-2.5">
                  {section.links.map(link => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/65 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <svg width="32" height="32" viewBox="0 0 44 44" fill="none">
                <rect width="44" height="44" rx="4" fill="#005ea2" />
                <path d="M22 6L25.5 14H34L27.25 18.5L29.75 27L22 22L14.25 27L16.75 18.5L10 14H18.5L22 6Z" fill="#FFD700" />
                <rect x="10" y="30" width="24" height="4" rx="2" fill="#FFD700" />
              </svg>
              <div>
                <div className="font-bold text-sm">GOV.GUIDANCE</div>
                <div className="text-white/40 text-xs">Official Government Services Portal</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-white/40">
              <Globe size={14} />
              <span>© 2026 Government of [Country]. All rights reserved.</span>
              <a href="#" className="hover:text-white flex items-center gap-1">
                Accessibility Statement <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
