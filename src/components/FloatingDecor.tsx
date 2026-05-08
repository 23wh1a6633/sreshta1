import { motion } from "framer-motion";

const ICONS = ["★", "♥", "✦", "✿", "❀", "♡", "✧", "❁"];

type Item = { left: number; top: number; size: number; delay: number; dur: number; icon: string; color: string };

const COLORS = ["text-yellow-300", "text-pink-400", "text-pink-300", "text-rose-400", "text-fuchsia-300"];

function generate(count: number): Item[] {
  return Array.from({ length: count }).map((_, i) => ({
    left: (i * 53) % 100,
    top: (i * 37) % 100,
    size: 14 + ((i * 7) % 28),
    delay: (i % 10) * 0.4,
    dur: 4 + (i % 5),
    icon: ICONS[i % ICONS.length],
    color: COLORS[i % COLORS.length],
  }));
}

const ITEMS = generate(28);

export function FloatingDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {ITEMS.map((it, i) => (
        <motion.span
          key={i}
          className={`absolute ${it.color} drop-shadow-[2px_2px_0_rgba(255,255,255,0.6)]`}
          style={{ left: `${it.left}%`, top: `${it.top}%`, fontSize: it.size, fontFamily: "var(--font-pixel)" }}
          animate={{ y: [0, -18, 0], rotate: [0, 8, -8, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: it.dur, repeat: Infinity, delay: it.delay, ease: "easeInOut" }}
        >
          {it.icon}
        </motion.span>
      ))}
    </div>
  );
}
