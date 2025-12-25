import { motion } from "framer-motion";

export const FooterSection = () => {
  return (
    <footer className="py-20 md:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container-editorial text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Heart icon */}
          <div className="mb-8">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20"
            >
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </motion.div>
          </div>

          {/* Main message */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6">
            Joyeux 21<sup>ème</sup> anniversaire, Thérésa
          </h2>
          
          <p className="text-lg md:text-xl opacity-80 font-body max-w-xl mx-auto mb-8 leading-relaxed">
            De la part de tous ceux qui t'aiment — ta famille et tes amis. 
            Que cette nouvelle année soit remplie de bénédictions infinies.
          </p>

          {/* Date */}
          <div className="inline-block px-6 py-3 rounded-full border border-background/20 text-sm tracking-widest uppercase font-body">
            15 Janvier 2026
          </div>

          {/* Bottom signature */}
          <div className="mt-16 pt-8 border-t border-background/10">
            <p className="text-sm opacity-50 font-body">
              Créé avec amour pour Thérésa
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative circles */}
      <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full border border-primary/10" />
      <div className="absolute top-20 right-20 w-24 h-24 rounded-full border border-primary/10" />
    </footer>
  );
};
