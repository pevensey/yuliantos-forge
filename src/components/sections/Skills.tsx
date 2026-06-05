import { Database, Server, Cloud, ShieldCheck } from "lucide-react";
import { SectionLabel } from "./About";

const groups = [
  {
    icon: Server,
    title: "Backend",
    items: ["Java", "Spring Boot", "Laravel", "Django", "REST API"],
  },
  {
    icon: Database,
    title: "Database",
    items: ["PostgreSQL", "MySQL", "Redis"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    items: ["Docker", "Kubernetes", "Linux", "CI/CD"],
  },
  {
    icon: ShieldCheck,
    title: "Security",
    items: ["OAuth2", "JWT", "Keycloak"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Skills</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-2xl">
          The tools I use to ship <span className="text-gradient">production systems</span>.
        </h2>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {groups.map((g) => (
            <div
              key={g.title}
              className="group p-6 rounded-xl border border-border bg-card/60 hover:bg-card hover:border-primary/30 transition-all hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-brand/10 border border-border flex items-center justify-center mb-4">
                <g.icon className="w-5 h-5 text-brand-cyan" />
              </div>
              <h3 className="font-semibold mb-4">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs rounded-full border border-border bg-background/60 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
