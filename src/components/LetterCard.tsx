import { motion } from "framer-motion";

interface LetterCardProps {
  author: string;
  content: string;
  index: number;
}

export const LetterCard = ({ author, content, index }: LetterCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card-letter group hover:shadow-[var(--shadow-elevated)] transition-shadow duration-500"
    >
      {/* Decorative quote mark */}
      <div className="text-6xl font-display text-primary/20 leading-none mb-4 select-none">
        "
      </div>
      
      {/* Letter content */}
      <div className="prose prose-lg max-w-none">
        <p className="text-muted-foreground font-body leading-relaxed whitespace-pre-line text-base md:text-lg">
          {content}
        </p>
      </div>

      {/* Author signature */}
      <div className="mt-8 pt-6 border-t border-border/50 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <span className="text-primary font-display text-lg">
            {author.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-display text-xl text-foreground italic">{author}</p>
          <p className="text-sm text-muted-foreground">Avec tout mon amour</p>
        </div>
      </div>
    </motion.article>
  );
};
