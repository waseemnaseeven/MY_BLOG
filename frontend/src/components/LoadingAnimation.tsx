import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingAnimationProps {
  onComplete: () => void;
}

// Generate random stars
const generateStars = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 4 + 3, // Slower: 3-7 seconds instead of 2-5
    delay: Math.random() * 3, // More spread out delays
  }));
};

export function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"tv-boot" | "loading" | "complete" | "exit">("tv-boot");
  const stars = generateStars(150);

  useEffect(() => {
    // TV boot effect for 800ms
    const tvBootTimeout = setTimeout(() => {
      setPhase("loading");
    }, 800);

    return () => clearTimeout(tvBootTimeout);
  }, []);

  useEffect(() => {
    if (phase !== "loading") return;

    // Progress simulation - slower, takes about 4-5 seconds
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setPhase("complete");
          setTimeout(() => setPhase("exit"), 500);
          setTimeout(() => onComplete(), 1200);
          return 100;
        }
        // Slower increments for longer loading time
        const increment = prev < 30 ? 2 : prev < 60 ? 3 : prev < 90 ? 4 : 10;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(progressInterval);
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
      >
        {/* TV Boot Effect */}
        {phase === "tv-boot" && (
          <>
            {/* CRT scanline effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-0"
              initial={{ height: 0, top: "50%", opacity: 0 }}
              animate={{ 
                height: ["0%", "100%"],
                top: ["50%", "0%"],
                opacity: [0, 0.3, 0]
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            
            {/* Horizontal line expanding */}
            <motion.div
              className="absolute left-0 right-0 h-1 bg-white"
              style={{ top: "50%" }}
              initial={{ scaleX: 0, opacity: 1 }}
              animate={{ scaleX: 1, opacity: [1, 1, 0] }}
              transition={{ duration: 0.4, times: [0, 0.7, 1] }}
            />
            
            {/* Expanding circle effect */}
            <motion.div
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                translateX: "-50%",
                translateY: "-50%",
              }}
              initial={{ width: 0, height: 0, opacity: 1 }}
              animate={{ 
                width: "200%", 
                height: "200%",
                opacity: [1, 0.8, 0]
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-full h-full border-4 border-white rounded-full" 
                style={{ boxShadow: "0 0 60px rgba(255, 255, 255, 0.8)" }}
              />
            </motion.div>

            {/* White flash */}
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.8, 0] }}
              transition={{ duration: 0.5, times: [0, 0.3, 1] }}
            />

            {/* Static noise */}
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </>
        )}

        {/* Main loading content */}
        {phase !== "tv-boot" && (
          <>
            {/* Animated star field background - slower animations */}
            <div className="absolute inset-0">
              {stars.map((star) => (
                <motion.div
                  key={star.id}
                  className="absolute rounded-full bg-white"
                  style={{
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 0.3, 0.8, 0.3],
                    scale: [0, 0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: star.duration,
                    repeat: Infinity,
                    delay: star.delay,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Animated grid background */}
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 30, // Slower grid animation
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundImage: `linear-gradient(var(--neon-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--neon-violet) 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
              }}
            ></motion.div>

            {/* Large glowing orbs - slower */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, var(--neon-cyan)30, transparent)" }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 6, // Slower orb animation
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
              style={{ background: "radial-gradient(circle, var(--neon-violet)30, transparent)" }}
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 6, // Slower orb animation
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3,
              }}
            />

            {/* Main content */}
            <div className="relative z-10 max-w-2xl w-full px-8">
              <div className="space-y-8">
                {/* Title with glitch effect */}
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="text-center"
                >
                  <motion.h1 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono mb-4 tracking-wider"
                    style={{
                      textShadow: `0 0 20px var(--neon-cyan), 0 0 40px var(--neon-cyan)`,
                      color: "var(--neon-cyan)",
                    }}
                    animate={{
                      textShadow: [
                        "0 0 20px var(--neon-cyan), 0 0 40px var(--neon-cyan)",
                        "0 0 30px var(--neon-violet), 0 0 60px var(--neon-violet)",
                        "0 0 20px var(--neon-cyan), 0 0 40px var(--neon-cyan)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    INITIALIZING SYSTEM...
                  </motion.h1>
                  
                  <motion.p
                    className="text-sm sm:text-base text-foreground/60 font-mono"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    [ LOADING PORTFOLIO ENVIRONMENT ]
                  </motion.p>
                </motion.div>

                {/* Progress bar */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="space-y-4"
                >
                  {/* Progress bar container */}
                  <div className="relative h-4 border-2 bg-black/60 overflow-hidden"
                    style={{
                      borderColor: progress >= 100 ? "var(--neon-violet)" : "var(--neon-cyan)",
                      boxShadow: progress >= 100 
                        ? "0 0 20px var(--neon-violet)" 
                        : "0 0 20px var(--neon-cyan)",
                    }}
                  >
                    {/* Animated scanning line */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Progress fill with gradient */}
                    <motion.div
                      className="absolute inset-y-0 left-0"
                      style={{
                        width: `${progress}%`,
                        background: `linear-gradient(90deg, var(--neon-cyan), var(--neon-violet), var(--neon-cyan))`,
                        backgroundSize: "200% 100%",
                        boxShadow: `0 0 30px ${progress >= 100 ? "var(--neon-violet)" : "var(--neon-cyan)"}`,
                      }}
                      animate={{
                        backgroundPosition: ["0% 50%", "200% 50%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    
                    {/* Glow effect at progress head */}
                    {progress > 0 && progress < 100 && (
                      <motion.div
                        className="absolute inset-y-0 w-20 blur-xl"
                        style={{ 
                          left: `${Math.max(0, progress - 10)}%`,
                          background: "var(--neon-cyan)",
                          opacity: 0.6,
                        }}
                      />
                    )}
                  </div>

                  {/* Progress info */}
                  <div className="flex items-center justify-between text-xs sm:text-sm font-mono">
                    <motion.span 
                      className="text-[var(--neon-cyan)]"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {progress}%
                    </motion.span>
                    <motion.span 
                      className="text-foreground/50"
                      key={progress < 30 ? "1" : progress < 60 ? "2" : progress < 90 ? "3" : "4"}
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {progress < 30 && "► Loading core modules..."}
                      {progress >= 30 && progress < 60 && "► Initializing components..."}
                      {progress >= 60 && progress < 90 && "► Compiling assets..."}
                      {progress >= 90 && progress < 100 && "► Finalizing..."}
                      {progress >= 100 && "✓ System ready!"}
                    </motion.span>
                  </div>
                </motion.div>

                {/* Animated loading dots - slower */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex justify-center gap-3"
                >
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: i % 2 === 0 ? "var(--neon-cyan)" : "var(--neon-violet)" }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 1, 0.3],
                        boxShadow: [
                          `0 0 5px ${i % 2 === 0 ? "var(--neon-cyan)" : "var(--neon-violet)"}`,
                          `0 0 20px ${i % 2 === 0 ? "var(--neon-cyan)" : "var(--neon-violet)"}`,
                          `0 0 5px ${i % 2 === 0 ? "var(--neon-cyan)" : "var(--neon-violet)"}`,
                        ],
                      }}
                      transition={{
                        duration: 2, // Slower dot animation
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </>
        )}

        {/* Tearing/ripping exit effect */}
        {phase === "exit" && (
          <>
            {/* Top tear */}
            <motion.div
              className="absolute inset-x-0 top-0 h-1/2 bg-black z-50"
              initial={{ y: 0 }}
              animate={{ y: "-100%" }}
              transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 20px))",
              }}
            />
            
            {/* Bottom tear */}
            <motion.div
              className="absolute inset-x-0 bottom-0 h-1/2 bg-black z-50"
              initial={{ y: 0 }}
              animate={{ y: "100%" }}
              transition={{ duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
              style={{
                clipPath: "polygon(0 20px, 100% 0, 100% 100%, 0 100%)",
              }}
            />

            {/* Glowing tear edges */}
            <motion.div
              className="absolute inset-x-0 top-1/2 h-1 z-50"
              style={{
                background: "linear-gradient(90deg, var(--neon-cyan), var(--neon-violet), var(--neon-cyan))",
                boxShadow: "0 0 30px var(--neon-cyan), 0 0 60px var(--neon-violet)",
              }}
              animate={{
                opacity: [1, 0],
                scaleY: [1, 3],
              }}
              transition={{ duration: 0.6 }}
            />
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}