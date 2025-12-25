import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const artists = [
  "David Ize", "Groupe Adorons l'Eternel : Gaël", "K3ndrick", "Forrest Franck",
  "Ks Bloom", "Fiston Mbuyi", "Noah Mungongo", "Faveur Mukoko"
];

const songs = [
  { artist: "Ryan Ellis", title: "Gonna be Alright, Heart of the Father" },
  { artist: "Divine Yala", title: "Bolamu" },
  { artist: "Theresa Phondo", title: "Assurance, Hold on" },
  { artist: "Nk Divine", title: "Lelo, Encore, Tout comme toi" },
  { artist: "Milo feat Morijah", title: "Dans tes mains" },
  { artist: "Shaddaï Ndombaxe", title: "J'ai fait mon choix, Abba, Comblé" },
  { artist: "Jonathan Gambela", title: "Ami Fidèle, Au niveau, Grand Dieu" },
  { artist: "Morijah", title: "ADN du Très Haut, Vanité" },
  { artist: "Moise Ngofo", title: "Promesse, Combat pour moi, Libre" },
  { artist: "Daniel Mundos", title: "Je t'appartiens, Mon essentiel" },
];

export const PlaylistSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing bg-secondary/30">
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-sm tracking-[0.2em] uppercase text-primary font-body mb-4 block">
            Sa Musique
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mb-6">
            La bande sonore de sa vie
          </h2>
          <p className="text-editorial max-w-2xl mx-auto">
            Ces mélodies sont le reflet de son âme — des chants qui l'élèvent, l'inspirent et lui rappellent la beauté de sa foi.
          </p>
          <div className="divider-elegant" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Artists */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-display text-foreground mb-8">Artistes favoris</h3>
            <div className="flex flex-wrap gap-3">
              {artists.map((artist, index) => (
                <motion.span
                  key={artist}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-5 py-2.5 bg-card rounded-full text-sm font-body text-foreground border border-border hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                >
                  {artist}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Songs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-display text-foreground mb-8">Chansons préférées</h3>
            <div className="space-y-4">
              {songs.map((song, index) => (
                <motion.div
                  key={`${song.artist}-${song.title}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/50 hover:bg-card transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-body font-medium text-foreground">{song.artist}</p>
                    <p className="text-sm text-muted-foreground">{song.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
