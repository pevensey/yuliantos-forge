import { Mail, Linkedin, Github, MapPin, ArrowRight } from "lucide-react";
import { SectionLabel } from "./About";

const links = [
  { icon: Mail, label: "Email", value: "yulianto@example.com", href: "mailto:yulianto@example.com" },
  { icon: Linkedin, label: "LinkedIn", value: "/in/yulianto", href: "#" },
  { icon: Github, label: "GitHub", value: "@yulianto", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15),transparent_60%)]" />
      <div className="relative max-w-4xl mx-auto text-center">
        <SectionLabel>Contact</SectionLabel>
        <h2 className="text-3xl md:text-6xl font-bold tracking-tight">
          Let's build something <span className="text-gradient">scalable</span>.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          Open to backend, platform, and cloud engineering roles, as well as freelance and
          consulting work.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          Indonesia · Remote-friendly
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="group p-6 rounded-xl border border-border bg-card/60 hover:bg-card hover:border-primary/40 transition-all hover:-translate-y-1 text-left"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-brand/10 border border-border flex items-center justify-center">
                  <l.icon className="w-5 h-5 text-brand-cyan" />
                </div>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{l.label}</div>
              <div className="font-medium mt-1 truncate">{l.value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
