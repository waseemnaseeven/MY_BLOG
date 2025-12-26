import { useState } from "react";
import { Code2, Cloud, Shield, Terminal, Trophy, Target, Calendar, Award, ExternalLink, MapPin, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

const expertises = [
  {
    icon: Code2,
    title: "Backend Dev",
    description: "I can build scalable microservices, CLI and APIs and other stuff with Go, this is my main techno i use.",
    color: "cyan"
  },
  {
    icon: Terminal,
    title: "Low Level Programming",
    description: "I've coded and learn algorithms with C/C++ but i mainly code in Rust now and i'm always trying to know more about how computer works.",
    color: "violet"
  },
  {
    icon: Cloud,
    title: "Cloud && DevSecOps",
    description: "AWS infrastructure, Kubernetes orchestration, and cloud-native solutions with OpenTofu Iac, config management with Ansible, CI/CD pipelines.",
    color: "yellow"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "I did some binaries reverse engineering with core vulnerability classes like buffer overflows and format strings using real debugging and tooling workflows.",
    color: "cyan"
  }
];

/**
 * ========================================
 * CHALLENGES & COMPETITIONS
 * ========================================
 * Add your hackathons, competitions, and challenges here.
 * Each entry should have:
 * - title: Name of the event
 * - rank: Your placement (e.g., "1st Place", "Top 10%")
 * - date: When it happened
 * - location: Where it took place (can be "Remote")
 * - description: Brief description of what you did/built
 * - color: "cyan", "violet", or "yellow" for theme color
 */
const challenges = [
  {
    title: "Hackaton HackTheFork",
    rank: "",
    date: "December 2025",
    location: "Paris, France",
    description: "Plant-based Solutions...",
    color: "violet"
  },
  {
    title: "TRACS 2024",
    rank: "",
    date: "December 2024",
    location: "Paris, France",
    description: "Reverse Engineering, Pwn, DataScience, Stenography...",
    color: "cyan"
  },
  // ADD MORE CHALLENGES HERE
  // {
  //   title: "Your Competition Name",
  //   rank: "Your Placement",
  //   date: "Month Year",
  //   location: "City or Remote",
  //   description: "What you built or accomplished",
  //   color: "cyan" // or "violet" or "yellow"
  // },
];

/**
 * ========================================
 * PLATFORM RANKS
 * ========================================
 * Add your rankings on various platforms here.
 * Each entry should have:
 * - platform: Name of the platform
 * - rank: Your current rank/level
 * - date: When you started or "Present"
 * - notes: Additional context about your achievements
 * - link: URL to your profile (make sure it's public)
 * - color: "cyan", "violet", or "yellow" for theme color
 */
const platformRanks = [
  {
    platform: "42 School Paris",
    rank: "Level 18.69",
    date: "2022 - Present",
    notes: "",
    link: "https://profile.intra.42.fr/users/wnaseeve",
    color: "cyan"
  },
  {
    platform: "Codewars",
    rank: "5 kyu",
    date: "2022 - Present",
    notes: "I did some for technical challenges and still know how to do algorithms",
    link: "https://www.codewars.com/users/waseemnaseeven",
    color: "violet"
  },
  {
    platform: "CodinGame",
    rank: "Level 9",
    date: "2022 - Present",
    notes: "I did some for challenges like winter/summer challenges",
    link: "https://www.codingame.com/profile/6f94f06875ea2e8df12a46fadac8c3041259274",
    color: "violet"
  },
  {
    platform: "HackTheBox",
    rank: "Noob hahah",
    date: "2022 - Present",
    notes: "When i'll have the time",
    link: "https://app.hackthebox.com/home",
    color: "cyan"
  },
  // ADD MORE PLATFORM RANKS HERE
  // {
  //   platform: "Platform Name",
  //   rank: "Your Rank/Level",
  //   date: "Start - End or Present",
  //   notes: "Description of your achievements and specializations",
  //   link: "https://platform.com/your-profile",
  //   color: "cyan" // or "violet" or "yellow"
  // },
];

export function About() {
  const [activeTab, setActiveTab] = useState<"story" | "achievements">("story");

  return (
    <section id="about" className="min-h-screen py-24 sm:py-32 relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--neon-cyan)]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--neon-violet)]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <div className="inline-block">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--neon-cyan)]"></div>
                <span className="font-mono text-sm text-[var(--neon-cyan)]">ABOUT.ME</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--neon-cyan)]"></div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-mono">
              <span className="text-[var(--neon-cyan)]">WASEEM</span>{" "}
              <span className="text-[var(--neon-violet)]">NASEEVEN</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto font-mono">
              DevOps / SRE && Backend Golang 
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-4"
          >
            <button
              onClick={() => setActiveTab("story")}
              className={`relative px-6 sm:px-8 py-3 font-mono text-sm sm:text-base transition-all duration-300 border-2 ${
                activeTab === "story"
                  ? "border-[var(--neon-cyan)] text-[var(--neon-cyan)] bg-[var(--neon-cyan)]/10"
                  : "border-[var(--neon-cyan)]/30 text-foreground/60 hover:border-[var(--neon-cyan)]/60 hover:text-[var(--neon-cyan)]"
              }`}
            >
              <span className="relative z-10">MY STORY</span>
              {activeTab === "story" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[var(--neon-cyan)]/5"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
            
            <button
              onClick={() => setActiveTab("achievements")}
              className={`relative px-6 sm:px-8 py-3 font-mono text-sm sm:text-base transition-all duration-300 border-2 ${
                activeTab === "achievements"
                  ? "border-[var(--neon-violet)] text-[var(--neon-violet)] bg-[var(--neon-violet)]/10"
                  : "border-[var(--neon-violet)]/30 text-foreground/60 hover:border-[var(--neon-violet)]/60 hover:text-[var(--neon-violet)]"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                ACHIEVEMENTS
              </span>
              {activeTab === "achievements" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[var(--neon-violet)]/5"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          </motion.div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === "story" && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="space-y-12"
              >
                {/* Story Text */}
                <div className="max-w-4xl mx-auto">
                  <div className="relative border-2 border-[var(--neon-cyan)]/30 bg-black/60 backdrop-blur-sm p-6 sm:p-8">
                    <div className="absolute -top-3 left-6 bg-black px-3">
                      <span className="font-mono text-sm text-[var(--neon-cyan)]">README.md</span>
                    </div>
                    
                    <div className="space-y-6 text-foreground/90 leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                      <p className="text-base sm:text-lg">
                        I'm a former legal counseling convert into 
                        a DevOps / SRE and Backend Golang Developer, I specialize in designing and deploying 
                        <span className="text-[var(--neon-cyan)]"> robust, scalable, and highly secured microservices architectures</span>.
                      </p>
                      
                      <p className="text-base sm:text-lg">
                        My journey in tech started at <span className="text-[var(--neon-violet)]">42 Paris</span>, 
                        where I developed a deep passion for low-level programming and systems architecture. 
                        This foundation has shaped my approach to building efficient, performant applications.
                      </p>
                      
                      <p className="text-base sm:text-lg">
                        I'm passionate about coding solutions, automations... I believe in writing code that not only works but is 
                        maintainable, secure, and optimized for production environments.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Core Expertises */}
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 font-mono text-sm text-[var(--neon-violet)] mb-2">
                      <Target className="w-4 h-4" />
                      CORE EXPERTISES
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {expertises.map((expertise, index) => {
                      const Icon = expertise.icon;
                      const colorClass = expertise.color === "cyan" 
                        ? "var(--neon-cyan)" 
                        : expertise.color === "violet" 
                        ? "var(--neon-violet)" 
                        : "var(--neon-yellow)";
                      
                      return (
                        <motion.div
                          key={expertise.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ 
                            y: -10,
                            scale: 1.05,
                            transition: { type: "spring", stiffness: 300, damping: 15 }
                          }}
                          className="group relative border-2 border-[var(--neon-cyan)]/30 bg-black/60 p-6 hover:border-[var(--neon-cyan)] transition-all duration-300 cursor-pointer overflow-hidden"
                        >
                          {/* Animated corner lines */}
                          <motion.div 
                            className="absolute top-0 left-0 w-0 h-0.5"
                            style={{ backgroundColor: colorClass }}
                            whileHover={{ width: "40px" }}
                            transition={{ duration: 0.3 }}
                          />
                          <motion.div 
                            className="absolute top-0 left-0 w-0.5 h-0"
                            style={{ backgroundColor: colorClass }}
                            whileHover={{ height: "40px" }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          />
                          <motion.div 
                            className="absolute bottom-0 right-0 w-0 h-0.5"
                            style={{ backgroundColor: colorClass }}
                            whileHover={{ width: "40px" }}
                            transition={{ duration: 0.3 }}
                          />
                          <motion.div 
                            className="absolute bottom-0 right-0 w-0.5 h-0"
                            style={{ backgroundColor: colorClass }}
                            whileHover={{ height: "40px" }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          />

                          <div className="space-y-4 relative z-10">
                            <motion.div 
                              className="w-12 h-12 border-2 flex items-center justify-center relative"
                              style={{ borderColor: colorClass }}
                              whileHover={{ 
                                rotate: 360,
                                scale: 1.2,
                                borderWidth: "3px",
                                transition: { type: "spring", stiffness: 200, damping: 10 }
                              }}
                            >
                              <Icon className="w-6 h-6" style={{ color: colorClass }} />
                              
                              {/* Pulsing glow on hover */}
                              <motion.div
                                className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100"
                                style={{ 
                                  boxShadow: `0 0 20px ${colorClass}, 0 0 40px ${colorClass}`,
                                  border: `2px solid ${colorClass}`
                                }}
                                animate={{
                                  scale: [1, 1.1, 1],
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              />
                            </motion.div>
                            
                            <motion.h3 
                              className="font-mono text-lg"
                              style={{ color: colorClass }}
                              whileHover={{ 
                                x: 5,
                                textShadow: `0 0 10px ${colorClass}`,
                                transition: { duration: 0.2 }
                              }}
                            >
                              {expertise.title}
                            </motion.h3>
                            
                            <p className="text-sm text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors">
                              {expertise.description}
                            </p>
                          </div>

                          {/* Diagonal sweep effect */}
                          <motion.div 
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                            style={{ 
                              background: `linear-gradient(135deg, ${colorClass}10, transparent 60%)` 
                            }}
                            initial={{ x: "-100%", y: "-100%" }}
                            whileHover={{ x: "100%", y: "100%" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                          />
                          
                          {/* Grid pattern overlay */}
                          <motion.div 
                            className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none"
                            style={{
                              backgroundImage: `linear-gradient(${colorClass} 1px, transparent 1px), linear-gradient(90deg, ${colorClass} 1px, transparent 1px)`,
                              backgroundSize: "20px 20px",
                            }}
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 0.1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "achievements" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-12"
              >
                {/* Platform Ranks Section - NOW FIRST */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-[var(--neon-cyan)]" />
                    <h3 className="text-xl sm:text-2xl font-mono text-[var(--neon-cyan)]">
                      Platform Rankings
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {platformRanks.map((platform, index) => {
                      const colorClass = platform.color === "cyan" 
                        ? "var(--neon-cyan)" 
                        : platform.color === "violet" 
                        ? "var(--neon-violet)" 
                        : "var(--neon-yellow)";
                      
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          className="group relative border-2 bg-black/60 p-6 hover:scale-[1.02] transition-all duration-300"
                          style={{ borderColor: `${colorClass}50` }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = `0 0 30px rgba(${platform.color === "cyan" ? "0, 217, 255" : platform.color === "violet" ? "139, 92, 246" : "252, 238, 9"}, 0.3)`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        >
                          <div className="space-y-4">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="font-mono text-lg mb-2" style={{ color: colorClass }}>
                                  {platform.platform}
                                </h4>
                                <div className="flex items-center gap-2 text-xs text-foreground/60 mb-2">
                                  <Calendar className="w-3 h-3" />
                                  <span>{platform.date}</span>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="font-mono text-sm px-3 py-1 border rounded-sm" style={{ borderColor: colorClass, color: colorClass }}>
                                  {platform.rank}
                                </div>
                              </div>
                            </div>
                            
                            <p className="text-sm text-foreground/70 leading-relaxed">
                              {platform.notes}
                            </p>

                            {platform.link && (
                              <a
                                href={platform.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-xs font-mono group/link"
                                style={{ color: colorClass }}
                              >
                                <span className="group-hover/link:underline">View Profile</span>
                                <ExternalLink className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                              </a>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Challenges & Competitions Section - NOW SECOND */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-[var(--neon-cyan)]" />
                    <h3 className="text-xl sm:text-2xl font-mono text-[var(--neon-cyan)]">
                      Challenges & Competitions
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    {challenges.map((challenge, index) => {
                      const colorClass = challenge.color === "cyan" 
                        ? "var(--neon-cyan)" 
                        : challenge.color === "violet" 
                        ? "var(--neon-violet)" 
                        : "var(--neon-yellow)";
                      
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          className="group relative border-2 bg-black/60 p-6 hover:scale-[1.01] transition-all duration-300"
                          style={{ borderColor: `${colorClass}50` }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = `0 0 30px rgba(${challenge.color === "cyan" ? "0, 217, 255" : challenge.color === "violet" ? "139, 92, 246" : "252, 238, 9"}, 0.3)`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        >
                          <div className="space-y-4">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <h4 className="font-mono text-lg mb-2" style={{ color: colorClass }}>
                                  {challenge.title}
                                </h4>
                                <div className="flex flex-wrap items-center gap-4 text-xs text-foreground/60 mb-3">
                                  <div className="flex items-center gap-2">
                                    <Trophy className="w-3 h-3" />
                                    <span className="font-mono" style={{ color: colorClass }}>{challenge.rank}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Calendar className="w-3 h-3" />
                                    <span>{challenge.date}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <MapPin className="w-3 h-3" />
                                    <span>{challenge.location}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <p className="text-sm text-foreground/70 leading-relaxed">
                              {challenge.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}