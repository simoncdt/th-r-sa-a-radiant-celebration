import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

const colors = [
  "hsl(15, 45%, 65%)",    // rose gold
  "hsl(38, 55%, 75%)",    // gold
  "hsl(35, 25%, 85%)",    // cream
  "hsl(15, 35%, 75%)",    // soft rose
  "hsl(40, 30%, 80%)",    // warm beige
];

export const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const generatePieces = () => {
      const newPieces: ConfettiPiece[] = [];
      for (let i = 0; i < 60; i++) {
        newPieces.push({
          id: i,
          x: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 3,
          duration: 4 + Math.random() * 3,
          size: 6 + Math.random() * 10,
          rotation: Math.random() * 360,
        });
      }
      setPieces(newPieces);
    };

    generatePieces();

    const timer = setTimeout(() => {
      setIsActive(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isActive && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {pieces.map((piece) => (
            <motion.div
              key={piece.id}
              initial={{
                x: `${piece.x}vw`,
                y: -20,
                rotate: 0,
                opacity: 1,
              }}
              animate={{
                y: "110vh",
                rotate: piece.rotation + 720,
                opacity: [1, 1, 0],
              }}
              transition={{
                duration: piece.duration,
                delay: piece.delay,
                ease: "easeOut",
              }}
              className="absolute"
              style={{
                width: piece.size,
                height: piece.size * 0.6,
                backgroundColor: piece.color,
                borderRadius: "2px",
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};
