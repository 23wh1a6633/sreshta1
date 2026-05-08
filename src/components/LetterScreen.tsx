import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FloatingDecor } from "./FloatingDecor";

const LETTER = `Cheers to a new chapter of your life,
I don’t even know where to begin, because there’s so much I feel and not enough words to hold it all. But I’ll try.
I am so happy for you. Truly. Watching you step into something new, something important, something that will shape you into an even stronger and brighter version of yourself makes me incredibly proud. You deserve every opportunity that comes your way, and I know you’re going to do amazing things there.
At the same time, I’d be lying if I said this doesn’t leave a little emptiness here. Three months sounds short, but it also feels like a quiet kind of forever when I think about not having you around the way I’m used to. I’m going to miss you in ways I probably won’t even realize until those moments come.
But here’s the thing. Distance doesn’t really change what we are. I might not be there with you physically, but you carry a part of me with you, always. You’ll have my heart with you in every small moment, every tiring day, every little win, and even the days when everything feels too much. And no matter how busy life gets, we’re still just one message away from each other. That thought alone makes this a little easier.
I know it’s not going to be easy all the time. There will be days when work drains you, when you feel overwhelmed, when all you want is a break. On those days, I just want you to remember to be kind to yourself. Breathe. Don’t let the pressure take away your peace. You’re stronger than you think, but you don’t always have to be strong either.
And please don’t forget to live while you’re there. Don’t just work through the days. Feel them. Explore, laugh, try new things, notice the little details. Make memories that you’ll carry forever. Even if I’m not there beside you, I’ll be there in a different way, seeing everything through your stories, your words, your happiness.
There’s something I’ve left for you. A little jar, filled with small pieces of care from me to you. On the days you feel tired, pick one. On the days you feel like escaping for a while, pick one. On the days you just want to feel a little closer to home, pick one. Each chit is my way of being there with you, guiding you to little moments of joy, little breaks, little memories waiting to happen.
So whenever life there feels too heavy or too routine, just open the jar and let me take you somewhere, even if it’s just for a little while.
And about missing you… I guess I will. More than I’m admitting. But I also know this isn’t really a goodbye. It’s just a pause in the way we usually are. Because no matter where you go, we’ll still be there for each other, just like always.
Take care of yourself. Be safe. Be happy. And don’t forget that there’s someone here who’s always thinking of you, always rooting for you, and always holding you close in their heart.
Always & Forever.`;

export function LetterScreen(props: Readonly<{ onContinue: () => void }>) {
  const { onContinue } = props;
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (shown >= LETTER.length) return;
    const t = setTimeout(() => setShown((s) => s + 1), 45);
    return () => clearTimeout(t);
  }, [shown]);

  const done = shown >= LETTER.length;

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-10" style={{ background: "var(--gradient-pastel)" }}>
      <FloatingDecor />
      <div className="relative z-10 w-full max-w-5xl px-3 sm:px-6">
        <div className="mb-8 text-center">
          <p className="text-pink-500 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-pixel)" }}>
            ♡ priyamaina harsh ki ♡
          </p>
          <p className="mt-3 text-pink-400 text-2xl sm:text-3xl" style={{ fontFamily: "var(--font-hand)" }}>
            a letter just for you
          </p>
        </div>
        <div className="relative overflow-hidden rounded-[36px] border-4 border-pink-200 bg-[#fff8f0] p-8 sm:p-12 shadow-[0_20px_120px_rgba(255,182,193,0.18)]" style={{ backgroundImage: "radial-gradient(circle at 10% 10%, rgba(255,192,214,0.35), transparent 12%), radial-gradient(circle at 90% 90%, rgba(255,220,230,0.25), transparent 18%), repeating-linear-gradient(180deg, transparent 0 34px, rgba(255,182,193,0.12) 34px 35px)" }}>
          <div className="pointer-events-none absolute left-1/2 top-0 h-8 w-32 -translate-x-1/2 rounded-b-[28px] bg-pink-200/80" />
          <div className="pointer-events-none absolute left-1/2 bottom-0 h-8 w-32 -translate-x-1/2 rounded-t-[28px] bg-pink-200/80" />
          <pre className="letter-scrollbar max-h-[70vh] overflow-y-auto whitespace-pre-wrap text-pink-700" style={{ fontFamily: "var(--font-type)", fontSize: "1.35rem", lineHeight: 1.8, letterSpacing: "0.02em" }}>
            {LETTER.slice(0, shown)}
            <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }} className="text-pink-400">
              ▍
            </motion.span>
          </pre>
        </div>
        <div className="mt-8 flex flex-col items-center gap-3">
          <motion.button
            onClick={() => done && onContinue()}
            animate={{ opacity: done ? 1 : 0.5, scale: done ? 1 : 0.98 }}
            whileHover={done ? { scale: 1.05 } : undefined}
            whileTap={done ? { scale: 0.95 } : undefined}
            disabled={!done}
            className="rounded-3xl border-4 border-pink-400 bg-pink-300 px-10 py-4 text-white disabled:cursor-not-allowed"
            style={{ fontFamily: "var(--font-pixel)", fontSize: "0.95rem", boxShadow: "var(--shadow-pixel)" }}
          >
            Continue ♡
          </motion.button>
          {!done && (
            <button onClick={() => setShown(LETTER.length)} className="mt-2 text-pink-400 underline" style={{ fontFamily: "var(--font-hand)", fontSize: "1.1rem" }}>
              skip typing
            </button>
          )}
        </div>
      </div>
    </div>
  );
}