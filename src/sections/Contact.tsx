import { useState } from "react";
import { Phone, Mail, MapPin, Globe2, Send } from "lucide-react";
import { contact } from "@/data/site";

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    details: "",
    nda: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Phone: ${form.phone}`,
      `Project Type: ${form.projectType}`,
      `NDA requested: ${form.nda ? "Yes" : "No"}`,
      "",
      form.details,
    ].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      "Project Inquiry - " + form.name,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-navy px-6 py-16 text-white sm:px-10 lg:px-14 lg:py-24">
          <div className="max-w-lg">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-red-500/60" />
              <span className="pill-badge-dark">
                <Mail size={14} className="text-red-400" />
                CONTACT US
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">
              Let's Build the
              <br />
              <span className="font-light italic text-red-300">Future Together</span>
            </h2>

            <p className="mt-5 text-white/65">
              Connect with our team to discuss how we can deliver world-class EPCC
              solutions for your next infrastructure project.
            </p>

            <div className="mt-10 space-y-6">
              <ContactRow icon={Phone} label="Direct Line">
                {contact.phones.map((p) => (
                  <a
                    key={p}
                    href={`tel:${p.replace(/[\s()-]/g, "")}`}
                    className="block hover:text-red-300"
                  >
                    {p}
                  </a>
                ))}
              </ContactRow>

              <ContactRow icon={Mail} label="Email">
                <a href={`mailto:${contact.email}`} className="hover:text-red-300">
                  {contact.email}
                </a>
              </ContactRow>

              <ContactRow icon={MapPin} label="Headquarters">
                {contact.hq.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </ContactRow>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <div className="flex items-center gap-2 text-red-300">
                <Globe2 size={18} />
                <span className="text-sm font-bold uppercase tracking-wide">
                  Iraqi Presence
                </span>
              </div>
              <p className="mt-3 text-white/60">
                Based in Iraq with headquarters in Dubai, we deliver EPCC expertise
                across Iraqi refinery and industrial projects.
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 py-16 sm:px-10 lg:px-14 lg:py-24">
          <div className="max-w-lg">
            <h3 className="text-3xl font-semibold text-navy">Start Your Project</h3>
            <p className="mt-2 text-navy/60">
              Fill out the form below and our team will respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field label="Full Name" required>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="input-field"
                  />
                </Field>
                <Field label="Email Address" required>
                  <input
                    required
                    type="email"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="input-field"
                  />
                </Field>
                <Field label="Company">
                  <input
                    type="text"
                    placeholder="Your Company"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="input-field"
                  />
                </Field>
                <Field label="Phone">
                  <input
                    type="tel"
                    placeholder="+971 XX XXX XXXX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="input-field"
                  />
                </Field>
              </div>

              <Field label="Project Type">
                <select
                  value={form.projectType}
                  onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                  className="input-field"
                >
                  <option value="">Select project type...</option>
                  {contact.projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Project Details" required>
                <textarea
                  required
                  rows={5}
                  placeholder="Describe your project scope, timeline, and specific requirements..."
                  value={form.details}
                  onChange={(e) => setForm({ ...form, details: e.target.value })}
                  className="input-field resize-none"
                />
              </Field>

              <label className="flex items-start gap-3 text-sm text-navy/65">
                <input
                  type="checkbox"
                  checked={form.nda}
                  onChange={(e) => setForm({ ...form, nda: e.target.checked })}
                  className="mt-0.5 h-4 w-4 accent-red-600"
                />
                I agree to sign an NDA before project discussion
              </label>

              <button type="submit" className="btn-primary w-full sm:w-auto">
                Submit Inquiry
                <Send size={15} />
              </button>

              <p className="text-xs text-navy/45">
                By submitting this form, you agree to our Privacy Policy. All project
                inquiries are handled with strict confidentiality.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactRow = ({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex items-start gap-4">
    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center bg-white/10">
      <Icon size={18} className="text-red-400" />
    </div>
    <div>
      <p className="text-xs uppercase tracking-wide text-white/40">{label}</p>
      <div className="mt-1 text-white/85">{children}</div>
    </div>
  </div>
);

const Field = ({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) => (
  <div>
    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-navy/60">
      {label} {required && <span className="text-red-600">*</span>}
    </label>
    {children}
  </div>
);
