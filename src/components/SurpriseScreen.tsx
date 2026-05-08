import { motion } from "framer-motion";
import { FloatingDecor } from "./FloatingDecor";

export function SurpriseScreen({ onClick }: { onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative flex min-h-screen items-center justify-center"
      style={{ background: "var(--gradient-pastel)" }}
    >
      <FloatingDecor />
      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <motion.h1
          className="text-pink-500"
          style={{ fontFamily: "var(--font-pixel)", fontSize: "1.4rem", textShadow: "3px 3px 0 #fff" }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          ♡ for HARSH ♡
        </motion.h1>
        <motion.button
          onClick={onClick}
          whileHover={{ scale: 1.06, rotate: -2 }}
          whileTap={{ scale: 0.94 }}
          className="rounded-2xl border-4 border-pink-400 bg-white/90 px-8 py-5 text-pink-500"
          style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "0.9rem",
            boxShadow: "var(--shadow-pixel)",
          }}
        >
          ✦ Click for Surprise ✦
        </motion.button>
        <p className="text-pink-400" style={{ fontFamily: "var(--font-hand)", fontSize: "1.6rem" }}>
          made with love
        </p>
      </div>
    </motion.div>
  );
}
