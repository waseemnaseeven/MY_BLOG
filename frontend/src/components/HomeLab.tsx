import { Github, Terminal, Play, ExternalLink } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

/**
 * ========================================
 * PROJECT TYPE DEFINITION
 * ========================================
 */
export interface Project {
  id: string;              // Unique ID (e.g., "001", "002")
  title: string;           // Project name
  description: string;     // Brief description of what it does
  technologies: string[];  // Array of tech stack items
  githubUrl: string;       // Link to GitHub repository
  demoUrl?: string;        // OPTIONAL: Link to live demo/interactive version
  status: "In Development" | "Completed" | "Maintenance";
}

/**
 * ========================================
 * LOW-LEVEL PROGRAMMING PROJECTS
 * ========================================
 * Add your C, C++, Assembly, systems programming projects here
 */
const lowLevelProjects: Project[] = [
  {
    id: "001",
    title: "Tarnished",
    description: "An x86 Kernel from scratch written in Rust... So far, i've coded the bootloader, the Global Descriptor Table and the Interrupts Descriptor table, i've to do memory management. A very long journey...",
    technologies: ["Rust", "Kernel", "Bootloader", "GRUB", "GDT", "Interrupts", "Memory Management"],
    githubUrl: "https://github.com/waseemnaseeven/Tarnished",
    demoUrl: "demo1",
    status: "In Development",
  },
  {
    id: "002",
    title: "Cub_3D",
    description: "Small 3D video game inspired by Wolfenstein 3D that leverages raycasting to create a sense of tridimensionality. Written in C using 42's own graphical API miniLibX.",
    technologies: ["C", "RayCasting", "Parsing", "Stripes", "Algorithms", "Graphics"],
    githubUrl: "https://github.com/waseemnaseeven/42_CURSUS/tree/main/12_CUB3D",
    demoUrl: "https://github.com/waseemnaseeven/42_CURSUS/blob/main/12_CUB3D/cub.gif",
    status: "Completed",
  },
  {
    id: "003",
    title: "IRC Server",
    description: "My own Internet Relay Chat Server compatible with standard IRC client for the required features.",
    technologies: ["C++", "Unix", "Network", "Parsing", "RFC", "Object Oriented"],
    githubUrl: "https://github.com/waseemnaseeven/42_CURSUS/tree/main/16_IRC",
    status: "Completed",
  },
  // ADD MORE LOW-LEVEL PROJECTS HERE
  // {
  //   id: "003",
  //   title: "Your Project Name",
  //   description: "What your project does",
  //   technologies: ["C", "C++", "Assembly", "etc"],
  //   githubUrl: "https://github.com/yourusername/project-name",
  //   demoUrl: "https://demo-url.com", // OPTIONAL - remove if no demo
  //   status: "In Development", // or "Completed" or "Maintenance"
  // },
];

/**
 * ========================================
 * GOLANG PROJECTS
 * ========================================
 * Add your Go backend, microservices, and API projects here
 */
const golangProjects: Project[] = [
  {
    id: "001",
    title: "x509-watch",
    description: "Golang CLI x509 certificates exporter to expose expiry dates",
    technologies: ["Golang", "CLI", "Vault", "Docker", "Prometheus", "AlertManager", "Observability"],
    githubUrl: "https://github.com/waseemnaseeven/x509-watch",
    demoUrl: "https://example.com/demo1",
    status: "Maintenance",
  },
  {
    id: "002",
    title: "GoTrade",
    description: "Bot for predictive market like Polymarket, Kalshi...",
    technologies: ["Golang", "Blockchain", "API", "gRPC"],
    githubUrl: "https://github.com/waseemnaseeven/api-gateway",
    status: "In Development",
  },
  {
    id: "003",
    title: "MCP Local Registry",
    description: "My way to collect MCPs server for MCPs client...",
    technologies: ["Golang", "AI Agents", "MCP", ],
    githubUrl: "https://github.com/waseemnaseeven/api-gateway",
    status: "Maintenance",
  },
  {
    id: "004",
    title: "GomeOfLife",
    description: "Game of Life is a captivating turn-based simulation devised by mathematician John Conway in the 1970s.",
    technologies: ["Golang", "Ebiten"],
    githubUrl: "https://github.com/waseemnaseeven/api-gateway",
    demoUrl: "https://example.com/demo2",
    status: "Completed",
  },
  {
    id: "005",
    title: "Sugoku Solver",
    description: "My own sudoku solver",
    technologies: ["Golang", ""],
    githubUrl: "https://github.com/waseemnaseeven/api-gateway",
    demoUrl: "https://example.com/demo2",
    status: "Completed",
  },
  // ADD MORE GOLANG PROJECTS HERE
  // {
  //   id: "003",
  //   title: "Your Go Project",
  //   description: "Description of your project",
  //   technologies: ["Golang", "PostgreSQL", "Docker", "etc"],
  //   githubUrl: "https://github.com/yourusername/go-project",
  //   demoUrl: "https://demo-url.com", // OPTIONAL
  //   status: "Completed",
  // },
];

/**
 * ========================================
 * CYBERSECURITY PROJECTS
 * ========================================
 * Add your security, pentesting, and vulnerability research projects here
 */
const cyberSecurityProjects: Project[] = [
  {
    id: "001",
    title: "Rainfall",
    description: "Rainfall is an ISO challenge slightly more complex. I've dived deep into reverse engineering, learned to reconstruct a code, and understand it to detect faults.",
    technologies: ["Buffer Overflow", "String Format Attack", "Python", "CyberSecurity", "Binary Exploitation", "Unix"],
    githubUrl: "https://github.com/waseemnaseeven/42_DevSecOps/blob/main/27_RAINFALL/level0/walkthrough_00.md",
    status: "Completed",
  },
  {
    id: "002",
    title: "Override",
    description: "Override is last ISO that i had to search for faults present in the protected binaries, and re-build these binaries depending on their behavior.",
    technologies: ["Python", "Cybersecurity", "Unix", "Ret2libc", "String Format Attack", "Buffer Overflow"],
    githubUrl: "https://github.com/waseemnaseeven/42_DevSecOps/blob/main/28_OVERRIDE/level00/walkthrough_00.md",
    status: "Completed",
  },
  {
    id: "003",
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet.",
    technologies: ["Lorem ipsum dolor sit amet"],
    githubUrl: "https://github.com/waseemnaseeven/container-security",
    status: "In Development",
  },
  // ADD MORE CYBERSECURITY PROJECTS HERE
  // {
  //   id: "003",
  //   title: "Your Security Project",
  //   description: "What it does for security",
  //   technologies: ["Python", "Kali", "Metasploit", "etc"],
  //   githubUrl: "https://github.com/yourusername/security-tool",
  //   status: "Completed",
  // },
];

/**
 * ========================================
 * DEVOPS PROJECTS
 * ========================================
 * Add your infrastructure, CI/CD, and automation projects here
 */
const devOpsProjects: Project[] = [
  {
    id: "001",
    title: "Monitoring & Observability Metrics Stack",
    description: "Complete monitoring stack with metrics collection and intelligent alerting for cloud infrastructure.",
    technologies: ["Prometheus", "Loki", "Grafana", "AlertManager", "Thanos", "Node-Exporter"],
    githubUrl: "https://github.com/waseemnaseeven/monitoring-stack",
    status: "Completed",
  },
  {
    id: "002",
    title: "OpenVPN && Hashicorp Vault",
    description: "Terraform templates to provision complete AWS infrastructure: VPC, ECS, RDS, CloudFront. CI/CD with GitHub Actions.",
    technologies: ["Terraform", "Jenkins", "AWS", "GCP", "Docker", "SonarQube", "Vault"],
    githubUrl: "https://github.com/waseemnaseeven/aws-terraform",
    status: "Maintenance",
  },
  {
    id: "003",
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet",
    technologies: ["Lorem ipsum dolor sit amet"],
    githubUrl: "https://github.com/waseemnaseeven/cicd-pipeline",
    status: "Maintenance",
  },
  // ADD MORE DEVOPS PROJECTS HERE
  // {
  //   id: "004",
  //   title: "Your DevOps Project",
  //   description: "Infrastructure or automation project",
  //   technologies: ["Kubernetes", "Helm", "ArgoCD", "etc"],
  //   githubUrl: "https://github.com/yourusername/devops-project",
  //   demoUrl: "https://demo-url.com", // OPTIONAL
  //   status: "In Development",
  // },
];

type ProjectCategory = "low-level" | "golang" | "cybersecurity" | "devops";

export function HomeLab() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("golang");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: "golang" as ProjectCategory, label: "Golang", projects: golangProjects },
    { id: "devops" as ProjectCategory, label: "DevOps", projects: devOpsProjects },
    { id: "low-level" as ProjectCategory, label: "Low-Level", projects: lowLevelProjects },
    { id: "cybersecurity" as ProjectCategory, label: "Cybersecurity", projects: cyberSecurityProjects },
  ];

  const currentProjects = categories.find(cat => cat.id === activeCategory)?.projects || [];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "var(--neon-cyan)";
      case "In Development":
        return "var(--neon-yellow)";
      case "Maintenance":
        return "var(--neon-violet)";
      default:
        return "var(--neon-cyan)";
    }
  };

  return (
    <section id="homelab" className="min-h-screen py-12 sm:py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--neon-cyan)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--neon-violet)]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <div className="inline-block">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--neon-violet)]"></div>
                <span className="font-mono text-sm text-[var(--neon-violet)]">HOMELAB</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--neon-violet)]"></div>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono text-[var(--neon-cyan)]">
              PROJECTS & EXPERIMENTS
            </h2>
            
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Interactive demos and source code for my projects across different domains
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-4 sm:px-6 py-2.5 font-mono text-xs sm:text-sm transition-all duration-300 border-2 ${
                  activeCategory === category.id
                    ? "border-[var(--neon-cyan)] text-[var(--neon-cyan)] bg-[var(--neon-cyan)]/10"
                    : "border-[var(--neon-cyan)]/30 text-foreground/60 hover:border-[var(--neon-cyan)]/60 hover:text-[var(--neon-cyan)]"
                }`}
              >
                <span className="relative z-10">{category.label}</span>
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-[var(--neon-cyan)]/5"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
            >
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Main Card */}
                  <div className="relative border-2 border-[var(--neon-cyan)]/30 bg-black/60 backdrop-blur-sm overflow-hidden hover:border-[var(--neon-cyan)] transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--neon-cyan)]/20">
                    
                    {/* Header with Terminal Icon and Project Number */}
                    <div className="relative border-b-2 border-[var(--neon-cyan)]/30 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-[var(--neon-cyan)]/5 via-transparent to-[var(--neon-violet)]/5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-[var(--neon-cyan)] bg-black flex items-center justify-center group-hover:border-[var(--neon-violet)] transition-colors">
                            <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--neon-cyan)] group-hover:text-[var(--neon-violet)] transition-colors" />
                          </div>
                          <div className="h-4 w-px bg-[var(--neon-cyan)]/30 mx-2"></div>
                          <span className="font-mono text-sm text-foreground/80">
                            <span className="text-[var(--neon-cyan)]">project</span>
                            <span className="text-muted-foreground">-</span>
                            <span className="text-[var(--neon-violet)]">{project.id}</span>
                          </span>
                        </div>
                        
                        {/* Status Badge */}
                        <div 
                          className="flex items-center gap-2 px-2 sm:px-3 py-1 border rounded-sm"
                          style={{ 
                            borderColor: `${getStatusColor(project.status)}50`,
                            backgroundColor: `${getStatusColor(project.status)}10`
                          }}
                        >
                          <span 
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ 
                              backgroundColor: getStatusColor(project.status),
                              boxShadow: `0 0 10px ${getStatusColor(project.status)}`
                            }}
                          ></span>
                          <span 
                            className="font-mono text-[10px] sm:text-xs"
                            style={{ color: getStatusColor(project.status) }}
                          >
                            {project.status.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6 space-y-4">
                      <div className="space-y-3">
                        <h3 className="text-lg sm:text-xl font-mono text-[var(--neon-cyan)] group-hover:text-[var(--neon-violet)] transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="font-mono text-xs px-2 py-1 border border-[var(--neon-cyan)]/30 text-[var(--neon-cyan)]/80 hover:border-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)]/5 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4 border-t border-[var(--neon-cyan)]/30">
                        {/* GitHub Button */}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-[var(--neon-cyan)]/50 text-[var(--neon-cyan)] hover:border-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)]/10 transition-all font-mono text-xs sm:text-sm"
                        >
                          <Github className="w-4 h-4" />
                          <span className="hidden sm:inline">GitHub</span>
                        </a>
                        
                        {/* Demo Button (conditional) */}
                        {project.demoUrl ? (
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-[var(--neon-violet)] text-[var(--neon-violet)] hover:bg-[var(--neon-violet)] hover:text-black transition-all font-mono text-xs sm:text-sm group/btn"
                          >
                            <Play className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                            <span>Try Demo</span>
                          </button>
                        ) : (
                          <div className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-foreground/20 text-foreground/40 font-mono text-xs sm:text-sm cursor-not-allowed">
                            <span>No Demo</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Mirror/Reflection effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--neon-cyan)]/0 via-[var(--neon-cyan)]/0 to-[var(--neon-cyan)]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-60 pointer-events-none transition-opacity"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Demo Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 cursor-pointer"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed inset-4 sm:inset-10 lg:inset-20 z-50 flex flex-col"
            >
              <div className="relative flex-1 border-2 border-[var(--neon-cyan)] bg-black shadow-2xl shadow-[var(--neon-cyan)]/30 overflow-hidden flex flex-col">
                {/* Modal Header */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b-2 border-[var(--neon-cyan)]/30 bg-gradient-to-r from-[var(--neon-cyan)]/10 to-transparent">
                  <div className="flex items-center gap-3">
                    <Terminal className="w-5 h-5 text-[var(--neon-cyan)]" />
                    <div>
                      <h3 className="font-mono text-sm sm:text-base text-[var(--neon-cyan)]">
                        {selectedProject.title}
                      </h3>
                      <p className="font-mono text-xs text-foreground/60">
                        Interactive Demo
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:flex items-center gap-2 px-3 py-1.5 border border-[var(--neon-cyan)]/50 text-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)]/10 transition-all font-mono text-xs"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Open in New Tab
                    </a>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-3 py-1.5 border-2 border-[var(--neon-violet)] text-[var(--neon-violet)] hover:bg-[var(--neon-violet)] hover:text-black transition-all font-mono text-xs sm:text-sm"
                    >
                      Close
                    </button>
                  </div>
                </div>

                {/* iframe container */}
                <div className="flex-1 relative bg-black/50">
                  <iframe
                    src={selectedProject.demoUrl}
                    className="w-full h-full border-none"
                    title={`${selectedProject.title} Demo`}
                    sandbox="allow-scripts allow-same-origin allow-forms"
                  />
                  
                  {/* Loading overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/80 pointer-events-none">
                    <div className="text-[var(--neon-cyan)] font-mono text-sm animate-pulse">
                      Loading demo...
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}