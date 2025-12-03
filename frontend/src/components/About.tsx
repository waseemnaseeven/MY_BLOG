import { Code2, Cloud, Shield, Cpu, Trophy, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export function About() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText =
    "Backend Golang & AWS Cloud DevOps expert. I design and deploy robust, scalable, and highly secured microservices architectures. Passionate about DevOps automation, cybersecurity, and infrastructure-as-code best practices.";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const expertise = [
    {
      icon: Code2,
      title: "Backend Developer",
      description: "Building robust microservices with Golang (primary) and Node.js. Expertise in CLI tools, gRPC communication, REST APIs, and event-driven architectures.",
    },
    {
      icon: Cloud,
      title: "AWS Cloud Practitioner",
      description: "Designing and deploying cloud infrastructure using Infrastructure as Code. Proficient with Terraform, CloudFormation, and AWS services (EKS, Lambda, RDS, S3).",
    },
    {
      icon: Shield,
      title: "DevSecOps Culture",
      description: "Implementing secure CI/CD pipelines and containerized architectures. Hands-on experience with Docker, Kubernetes (K8s/K3s), and automated security scanning.",
    },
    {
      icon: Cpu,
      title: "Low-Level Programming",
      description: "Deep understanding of systems programming with Shell scripting, kernel programming fundamentals, and memory management optimization.",
    },
  ];

  const achievements = [
    { platform: "CodeWars", rank: "3 kyu", color: "neon-cyan" },
    { platform: "CodinGame", rank: "Gold League", color: "neon-yellow" },
    { platform: "Root-Me", rank: "Top 5%", color: "neon-orange" },
    { platform: "HackTheBox", rank: "Pro Hacker", color: "neon-magenta" },
  ];

  const certifications = [
    { name: "AWS Cloud Practitioner", status: "certified" },
    { name: "42 System & Network Architect", status: "incoming" },
    { name: "Golang Codingame", status: "incoming" },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(var(--neon-orange) 1px, transparent 1px), linear-gradient(90deg, var(--neon-cyan) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Cyberpunk Terminal Header */}
          <div className="mb-12 relative group">
            {/* Glowing corners */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-[var(--neon-cyan)] opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-r-4 border-t-4 border-[var(--neon-orange)] opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative border border-[var(--neon-cyan)]/50 bg-gradient-to-br from-card/80 via-card/50 to-card/80 backdrop-blur-md shadow-2xl shadow-[var(--neon-cyan)]/10 overflow-hidden">
              {/* Scan line effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--neon-cyan)]/5 to-transparent animate-pulse pointer-events-none"></div>
              
              {/* Terminal top bar */}
              <div className="relative border-b border-[var(--neon-cyan)]/30 px-4 py-3 bg-gradient-to-r from-[var(--neon-cyan)]/5 via-transparent to-[var(--neon-orange)]/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 border border-red-600 shadow-lg shadow-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 border border-yellow-600 shadow-lg shadow-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500 border border-green-600 shadow-lg shadow-green-500/50"></div>
                    </div>
                    <div className="h-4 w-px bg-[var(--neon-cyan)]/30 mx-2"></div>
                    <span className="font-mono text-sm text-[var(--neon-cyan)]">
                      wnaseeve<span className="text-muted-foreground">@</span><span className="text-[var(--neon-orange)]">42.42.42.42</span>
                    </span>
                  </div>
                  <div className="hidden md:flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-1 border border-green-500/30 bg-green-500/10 rounded-sm">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></span>
                      <span className="font-mono text-xs text-green-400">ONLINE</span>
                    </div>
                    <div className="font-mono text-xs text-muted-foreground">
                      <span className="text-[var(--neon-cyan)]">uptime:</span> ∞
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Terminal content */}
              <div className="relative p-8 font-mono space-y-6">
                {/* Command prompt */}
                <div className="flex items-center gap-3 group/cmd">
                  <span className="text-[var(--neon-cyan)]">~</span>
                  <span className="text-foreground">whoami</span>
                  <div className="w-2 h-4 bg-[var(--neon-cyan)] animate-pulse ml-1"></div>
                </div>
                
                {/* Output */}
                <div className="ml-6 space-y-4 pl-4 border-l-2 border-[var(--neon-orange)]/30">
                  <div className="flex items-baseline gap-4">
                    <span className="text-[var(--neon-orange)] text-xs">USER:</span>
                    <h1 className="text-3xl bg-gradient-to-r from-[var(--neon-cyan)] via-[var(--neon-magenta)] to-[var(--neon-orange)] bg-clip-text text-transparent neon-glow">
                      Waseem NASEEVEN
                    </h1>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="text-[var(--neon-orange)] text-xs">ROLE:</span>
                    <p className="text-lg text-[var(--neon-cyan)]">
                      Backend Golang & DevOps Cloud AWS Specialist
                    </p>
                  </div>
                  <div className="flex items-start gap-4 pt-2">
                    <span className="text-[var(--neon-orange)] text-xs">INFO:</span>
                    <div className="flex gap-4 flex-wrap text-xs">
                      <span className="px-2 py-1 border border-[var(--neon-cyan)]/30 bg-[var(--neon-cyan)]/5 text-[var(--neon-cyan)]">
                        <Zap className="w-3 h-3 inline mr-1" />42 School
                      </span>
                      <span className="px-2 py-1 border border-[var(--neon-magenta)]/30 bg-[var(--neon-magenta)]/5 text-[var(--neon-magenta)]">
                        Paris, FR
                      </span>
                      <span className="px-2 py-1 border border-[var(--neon-yellow)]/30 bg-[var(--neon-yellow)]/5 text-[var(--neon-yellow)]">
                        Remote Ready
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent opacity-50"></div>
            </div>

            {/* Bottom corners */}
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-4 border-b-4 border-[var(--neon-magenta)] opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-[var(--neon-yellow)] opacity-50 group-hover:opacity-100 transition-opacity"></div>
          </div>

          {/* Full width presentation with typing effect - improved typography */}
          <div className="mb-12">
            <div className="relative border-l-4 border-[var(--neon-orange)] pl-8 py-6 bg-gradient-to-r from-card/30 via-transparent to-transparent backdrop-blur-sm">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--neon-orange)] via-[var(--neon-magenta)] to-[var(--neon-cyan)] opacity-50"></div>
              <p className="text-xl leading-relaxed" style={{ fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif", letterSpacing: '0.02em' }}>
                {displayedText}
                <span className="inline-block w-3 h-6 bg-[var(--neon-orange)] ml-2 animate-pulse shadow-lg shadow-[var(--neon-orange)]/50"></span>
              </p>
            </div>
          </div>

          {/* Two columns layout - Core Expertise & Achievements/Certifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column - Core Expertise */}
            <div className="space-y-6">
              <div className="border-b-2 border-[var(--neon-orange)]/50 pb-2 mb-6">
                <h3 className="font-mono text-[var(--neon-orange)]">
                  {"</>"} Core Expertise
                </h3>
              </div>
              {expertise.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="group relative border-2 border-[var(--neon-cyan)]/30 bg-card/30 backdrop-blur-sm p-6 hover:border-[var(--neon-orange)] transition-all duration-300"
                  >
                    {/* Corner decorations */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[var(--neon-cyan)] group-hover:border-[var(--neon-orange)] transition-colors"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[var(--neon-cyan)] group-hover:border-[var(--neon-orange)] transition-colors"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[var(--neon-cyan)] group-hover:border-[var(--neon-orange)] transition-colors"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[var(--neon-cyan)] group-hover:border-[var(--neon-orange)] transition-colors"></div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 border border-[var(--neon-cyan)]/50 bg-[var(--neon-cyan)]/5 group-hover:border-[var(--neon-orange)] group-hover:bg-[var(--neon-orange)]/10 transition-all duration-300 shrink-0">
                        <Icon className="w-6 h-6 text-[var(--neon-cyan)] group-hover:text-[var(--neon-orange)] transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-mono mb-2 text-[var(--neon-cyan)] group-hover:text-[var(--neon-orange)] transition-colors">
                          {skill.title}
                        </h3>
                        <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover effect glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-orange)]/0 to-[var(--neon-orange)]/0 group-hover:from-[var(--neon-orange)]/5 group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
                  </div>
                );
              })}
            </div>

            {/* Right column - Achievements, Certifications & Tools */}
            <div className="space-y-6 flex flex-col">
              {/* Achievements/Rankings */}
              <div className="border border-[var(--neon-magenta)]/50 bg-card/30 backdrop-blur-sm">
                <div className="border-b border-[var(--neon-magenta)]/50 px-4 py-2 bg-[var(--neon-magenta)]/5">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-[var(--neon-orange)]" />
                    <span className="font-mono text-sm text-[var(--neon-magenta)]">
                      rankings.json
                    </span>
                  </div>
                </div>
                <div className="p-4 font-mono text-sm space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center justify-between group/item hover:bg-[var(--neon-magenta)]/5 p-2 -m-2 transition-colors">
                      <span className="text-muted-foreground">{achievement.platform}</span>
                      <span className={`px-2 py-1 border border-[var(--${achievement.color})]/50 bg-[var(--${achievement.color})]/10 text-[var(--${achievement.color})] text-xs`}>
                        {achievement.rank}
                      </span>
                    </div>
                  ))}
                  <div className="pt-2 border-t border-[var(--neon-magenta)]/30 text-xs text-muted-foreground flex items-center gap-2">
                    <Zap className="w-3 h-3 text-[var(--neon-yellow)]" />
                    <span>API integration coming soon...</span>
                  </div>
                </div>
              </div>

              {/* Certifications terminal */}
              <div className="border border-[var(--neon-cyan)]/50 bg-card/30 backdrop-blur-sm">
                <div className="border-b border-[var(--neon-cyan)]/50 px-4 py-2 bg-[var(--neon-cyan)]/5">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[var(--neon-orange)]" />
                    <span className="font-mono text-sm text-[var(--neon-cyan)]">
                      certifications.log
                    </span>
                  </div>
                </div>
                <div className="p-4 font-mono text-sm space-y-2">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className={cert.status === "certified" ? "text-green-500" : "text-yellow-500"}>
                        {cert.status === "certified" ? "✓" : "⏳"}
                      </span>
                      <span className="text-muted-foreground flex-1">{cert.name}</span>
                      <span className="text-[var(--neon-orange)] text-xs">
                        [{cert.status}]
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools terminal */}
              <div className="border border-[var(--neon-yellow)]/50 bg-card/30 backdrop-blur-sm flex-1 flex flex-col">
                <div className="border-b border-[var(--neon-yellow)]/50 px-4 py-2 bg-[var(--neon-yellow)]/5">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-[var(--neon-orange)]" />
                    <span className="font-mono text-sm text-[var(--neon-yellow)]">
                      tools.sh
                    </span>
                  </div>
                </div>
                <div className="p-4 flex-1 flex items-center">
                  <div className="flex flex-wrap gap-2 content-start">
                    {[
                      "Golang",
                      "Node.js",
                      "AWS",
                      "Docker",
                      "Kubernetes",
                      "K3s",
                      "Terraform",
                      "GitHub Actions",
                      "PostgreSQL",
                      "Redis",
                      "gRPC",
                      "Prometheus",
                      "Grafana",
                      "Vault",
                      "Shell",
                    ].map((tech, index) => (
                      <span
                        key={index}
                        className="font-mono text-xs px-3 py-1 border border-[var(--neon-yellow)]/50 bg-[var(--neon-yellow)]/10 hover:bg-[var(--neon-yellow)]/20 hover:border-[var(--neon-yellow)] transition-all duration-300 cursor-pointer"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-20 left-4 w-24 h-24 border-l-2 border-t-2 border-[var(--neon-orange)]/20"></div>
      <div className="absolute bottom-20 right-4 w-24 h-24 border-r-2 border-b-2 border-[var(--neon-cyan)]/20"></div>
    </section>
  );
}
