import { Github, Terminal } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  status: "In Development" | "Completed" | "Maintenance";
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "In Development":
        return "neon-cyan"; // Blue
      case "Completed":
        return "neon-yellow"; // Yellow
      case "Maintenance":
        return "red-500"; // Red
      default:
        return "neon-cyan";
    }
  };

  const getStatusIcon = (status: Project["status"]) => {
    switch (status) {
      case "In Development":
        return "⚡";
      case "Completed":
        return "✓";
      case "Maintenance":
        return "⚙";
      default:
        return "•";
    }
  };

  return (
    <div className="group relative border-2 border-[var(--neon-cyan)]/40 bg-card/50 backdrop-blur-sm hover:border-[var(--neon-orange)] transition-all duration-500 overflow-hidden shadow-lg hover:shadow-[var(--neon-orange)]/30">
      {/* Animated scan line effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--neon-orange)]/20 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-2000"
          style={{
            transitionDuration: '2s'
          }}
        ></div>
      </div>

      {/* Corner decorations with animation - enhanced */}
      <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-[var(--neon-cyan)] group-hover:border-[var(--neon-orange)] group-hover:w-10 group-hover:h-10 transition-all duration-500"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-[var(--neon-cyan)] group-hover:border-[var(--neon-orange)] group-hover:w-10 group-hover:h-10 transition-all duration-500"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-[var(--neon-cyan)] group-hover:border-[var(--neon-orange)] group-hover:w-10 group-hover:h-10 transition-all duration-500"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-[var(--neon-cyan)] group-hover:border-[var(--neon-orange)] group-hover:w-10 group-hover:h-10 transition-all duration-500"></div>

      {/* Enhanced top bar with gradient */}
      <div className="relative z-10 border-b-2 border-[var(--neon-cyan)]/40 group-hover:border-[var(--neon-orange)]/60 transition-colors duration-300 bg-gradient-to-r from-[var(--neon-cyan)]/5 to-[var(--neon-magenta)]/5 group-hover:from-[var(--neon-orange)]/10 group-hover:to-[var(--neon-orange)]/5 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[var(--neon-cyan)] group-hover:text-[var(--neon-orange)] transition-colors" />
            <span className="font-mono text-xs text-muted-foreground">
              project-{project.id}
            </span>
          </div>
          <span
            className={`font-mono text-xs px-2 py-0.5 border ${
              project.status === "In Development" 
                ? "border-[var(--neon-cyan)]/50 bg-[var(--neon-cyan)]/10 text-[var(--neon-cyan)]"
                : project.status === "Completed"
                ? "border-[var(--neon-yellow)]/50 bg-[var(--neon-yellow)]/10 text-[var(--neon-yellow)]"
                : "border-red-500/50 bg-red-500/10 text-red-500"
            } flex items-center gap-1`}
          >
            <span>{getStatusIcon(project.status)}</span>
            {project.status}
          </span>
        </div>
      </div>

      <div className="relative z-10 p-6">
        {/* Title with enhanced styling */}
        <h3 className="font-mono text-xl mb-3 text-[var(--neon-cyan)] group-hover:text-[var(--neon-orange)] transition-colors duration-300 neon-glow">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed min-h-[60px] font-mono">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6 min-h-[32px]">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="font-mono text-xs px-3 py-1 border border-[var(--neon-cyan)]/30 bg-[var(--neon-cyan)]/5 text-foreground/80 hover:border-[var(--neon-orange)] hover:bg-[var(--neon-orange)]/10 hover:text-[var(--neon-orange)] transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions - only GitHub */}
        <div className="flex gap-4 pt-4 border-t-2 border-[var(--neon-cyan)]/20">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 font-mono text-sm px-4 py-2 border-2 border-[var(--neon-cyan)]/50 bg-[var(--neon-cyan)]/5 text-[var(--neon-cyan)] hover:border-[var(--neon-orange)] hover:bg-[var(--neon-orange)]/10 hover:text-[var(--neon-orange)] transition-all duration-300 group/btn relative overflow-hidden"
          >
            <Github className="w-4 h-4 relative z-10" />
            <span className="relative z-10">View Code</span>
            <div className="absolute inset-0 bg-[var(--neon-orange)]/0 group-hover/btn:bg-[var(--neon-orange)]/5 transition-colors duration-300"></div>
          </a>
        </div>
      </div>

      {/* Enhanced glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-cyan)]/0 via-transparent to-[var(--neon-orange)]/0 group-hover:from-[var(--neon-cyan)]/10 group-hover:to-[var(--neon-orange)]/10 transition-all duration-500 pointer-events-none"></div>
      
      {/* Diagonal light effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--neon-orange)] to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(var(--neon-orange) 1px, transparent 1px), linear-gradient(90deg, var(--neon-orange) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>
    </div>
  );
}
