import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <span className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center text-white">
            Y
          </span>
          <span className="hidden sm:inline">Yulianto</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-sm px-4 py-2 rounded-lg border border-border hover:border-foreground/40 hover:bg-accent transition-all"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
