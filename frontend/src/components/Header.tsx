import { Github, Linkedin, Twitter, Briefcase, FileText, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isFreelanceOpen, setIsFreelanceOpen] = useState(false);
  const freelanceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (freelanceRef.current && !freelanceRef.current.contains(event.target as Node)) {
        setIsFreelanceOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-black/98 backdrop-blur-md border-b-2 border-[var(--neon-cyan)] shadow-lg shadow-[var(--neon-cyan)]/10" 
          : "bg-black/95 backdrop-blur-sm border-b-2 border-[var(--neon-cyan)]/50"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo with animation */}
          <motion.div 
            className="flex items-center gap-2 sm:gap-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="relative group cursor-pointer">
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-[var(--neon-cyan)] bg-black flex items-center justify-center relative overflow-visible"
                animate={{ 
                  borderColor: ["var(--neon-cyan)", "var(--neon-violet)", "var(--neon-cyan)"],
                  boxShadow: [
                    "0 0 10px var(--neon-cyan)",
                    "0 0 20px var(--neon-violet)",
                    "0 0 10px var(--neon-cyan)"
                  ],
                  rotate: 360
                }}
                transition={{ 
                  borderColor: {
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  boxShadow: {
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  rotate: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
                whileHover={{ 
                  scale: 1.2,
                  transition: { duration: 0.3 }
                }}
              >
                {/* The >_ symbol - counter-rotates to stay upright */}
                <motion.span 
                  className="font-mono text-lg sm:text-xl z-10"
                  animate={{ 
                    color: ["var(--neon-cyan)", "var(--neon-violet)", "var(--neon-cyan)"],
                    textShadow: [
                      "0 0 10px var(--neon-cyan)",
                      "0 0 20px var(--neon-violet)",
                      "0 0 10px var(--neon-cyan)"
                    ],
                    rotate: -360
                  }}
                  transition={{ 
                    color: {
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    textShadow: {
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    rotate: {
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                >
                  &gt;_
                </motion.span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[var(--neon-cyan)]/10 to-transparent"
                  animate={{ 
                    opacity: [0.3, 0.6, 0.3],
                    rotate: 360 
                  }}
                  transition={{ 
                    opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 4, repeat: Infinity, ease: "linear" }
                  }}
                ></motion.div>
              </motion.div>
            </div>
            
            <div className="flex flex-col">
              <motion.span 
                className="font-mono text-sm sm:text-lg tracking-wider cursor-pointer"
                animate={{ 
                  color: ["var(--neon-cyan)", "var(--neon-violet)", "var(--neon-cyan)"]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ x: 5 }}
              >
                WASEEM NASEEVEN
              </motion.span>
              <motion.span 
                className="font-mono text-[10px] sm:text-xs text-[var(--neon-violet)]/70"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                DevOps / SRE && Backend Golang 
              </motion.span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { label: "About", section: "about" },
              { label: "HomeLab", section: "homelab" },
              { label: "Contact", section: "contact" }
            ].map((item, index) => (
              <motion.button
                key={item.section}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                onClick={() => scrollToSection(item.section)}
                className="font-mono text-sm text-foreground/80 hover:text-[var(--neon-cyan)] transition-all duration-300 relative group"
              >
                <span className="relative z-10">{item.label}</span>
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--neon-cyan)] group-hover:w-full transition-all duration-300"
                  whileHover={{ boxShadow: "0 0 10px rgba(0, 217, 255, 0.8)" }}
                ></motion.span>
              </motion.button>
            ))}
            
            {/* CV Button with pulse animation */}
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              href="/WN%20CV%20SRE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative font-mono text-sm px-6 py-2.5 border-2 border-[var(--neon-violet)] text-[var(--neon-violet)] hover:bg-[var(--neon-violet)] hover:text-black transition-all duration-300 overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-[var(--neon-violet)]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <span className="relative z-10 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                GET CV
              </span>
              
              {/* Pulse effect */}
              <motion.div
                className="absolute inset-0 border-2 border-[var(--neon-violet)]"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [1, 0, 0] 
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              ></motion.div>
            </motion.a>
          </nav>

          {/* Social Links + Hamburger */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Social Links - Improved with backgrounds */}
            <div className="hidden sm:flex lg:flex items-center gap-2">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/waseem-naseeven-b66519192/", label: "LinkedIn", color: "#0A66C2", delay: 0.1 },
                { icon: Github, href: "https://github.com/waseemnaseeven", label: "GitHub", color: "#ffffff", delay: 0.2 },
                { icon: Twitter, href: "https://x.com/NaseevenW", label: "Twitter", color: "#1DA1F2", delay: 0.4 }
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: social.delay, type: "spring" }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative p-2 border border-foreground/20 bg-black/40 hover:border-[var(--neon-cyan)] transition-all duration-300 group overflow-hidden"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 text-foreground/70 group-hover:text-[var(--neon-cyan)] relative z-10 transition-colors" />
                    
                    {/* Colored background on hover */}
                    <motion.div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10"
                      style={{ backgroundColor: social.color }}
                    ></motion.div>
                    
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-md"
                      style={{ 
                        background: `radial-gradient(circle, ${social.color}40, transparent)` 
                      }}
                    ></motion.div>
                  </motion.a>
                );
              })}

              {/* Freelance Dropdown */}
              <motion.div
                ref={freelanceRef}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="relative"
              >
                <motion.button
                  onClick={() => setIsFreelanceOpen(!isFreelanceOpen)}
                  className="relative p-2 border border-foreground/20 bg-black/40 hover:border-[var(--neon-cyan)] transition-all duration-300 group overflow-hidden"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Freelance Platforms"
                >
                  <Briefcase className="w-4 h-4 text-foreground/70 group-hover:text-[var(--neon-cyan)] relative z-10 transition-colors" />
                  <ChevronDown 
                    className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 text-[var(--neon-cyan)] transition-transform ${isFreelanceOpen ? 'rotate-180' : ''}`} 
                  />
                  
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-md"
                    style={{ 
                      background: `radial-gradient(circle, #FC575740, transparent)` 
                    }}
                  ></motion.div>
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isFreelanceOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 border-2 border-[var(--neon-cyan)]/50 bg-black/98 backdrop-blur-md shadow-2xl shadow-[var(--neon-cyan)]/20 z-50"
                    >
                      <div className="py-2">
                        {[
                          { name: "Malt", url: "https://www.malt.fr/profile/waseemnaseeven", color: "#FC5757" },
                          { name: "Freework", url: "https://www.freework.com/profile/waseemnaseeven", color: "#00D9FF" },
                          { name: "Upwork", url: "https://www.upwork.com/freelancers/waseemnaseeven", color: "#14a800" },
                          { name: "Fiverr", url: "https://www.fiverr.com/waseemnaseeven", color: "#1dbf73" },
                        ].map((platform) => (
                          <a
                            key={platform.name}
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2.5 font-mono text-sm text-foreground/80 hover:text-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)]/10 transition-all duration-200 border-l-2 border-transparent hover:border-[var(--neon-cyan)]"
                            onClick={() => setIsFreelanceOpen(false)}
                          >
                            <span className="flex items-center justify-between">
                              {platform.name}
                              <span 
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: platform.color }}
                              ></span>
                            </span>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Hamburger Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 border-2 border-[var(--neon-cyan)] text-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)]/10 transition-all"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t-2 border-[var(--neon-cyan)]/30 bg-black/95 backdrop-blur-md"
            >
              <nav className="py-4 space-y-1">
                {["about", "homelab", "contact"].map((section, index) => (
                  <motion.button
                    key={section}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(section)}
                    className="w-full text-left font-mono text-sm px-4 py-3 text-foreground/80 hover:text-[var(--neon-cyan)] hover:bg-[var(--neon-cyan)]/10 transition-all border-l-2 border-transparent hover:border-[var(--neon-cyan)] capitalize"
                  >
                    {section}
                  </motion.button>
                ))}

                {/* CV Button Mobile */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ delay: 0.3 }}
                  className="px-4 pt-2"
                >
                  <a
                    href="/WN%20CV%20SRE.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 font-mono text-sm px-6 py-3 border-2 border-[var(--neon-violet)] text-[var(--neon-violet)] hover:bg-[var(--neon-violet)] hover:text-black transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <FileText className="w-4 h-4" />
                    GET CV
                  </a>
                </motion.div>

                {/* Social Links Mobile */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ delay: 0.4 }}
                  className="sm:hidden flex justify-center items-center gap-3 pt-4 pb-2 border-t border-[var(--neon-cyan)]/30 mt-4"
                >
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/in/waseem-naseeven-b66519192/", label: "LinkedIn" },
                    { icon: Github, href: "https://github.com/waseemnaseeven", label: "GitHub" },
                    { icon: Twitter, href: "https://x.com/NaseevenW", label: "Twitter" }
                  ].map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-foreground/20 bg-black/40 text-foreground/70 hover:text-[var(--neon-cyan)] hover:border-[var(--neon-cyan)] transition-all duration-300"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Animated bottom glow line */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent"
        animate={{ 
          opacity: [0.3, 1, 0.3],
          scaleX: [0.8, 1, 0.8]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
    </motion.header>
  );
}
