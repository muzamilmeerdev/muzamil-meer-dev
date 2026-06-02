import { useState } from "react";
import { Search, Menu, X, ChevronDown, Bell, Globe } from "lucide-react";

const navItems = [
  {
    label: "Departments",
    children: [
      "Finance & Treasury",
      "Health & Social Care",
      "Education",
      "Defence",
      "Home Affairs",
      "Justice",
      "Transport",
      "Environment",
    ],
  },
  {
    label: "Services",
    children: [
      "Permits & Licences",
      "Tax & Revenue",
      "Benefits & Support",
      "Business Registration",
      "Passport & Travel",
      "Land & Property",
    ],
  },
  {
    label: "Guidance",
    children: [
      "Policy Documents",
      "Legislation",
      "Circulars & Notices",
      "Forms & Templates",
      "FAQs",
    ],
  },
  { label: "News", children: [] },
  { label: "Contact", children: [] },
];

export function GovHeader({ onSearch }: { onSearch?: (q: string) => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [searchQ, setSearchQ] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQ);
  };

  return (
    <header className="w-full">
      {/* Top utility bar */}
      <div style={{ background: "#003087" }} className="text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Globe size={14} />
            <span className="opacity-80">Official Government Portal</span>
          </div>
          <div className="flex items-center gap-6 opacity-80">
            <a href="#" className="hover:opacity-100 transition-opacity">Accessibility</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Languages</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Sign In</a>
          </div>
        </div>
      </div>

      {/* Crown banner */}
      <div style={{ background: "#001f5e" }} className="text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Crown / Crest SVG */}
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="44" height="44" rx="4" fill="#005ea2" />
              <path d="M22 6L25.5 14H34L27.25 18.5L29.75 27L22 22L14.25 27L16.75 18.5L10 14H18.5L22 6Z" fill="#FFD700" />
              <rect x="10" y="30" width="24" height="4" rx="2" fill="#FFD700" />
              <rect x="13" y="36" width="18" height="3" rx="1.5" fill="#FFD700" />
            </svg>
            <div>
              <div className="font-bold tracking-wide" style={{ fontSize: "1.1rem" }}>GOV.GUIDANCE</div>
              <div className="text-xs opacity-70 tracking-widest uppercase">Official Government Services Portal</div>
            </div>
          </div>

          <form onSubmit={handleSearch} className="hidden md:flex items-center gap-2 flex-1 max-w-md ml-8">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchQ}
                onChange={e => setSearchQ(e.target.value)}
                placeholder="Search guidance, services, departments…"
                className="w-full px-4 py-2 pl-4 pr-10 rounded text-sm text-gray-900 focus:outline-none"
                style={{ background: "rgba(255,255,255,0.92)" }}
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 rounded text-white text-sm transition-colors"
              style={{ background: "#005ea2" }}
            >
              <Search size={16} />
            </button>
          </form>

          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-1 text-sm opacity-80 hover:opacity-100">
              <Bell size={16} />
              <span>Alerts</span>
            </button>
            <button
              className="md:hidden p-2 rounded hover:bg-white/10"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav style={{ background: "#003087", borderBottom: "3px solid #FFD700" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden md:flex">
            {navItems.map(item => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.children.length > 0 && setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button className="flex items-center gap-1 px-4 py-3 text-white text-sm hover:bg-white/10 transition-colors">
                  {item.label}
                  {item.children.length > 0 && <ChevronDown size={14} />}
                </button>
                {item.children.length > 0 && openMenu === item.label && (
                  <div
                    className="absolute top-full left-0 z-50 min-w-52 shadow-xl rounded-b"
                    style={{ background: "#001f5e", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    {item.children.map(child => (
                      <a
                        key={child}
                        href="#"
                        className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors border-b border-white/5 last:border-0"
                      >
                        {child}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden px-4 pb-4">
            <form onSubmit={handleSearch} className="flex gap-2 mb-4">
              <input
                type="text"
                value={searchQ}
                onChange={e => setSearchQ(e.target.value)}
                placeholder="Search…"
                className="flex-1 px-3 py-2 rounded text-sm text-gray-900 focus:outline-none"
              />
              <button type="submit" className="px-3 py-2 rounded text-white" style={{ background: "#005ea2" }}>
                <Search size={15} />
              </button>
            </form>
            {navItems.map(item => (
              <div key={item.label}>
                <div className="text-white font-medium py-2 border-b border-white/10">{item.label}</div>
                {item.children.map(child => (
                  <a key={child} href="#" className="block pl-4 py-1.5 text-white/70 text-sm hover:text-white">
                    {child}
                  </a>
                ))}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
