import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const verses = [
  {
    reference: "Ésaïe 41:10",
    text: "N'aie pas peur, je suis avec toi. Ne regarde pas autour de toi avec inquiétude. Oui, ton Dieu, c'est moi. Je te rends fort, je viens à ton secours et je te protège avec ma main puissante et victorieuse.",
  },
  {
    reference: "Psaumes 18:2",
    text: "Je t'aime, Seigneur, tu es ma force!",
  },
  {
    reference: "Jean 15:15",
    text: "Je ne vous appelle plus serviteurs parce que le serviteur ne sait pas ce que fait son seigneur, mais je vous ai appelés amis parce que je vous ai fait connaître tout ce que j'ai appris de mon Père.",
  },
  {
    reference: "Deutéronome 31:8",
    text: "Le Seigneur marchera devant toi, il sera avec toi. Il ne te lâchera pas, il ne t'abandonnera pas. N'aie donc pas peur, ne te laisse pas décourager.",
  },
  {
    reference: "Psaumes 30:6",
    text: "Sa colère ne dure qu'un instant, mais sa bienveillance toute la vie. Les pleurs sont encore là le soir, mais au matin éclate la joie.",
  },
  {
    reference: "Psaumes 139:14",
    text: "Je te loue d'avoir fait de moi une créature aussi merveilleuse : tu fais des merveilles, et je le reconnais bien.",
  },
  {
    reference: "Proverbes 10:22",
    text: "C'est la bénédiction de l'Éternel qui enrichit, et il ne la fait suivre d'aucun chagrin.",
  },
  {
    reference: "Job 42:2",
    text: "Tout est possible pour toi, je le sais, tu peux faire tout ce que tu veux.",
  },
];

export const VersesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-spacing bg-foreground text-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container-wide relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-sm tracking-[0.2em] uppercase text-primary font-body mb-4 block">
            Sa Foi
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
            Versets qui guident son cœur
          </h2>
          <p className="text-lg md:text-xl opacity-70 max-w-2xl mx-auto font-body">
            Ces paroles sacrées sont le fondement de sa force, la source de sa joie et le reflet de son âme.
          </p>
          <div className="w-16 h-px bg-primary/40 mx-auto my-12" />
        </motion.div>

        {/* Verses grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {verses.map((verse, index) => (
            <motion.div
              key={verse.reference}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-8 rounded-2xl bg-background/5 border border-background/10 hover:bg-background/10 transition-all duration-500">
                <p className="text-sm tracking-[0.15em] uppercase text-primary font-body mb-4">
                  {verse.reference}
                </p>
                <p className="font-display text-xl md:text-2xl italic leading-relaxed opacity-90">
                  "{verse.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
