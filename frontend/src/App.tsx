import { Header } from "./components/Header";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--dark-bg)] text-foreground relative overflow-x-hidden">
      {/* Cyberpunk background grid */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(var(--neon-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--neon-cyan) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      {/* Scan line effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <div
          className="absolute w-full h-1 bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent"
          style={{
            animation: "scan-line 8s linear infinite",
          }}
        ></div>
      </div>

      {/* Vignette effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[var(--dark-bg)]"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Header />

        <main>
          <About />
          <Projects />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="border-t border-[var(--neon-cyan)]/30 py-8 relative">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center">
              <div className="font-mono text-sm text-muted-foreground">
                <span className="text-[var(--neon-cyan)]">&copy;</span> 2025 Waseem NASEEVEN
              </div>
            </div>
          </div>

          {/* Decorative line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent"></div>
        </footer>
      </div>

      {/* Toaster for notifications */}
      <Toaster />
    </div>
  );
}