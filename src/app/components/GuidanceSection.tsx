import { useState } from "react";
import { FileText, Calendar, Tag, ChevronRight, BookOpen, ExternalLink, Clock } from "lucide-react";

type Tab = "recent" | "featured" | "forms";

const guidance = {
  recent: [
    {
      id: 1,
      title: "Updated Procurement Regulations 2026",
      dept: "Finance & Treasury",
      date: "28 May 2026",
      type: "Policy",
      summary: "New rules governing public procurement processes for contracts above £50,000, including sustainability requirements.",
      urgent: true,
    },
    {
      id: 2,
      title: "National Health Service Staffing Guidelines",
      dept: "Health & Social Care",
      date: "25 May 2026",
      type: "Circular",
      summary: "Guidance on minimum staffing ratios for hospital wards and primary care facilities effective 1 July 2026.",
      urgent: false,
    },
    {
      id: 3,
      title: "Digital Identity Verification Standards",
      dept: "Home Affairs",
      date: "22 May 2026",
      type: "Standard",
      summary: "Technical standards for digital identity verification systems used in government services.",
      urgent: false,
    },
    {
      id: 4,
      title: "Small Business Grant Scheme 2026–27",
      dept: "Business & Trade",
      date: "20 May 2026",
      type: "Guidance",
      summary: "Eligibility criteria and application procedures for the 2026–27 small business development grant.",
      urgent: false,
    },
    {
      id: 5,
      title: "Environmental Impact Assessment Procedures",
      dept: "Environment",
      date: "18 May 2026",
      type: "Policy",
      summary: "Revised procedures for conducting environmental impact assessments for major infrastructure projects.",
      urgent: false,
    },
    {
      id: 6,
      title: "School Curriculum Framework Amendment",
      dept: "Education",
      date: "15 May 2026",
      type: "Notice",
      summary: "Amendments to national curriculum requirements for secondary education including digital literacy modules.",
      urgent: false,
    },
  ],
  featured: [
    {
      id: 7,
      title: "Civil Service Code of Conduct",
      dept: "Cabinet Office",
      date: "1 Jan 2026",
      type: "Code",
      summary: "The overarching code of conduct for all civil servants covering integrity, honesty, objectivity, and impartiality.",
      urgent: false,
    },
    {
      id: 8,
      title: "Freedom of Information Act Guidance",
      dept: "Justice",
      date: "15 Mar 2026",
      type: "Guidance",
      summary: "Comprehensive guidance for public bodies on handling FOI requests, exemptions, and publication schemes.",
      urgent: false,
    },
    {
      id: 9,
      title: "Data Protection in Government Services",
      dept: "Home Affairs",
      date: "10 Apr 2026",
      type: "Policy",
      summary: "Policy framework for handling personal data across government departments, aligned with data protection legislation.",
      urgent: false,
    },
    {
      id: 10,
      title: "Public Sector Equality Duty",
      dept: "Social Services",
      date: "5 Feb 2026",
      type: "Guidance",
      summary: "Guidance on meeting the general and specific duties under equality legislation for public bodies.",
      urgent: false,
    },
    {
      id: 11,
      title: "Government Security Classification Policy",
      dept: "Cabinet Office",
      date: "20 Jan 2026",
      type: "Policy",
      summary: "Official classification framework for government information: OFFICIAL, SECRET, and TOP SECRET categories.",
      urgent: false,
    },
    {
      id: 12,
      title: "Emergency Response Framework",
      dept: "Home Affairs",
      date: "12 Feb 2026",
      type: "Framework",
      summary: "National framework for coordinating emergency response across central and local government agencies.",
      urgent: false,
    },
  ],
  forms: [
    {
      id: 13,
      title: "Form GOV-TAX-001: Annual Tax Return",
      dept: "Finance & Treasury",
      date: "1 Apr 2026",
      type: "Form",
      summary: "Official annual income tax return form for individuals and sole traders. Available online and as PDF.",
      urgent: false,
    },
    {
      id: 14,
      title: "Form HOM-VIS-204: Visa Application",
      dept: "Home Affairs",
      date: "1 Mar 2026",
      type: "Form",
      summary: "Application form for standard visitor visa. Must be completed in English and submitted with supporting documents.",
      urgent: false,
    },
    {
      id: 15,
      title: "Form BUS-REG-101: Company Registration",
      dept: "Business & Trade",
      date: "15 Feb 2026",
      type: "Form",
      summary: "Application for registration of a new company including details of directors, shareholders, and registered address.",
      urgent: false,
    },
    {
      id: 16,
      title: "Form HLT-CLM-017: Medical Benefits Claim",
      dept: "Health & Social Care",
      date: "10 Jan 2026",
      type: "Form",
      summary: "Claim form for healthcare benefits and medical expense reimbursement for eligible individuals.",
      urgent: false,
    },
    {
      id: 17,
      title: "Form TRN-LIC-055: Driving Licence Renewal",
      dept: "Transport",
      date: "5 Mar 2026",
      type: "Form",
      summary: "Application for renewal of standard driving licence. Attach current licence and valid photo identification.",
      urgent: false,
    },
    {
      id: 18,
      title: "Form EDU-SCH-008: School Enrollment",
      dept: "Education",
      date: "20 Jan 2026",
      type: "Form",
      summary: "Official enrollment form for state school registration. Must be submitted to the local education authority.",
      urgent: false,
    },
  ],
};

const typeColors: Record<string, { bg: string; text: string }> = {
  Policy: { bg: "#e3eefa", text: "#1565c0" },
  Circular: { bg: "#fff3e0", text: "#e65100" },
  Standard: { bg: "#e8f5e9", text: "#2e7d32" },
  Guidance: { bg: "#f3e5f5", text: "#6a1b9a" },
  Notice: { bg: "#fbe9e7", text: "#bf360c" },
  Code: { bg: "#e0f2f1", text: "#00695c" },
  Framework: { bg: "#fdeaea", text: "#c0392b" },
  Form: { bg: "#eceff1", text: "#37474f" },
};

export function GuidanceSection() {
  const [activeTab, setActiveTab] = useState<Tab>("recent");

  const items = guidance[activeTab];

  return (
    <section className="max-w-7xl mx-auto px-4 pb-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-foreground" style={{ fontSize: "1.6rem", fontWeight: 700 }}>
            Guidance & Documents
          </h2>
          <p className="text-muted-foreground text-sm mt-1">
            Official policies, circulars, notices, and forms
          </p>
        </div>

        <div className="flex rounded-lg overflow-hidden border" style={{ borderColor: "rgba(0,48,135,0.15)" }}>
          {(["recent", "featured", "forms"] as Tab[]).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="px-4 py-2 text-sm capitalize transition-colors"
              style={{
                background: activeTab === tab ? "#003087" : "#ffffff",
                color: activeTab === tab ? "#ffffff" : "#003087",
                fontWeight: activeTab === tab ? 600 : 400,
              }}
            >
              {tab === "recent" ? "Recent Updates" : tab === "featured" ? "Featured" : "Forms & Templates"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {items.map(item => {
          const typeStyle = typeColors[item.type] || { bg: "#f0f0f0", text: "#444" };
          return (
            <div
              key={item.id}
              className="bg-card rounded-lg p-5 flex gap-4 transition-all duration-200 cursor-pointer hover:-translate-y-0.5"
              style={{
                border: "1px solid rgba(0,48,135,0.08)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              }}
            >
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-lg"
                style={{ width: 44, height: 44, background: typeStyle.bg, color: typeStyle.text }}
              >
                {item.type === "Form" ? <FileText size={20} /> : <BookOpen size={20} />}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-2 mb-1">
                  <h3
                    className="text-foreground leading-snug"
                    style={{ fontSize: "0.92rem", fontWeight: 600 }}
                  >
                    {item.title}
                  </h3>
                  {item.urgent && (
                    <span
                      className="flex-shrink-0 text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{ background: "#fdeaea", color: "#c0392b" }}
                    >
                      Updated
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">
                  {item.summary}
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ background: typeStyle.bg, color: typeStyle.text }}
                  >
                    {item.type}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Tag size={11} /> {item.dept}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock size={11} /> {item.date}
                  </span>
                  <a
                    href="#"
                    className="ml-auto flex items-center gap-1 text-xs font-medium hover:underline"
                    style={{ color: "#003087" }}
                  >
                    {item.type === "Form" ? "Download" : "Read more"}
                    <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-6">
        <button
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
          style={{ background: "#003087", color: "#ffffff" }}
        >
          View all {activeTab === "forms" ? "forms" : "guidance"} <ChevronRight size={15} />
        </button>
      </div>
    </section>
  );
}
