import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "./About";

const projects = [
  {
    title: "Enterprise Identity Management",
    desc: "Centralized SSO and access control platform integrating Keycloak with internal services. OAuth2/OIDC flows, role-based authorization, and audit logging.",
    tags: ["Keycloak", "Spring Boot", "OAuth2", "PostgreSQL"],
  },
  {
    title: "Big Data Analytics Platform",
    desc: "End-to-end analytics platform ingesting, processing, and serving large datasets to internal teams with low-latency dashboards and reporting APIs.",
    tags: ["Java", "Spark", "Kafka", "Kubernetes"],
  },
  {
    title: "ERP Customization Platform",
    desc: "Modular ERP extension layer with custom workflows, integrations, and reporting tailored to industry-specific business processes.",
    tags: ["Laravel", "PostgreSQL", "Redis", "REST API"],
  },
  {
    title: "Cloud Native API Gateway",
    desc: "Self-hosted API gateway handling auth, rate limiting, and observability for a microservices fleet running on Kubernetes.",
    tags: ["Spring Cloud", "Kubernetes", "Docker", "JWT"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Projects</SectionLabel>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-2xl">
          Selected work across <span className="text-gradient">identity, data, and cloud</span>.
        </h2>
        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative p-8 rounded-2xl border border-border bg-card/60 hover:bg-card transition-all hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(147,51,234,0.15),transparent_60%)]" />
              <div className="relative">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <div className="w-9 h-9 rounded-lg border border-border flex items-center justify-center group-hover:bg-gradient-brand group-hover:border-transparent transition-all">
                    <ArrowUpRight className="w-4 h-4 group-hover:text-white transition-colors" />
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-md bg-background/80 border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
