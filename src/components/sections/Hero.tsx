import { ArrowRight, Mail } from "lucide-react";

const badges = [
  { name: "Java", className: "top-[10%] left-[8%]" },
  { name: "Spring Boot", className: "top-[18%] right-[10%]" },
  { name: "Docker", className: "top-[42%] left-[4%]" },
  { name: "Kubernetes", className: "top-[55%] right-[6%]" },
  { name: "Laravel", className: "bottom-[20%] left-[12%]" },
  { name: "Django", className: "bottom-[12%] right-[14%]" },
  { name: "PostgreSQL", className: "top-[30%] left-[18%]" },
  { name: "Keycloak", className: "bottom-[34%] right-[20%]" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.18),transparent_60%)]" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-brand-purple/20 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-cyan/20 blur-[120px]" />

      {/* Floating badges */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        {badges.map((b, i) => (
          <div
            key={b.name}
            className={`absolute ${b.className} animate-float`}
            style={{ animationDelay: `${i * 0.4}s`, animationDuration: `${5 + (i % 3)}s` }}
          >
            <div className="px-4 py-2 rounded-full border border-border bg-card/60 backdrop-blur-md text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all">
              {b.name}
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/40 backdrop-blur-md text-xs text-muted-foreground mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for new opportunities
        </div>
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Yulianto — Software Engineer
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
          Building <span className="text-gradient">Scalable Systems</span>,
          <br />
          <span className="text-gradient">Cloud-Native</span> Applications,
          <br />
          and <span className="text-gradient">JVM-Powered</span> Solutions
        </h1>
        <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
          5 years engineering Big Data &amp; Analytics platforms. Backend, cloud, and
          identity systems built to scale.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-brand text-white font-medium shadow-[0_0_40px_-10px_rgba(147,51,234,0.6)] hover:shadow-[0_0_60px_-10px_rgba(147,51,234,0.9)] transition-all hover:-translate-y-0.5"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border bg-card/40 backdrop-blur-md hover:bg-accent hover:border-foreground/40 transition-all"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
