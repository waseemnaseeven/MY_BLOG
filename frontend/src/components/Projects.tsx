import { ProjectCard, Project } from "./ProjectCard";

/**
 * MODIFY YOUR PROJECTS HERE
 * 
 * To add a project: add a new object to the array
 * To remove a project: remove the corresponding object
 * To edit a project: change the object values
 * 
 * Don't forget to update the GitHub URLs with your actual repository links
 */
const PROJECTS: Project[] = [
  {
    id: "001",
    title: "Microservices E-Commerce",
    description:
      "Golang microservices architecture with gRPC, deployed on AWS EKS. Managing catalog, orders and payments with high availability.",
    technologies: ["Golang", "gRPC", "Kubernetes", "AWS EKS", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/waseemnaseeven/project-name", // UPDATE THIS LINK
    status: "In Development",
  },
  {
    id: "002",
    title: "Infrastructure as Code AWS",
    description:
      "Terraform templates to provision complete AWS infrastructure: VPC, ECS, RDS, CloudFront. CI/CD with GitHub Actions.",
    technologies: ["Terraform", "AWS", "GitHub Actions", "Docker", "CloudWatch"],
    githubUrl: "https://github.com/waseemnaseeven/project-name", // UPDATE THIS LINK
    status: "Completed",
  },
  {
    id: "003",
    title: "API Gateway & Service Mesh",
    description:
      "High-performance API Gateway in Go with rate limiting, JWT authentication and monitoring. Integration with Istio service mesh.",
    technologies: ["Golang", "Istio", "Prometheus", "Grafana", "JWT"],
    githubUrl: "https://github.com/waseemnaseeven/project-name", // UPDATE THIS LINK
    status: "Completed",
  },
  {
    id: "004",
    title: "Multi-Cloud CI/CD Pipeline",
    description:
      "Automated pipeline for multi-cloud deployment (AWS, GCP). Automated tests, security scanning and automatic rollback.",
    technologies: ["Jenkins", "AWS", "GCP", "Docker", "SonarQube", "Vault"],
    githubUrl: "https://github.com/waseemnaseeven/project-name", // UPDATE THIS LINK
    status: "Maintenance",
  },
  {
    id: "005",
    title: "Monitoring & Observability Stack",
    description:
      "Complete monitoring stack with metrics collection, centralized logs and intelligent alerting for cloud infrastructure.",
    technologies: ["Prometheus", "Loki", "Grafana", "AlertManager", "OpenTelemetry"],
    githubUrl: "https://github.com/waseemnaseeven/project-name", // UPDATE THIS LINK
    status: "Completed",
  },
  {
    id: "006",
    title: "Serverless Event Processing",
    description:
      "Serverless event processing system on AWS Lambda with Go. Real-time processing with SQS and DynamoDB.",
    technologies: ["Golang", "AWS Lambda", "SQS", "DynamoDB", "EventBridge"],
    githubUrl: "https://github.com/waseemnaseeven/project-name", // UPDATE THIS LINK
    status: "In Development",
  },
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 relative">
      {/* Background effects with orange */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--neon-cyan)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--neon-orange)]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[var(--neon-magenta)]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header with cyberpunk terminal style */}
          <div className="mb-12 relative group">
            {/* Glowing corners */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-[var(--neon-orange)] opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-r-4 border-t-4 border-[var(--neon-magenta)] opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative border border-[var(--neon-orange)]/50 bg-gradient-to-br from-card/80 via-card/50 to-card/80 backdrop-blur-md shadow-2xl shadow-[var(--neon-orange)]/10 overflow-hidden">
              {/* Scan line effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--neon-orange)]/5 to-transparent animate-pulse pointer-events-none"></div>
              
              {/* Terminal top bar */}
              <div className="relative border-b border-[var(--neon-orange)]/30 px-4 py-3 bg-gradient-to-r from-[var(--neon-orange)]/5 via-transparent to-[var(--neon-magenta)]/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 border border-red-600 shadow-lg shadow-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 border border-yellow-600 shadow-lg shadow-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500 border border-green-600 shadow-lg shadow-green-500/50"></div>
                    </div>
                    <div className="h-4 w-px bg-[var(--neon-orange)]/30 mx-2"></div>
                    <span className="font-mono text-sm text-[var(--neon-orange)]">
                      wnaseeve<span className="text-muted-foreground">@</span><span className="text-[var(--neon-cyan)]">42.42.42.42</span>
                    </span>
                  </div>
                  <div className="hidden md:flex items-center gap-2 px-3 py-1 border border-[var(--neon-orange)]/30 bg-[var(--neon-orange)]/10 rounded-sm">
                    <span className="font-mono text-xs text-[var(--neon-orange)]">~/projects</span>
                  </div>
                </div>
              </div>
              
              {/* Terminal content */}
              <div className="relative p-8 font-mono space-y-6">
                {/* Command prompt */}
                <div className="flex items-center gap-3">
                  <span className="text-[var(--neon-cyan)]">~</span>
                  <span className="text-foreground">cat projects.md</span>
                  <div className="w-2 h-4 bg-[var(--neon-orange)] animate-pulse ml-1"></div>
                </div>
                
                {/* Output */}
                <div className="ml-6 pl-4 border-l-2 border-[var(--neon-orange)]/30">
                  <p className="text-muted-foreground leading-relaxed">
                    Discover my latest projects in Backend Golang development and AWS Cloud DevOps.
                    Each project includes complete documentation and deployment instructions.
                  </p>
                </div>
              </div>

              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-orange)] to-transparent opacity-50"></div>
            </div>

            {/* Bottom corners */}
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-4 border-b-4 border-[var(--neon-cyan)] opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-[var(--neon-yellow)] opacity-50 group-hover:opacity-100 transition-opacity"></div>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-12 border-l-2 border-[var(--neon-cyan)]/50 pl-4 py-2">
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-[var(--neon-cyan)]">&gt;</span> All projects are open
              source and available on GitHub with complete documentation
            </p>
          </div>
        </div>
      </div>

      {/* Decorative grid lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--neon-cyan)]/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--neon-magenta)]/30 to-transparent"></div>
    </section>
  );
}