import { Briefcase, Cloud, Cpu } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "5+", label: "Years Experience", desc: "Big Data & Analytics" },
  { icon: Cpu, value: "JVM", label: "Specialist", desc: "Java • Spring • Kotlin" },
  { icon: Cloud, value: "Cloud", label: "Enthusiast", desc: "Docker • Kubernetes" },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>About</SectionLabel>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Engineer focused on <span className="text-gradient">scale and reliability</span>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              I'm a software engineer with five years of experience in the Big Data &amp;
              Analytics industry. I work across the stack with a strong bias toward JVM
              technologies, backend systems, and cloud-native infrastructure.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              I care about clean APIs, observability, and systems that don't surprise you
              at 3 a.m. — from identity platforms to large-scale data pipelines.
            </p>
          </div>
          <div className="grid gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="group relative p-6 rounded-xl border border-border bg-card/60 hover:bg-card transition-all hover:-translate-y-0.5"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-brand/10 border border-border flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-gradient">{s.value}</span>
                      <span className="text-sm font-medium">{s.label}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-0.5">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 mb-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
      <span className="w-8 h-px bg-gradient-brand" />
      {children}
    </div>
  );
}
