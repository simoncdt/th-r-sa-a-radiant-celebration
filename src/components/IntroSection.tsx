import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import theresaSmile from "@/assets/theresa-smile.jpeg";
import theresaRestaurant from "@/assets/theresa-restaurant.jpeg";

export const IntroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing bg-secondary/20">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm tracking-[0.2em] uppercase text-primary font-body mb-4 block">
              Notre étoile
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mb-6">
              Une âme qui illumine chaque vie qu'elle touche
            </h2>
            <div className="divider-elegant !mx-0 !my-8" />
            <p className="text-editorial mb-6">
              Thérésa, tu es ce diamant rare que la vie offre une seule fois. Ta joie, 
              ta compassion, ta générosité sans limite font de toi bien plus qu'une amie, 
              une sœur, une cousine — tu es un cadeau du ciel pour chacun d'entre nous.
            </p>
            <p className="text-editorial">
              Aujourd'hui, en ce 15 janvier 2026, nous célébrons non seulement tes 21 ans, 
              mais aussi l'empreinte indélébile que tu laisses dans nos cœurs. Ce magazine 
              digital est notre façon de te dire : <em className="text-primary font-medium">nous t'aimons</em>.
            </p>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="image-frame">
                <img
                  src={theresaSmile}
                  alt="Thérésa souriante"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              {/* Overlapping second image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-8 -left-8 w-40 md:w-52 image-frame border-4 border-background"
              >
                <img
                  src={theresaRestaurant}
                  alt="Thérésa au restaurant"
                  className="w-full aspect-square object-cover"
                />
              </motion.div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
