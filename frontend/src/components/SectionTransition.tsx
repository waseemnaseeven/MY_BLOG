import { motion } from 'motion/react';

export function SectionTransition() {
  return (
    <div className="relative h-24 overflow-hidden">
      {/* Simple animated line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.3 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: false, margin: "-100px" }}
        className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-[var(--cyber-red)]/0 via-[var(--cyber-yellow)] to-[var(--cyber-red)]/0"
      />

      {/* Subtle scanline effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 0.1, 0] }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{ once: false }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--cyber-yellow)]/5 to-transparent"
      />
    </div>
  );
}
