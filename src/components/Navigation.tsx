import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Intro", href: "#intro" },
  { label: "Lettres", href: "#lettres" },
  { label: "Foi", href: "#foi" },
  { label: "Musique", href: "#musique" },
  { label: "Galerie", href: "#galerie" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="font-display text-xl md:text-2xl text-foreground">
            T<span className="text-primary">.</span>
          </a>

          {/* Nav links - hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* 21 badge */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-display italic text-primary">21</span>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
