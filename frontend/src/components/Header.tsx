import { Github, Linkedin, Twitter, Briefcase, FileText } from "lucide-react";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--neon-cyan)] bg-[var(--dark-bg)]/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* Terminal icon with 3D effect */}
            <div className="relative group">
              <div className="w-10 h-10 border-2 border-[var(--neon-cyan)] bg-[var(--dark-bg)] flex items-center justify-center relative overflow-hidden">
                <span className="text-[var(--neon-cyan)] font-mono text-lg z-10 group-hover:text-[var(--neon-orange)] transition-colors">&gt;_</span>
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-cyan)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              {/* 3D Shadow effect */}
              <div className="absolute inset-0 border-2 border-[var(--neon-cyan)]/50 translate-x-1 translate-y-1 -z-10 group-hover:border-[var(--neon-orange)]/50 transition-colors"></div>
              <div className="absolute inset-0 border-2 border-[var(--neon-cyan)]/30 translate-x-2 translate-y-2 -z-20 group-hover:border-[var(--neon-orange)]/30 transition-colors"></div>
            </div>
            <span className="font-mono text-[var(--neon-cyan)] hover:text-[var(--neon-orange)] transition-colors">
              WASEEM NASEEVEN
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="font-mono text-sm hover:text-[var(--neon-cyan)] transition-colors relative group"
            >
              <span className="relative z-10">About</span>
              <span className="absolute inset-0 bg-[var(--neon-cyan)]/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="font-mono text-sm hover:text-[var(--neon-cyan)] transition-colors relative group"
            >
              <span className="relative z-10">Projects</span>
              <span className="absolute inset-0 bg-[var(--neon-cyan)]/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="font-mono text-sm hover:text-[var(--neon-cyan)] transition-colors relative group"
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute inset-0 bg-[var(--neon-cyan)]/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </button>
            
            {/* CV Button */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm px-4 py-2 border-2 border-[var(--neon-orange)] text-[var(--neon-orange)] hover:bg-[var(--neon-orange)] hover:text-[var(--dark-bg)] transition-all duration-300 relative group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                CV
              </span>
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-[var(--neon-orange)]/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/waseem-naseeven-b66519192/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-[var(--neon-cyan)] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/waseemnaseeven"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-[var(--neon-cyan)] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.malt.fr/profile/waseemnaseeven"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-[var(--neon-cyan)] transition-colors"
              aria-label="Malt"
            >
              <Briefcase className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/NaseevenW"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-[var(--neon-cyan)] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Neon bottom line effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent opacity-50"></div>
    </header>
  );
}