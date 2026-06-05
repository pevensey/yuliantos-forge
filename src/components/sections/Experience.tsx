import { BarChart3, Code2, Workflow, KeyRound, Plug } from "lucide-react";
import { SectionLabel } from "./About";

const items = [
  {
    icon: BarChart3,
    title: "Big Data & Analytics",
    desc: "Building and operating data platforms that move and shape data at scale.",
  },
  {
    icon: Code2,
    title: "Backend Development",
    desc: "Designing JVM and polyglot services with a focus on correctness and performance.",
  },
  {
    icon: Workflow,
    title: "API Design",
    desc: "Pragmatic REST contracts, versioning strategy, and developer experience.",
  },
  {
    icon: KeyRound,
    title: "Authentication & Authorization",
    desc: "OAuth2, JWT, and Keycloak-based identity for enterprise products.",
  },
  {
    icon: Plug,
    title: "System Integration",
    desc: "Connecting heterogeneous systems with resilient, observable pipelines.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Experience</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-2xl">
          Areas where I've shipped <span className="text-gradient">real impact</span>.
        </h2>
        <div className="mt-16 relative">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-brand-purple via-brand-blue to-brand-cyan opacity-40" />
          <div className="space-y-6">
            {items.map((it) => (
              <div key={it.title} className="group flex gap-6 items-start">
                <div className="relative shrink-0 w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <it.icon className="w-4 h-4 text-brand-cyan" />
                </div>
                <div className="flex-1 pb-2 pt-1">
                  <h3 className="font-semibold text-lg">{it.title}</h3>
                  <p className="text-muted-foreground mt-1">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
