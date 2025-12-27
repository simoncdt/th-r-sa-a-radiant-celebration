import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import theresaMirror from "@/assets/theresa-mirror.jpeg";
import theresaKiss from "@/assets/theresa-kiss.jpeg";
import theresaHoodie from "@/assets/the.jpeg";

const photos = [
  { src: theresaMirror, alt: "Thérésa miroir", caption: "Toujours radieuse" },
  { src: theresaKiss, alt: "Thérésa kiss", caption: "Pleine de vie" },
  { src: theresaHoodie, alt: "Thérésa hoodie", caption: "Naturellement belle" },
];

export const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-sm tracking-[0.2em] uppercase text-primary font-body mb-4 block">
            Galerie
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mb-6">
            Instants capturés
          </h2>
          <p className="text-editorial max-w-2xl mx-auto">
            Des fragments de bonheur, des sourires immortalisés.
          </p>
          <div className="divider-elegant" />
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.alt}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="image-frame overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="font-display text-xl italic text-background">{photo.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
