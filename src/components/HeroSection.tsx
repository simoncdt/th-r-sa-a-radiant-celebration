import { motion } from "framer-motion";
import theresaSummer from "@/assets/th.jpeg";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      
      {/* Decorative circles */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-gold/5 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 container-editorial text-center">
        {/* Date badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-block px-6 py-2 text-sm tracking-[0.2em] uppercase text-muted-foreground border border-border rounded-full font-body">
            15 Janvier 2026
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display text-foreground mb-6 tracking-tight"
        >
          Thérésa
        </motion.h1>

        {/* Age celebration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-4">
            <span className="h-px w-12 bg-primary/40" />
            <span className="text-7xl md:text-9xl font-display italic text-primary">21</span>
            <span className="h-px w-12 bg-primary/40" />
          </span>
          <p className="text-xl md:text-2xl font-display italic text-muted-foreground mt-2">ans</p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-body leading-relaxed"
        >
          Un hommage de ceux qui t'aiment — ta famille, tes amis — pour célébrer la femme extraordinaire que tu es devenue.
        </motion.p>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 relative"
        >
          <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-[var(--shadow-elevated)] border-4 border-background">
            <img
              src={theresaSummer}
              alt="Thérésa"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Decorative ring */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border border-primary/20 animate-pulse" />
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs tracking-widest uppercase">Découvrir</span>
            <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
