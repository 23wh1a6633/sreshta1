import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FloatingDecor } from "./FloatingDecor";

const PASSWORD = "ilytaeju";

const CHITS = [
"Juliet",
"Misu",
"Yauatcha",
"Nasi and Mee",
"Yuki",
"Lucky Chan",
"Cha Hong Kong",
"Shiro",
"TYD",
"Zen",
"KOKO",
"Taiki",
"The Fatty Bao",
"FOO Asian Tapas",
"Lotus Oriental",
"Wabi Sabi",
"Horizon",
"Hustle",
"Table for Tous",
"Muru Muru",
"Fia's Lounge",
"Brik Oven",
"Aurora",
"The Kind Roastery",
"German BrezelHaus",
"Copper + Cloves",
"The Hole in the Wall",
"Poco a Poco",
"Boarding Pass",
"154 Breakfast Club",
"Amintiri",
"Beige",
"Oia",
"UB City Mall",
"Daily Sushi",
"Breakfast Club Brunch",
"Scene",
"Roxie"
];

export function JarScreen() {
  const [unlocked, setUnlocked] = useState(false);
  const [showPad, setShowPad] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [drawn, setDrawn] = useState<number | null>(null);
  const [used, setUsed] = useState<Set<number>>(new Set());

  const tryUnlock = () => {
    if (code.toLowerCase() === PASSWORD) {
      setUnlocked(true);
      setTimeout(() => setShowPad(false), 700);
    } else {
      setError(true);
      setTimeout(() => setError(false), 600);
      setCode("");
    }
  };

  const drawChit = (i: number) => {
    if (used.has(i)) return;
    setDrawn(i);
  };

  const closeChit = () => {
    if (drawn !== null) setUsed((s) => new Set(s).add(drawn));
    setDrawn(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative flex min-h-screen items-center justify-center px-4 py-10"
      style={{ background: "var(--gradient-pastel)" }}
    >
      <FloatingDecor />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-8">
        <div className="w-full max-w-3xl rounded-[36px] border-4 border-pink-200 bg-[#fff8f0] p-8 text-pink-700 shadow-[0_20px_120px_rgba(255,182,193,0.18)] text-center">
          <p className="mb-5 text-pink-500 text-2xl" style={{ fontFamily: "var(--font-type)" }}>
            A little jar for your Bengaluru days.
          </p>
          <p className="mb-4 text-pink-600" style={{ fontFamily: "var(--font-type)", fontSize: "1rem", lineHeight: 1.8 }}>
            Inside are places I found and saved for you - cafés, spots, little escapes, and experiences I thought you’d love. So whenever life starts feeling too repetitive, tiring, or overwhelming, just pick one chit and go.
          </p>
          <p className="mb-4 text-pink-600" style={{ fontFamily: "var(--font-type)", fontSize: "1rem", lineHeight: 1.8 }}>
            Take yourself out. Explore. Eat good food. Walk around. Make memories. Romanticize your life a little.
          </p>
          <p className="text-pink-600" style={{ fontFamily: "var(--font-type)", fontSize: "1rem", lineHeight: 1.8 }}>
            Think of this jar as a tiny way of me making sure you don't miss me hehe.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <h2
            className="text-pink-500"
            style={{ fontFamily: "var(--font-pixel)", fontSize: "0.9rem", textShadow: "2px 2px 0 #fff" }}
          >
            ♡ JAR OF LIL JOYS ♡
          </h2>
          <p className="text-pink-500" style={{ fontFamily: "var(--font-hand)", fontSize: "1.4rem" }}>
            {unlocked ? "choose, my love" : "the jar is locked ..."}
          </p>

          {/* Jar */}
          <div className="relative">
            {/* lid */}
            <div
              className="mx-auto h-6 w-56 rounded-t-xl border-4 border-pink-400 bg-pink-300"
              style={{ boxShadow: "var(--shadow-pixel)" }}
            />
            <div className="mx-auto -mt-1 h-3 w-60 rounded border-4 border-pink-400 bg-pink-200" />

            {/* glass body */}
            <div
              className="relative mx-auto mt-1 h-72 w-64 overflow-hidden rounded-3xl border-4 border-pink-400 bg-gradient-to-b from-rose-100/70 to-pink-200/60 backdrop-blur"
              style={{ boxShadow: "var(--shadow-soft), inset 0 0 30px rgba(255,255,255,0.5)" }}
            >
              {/* shine */}
              <div className="absolute left-3 top-3 h-32 w-3 rounded-full bg-white/60" />
              <div className="absolute left-7 top-3 h-16 w-2 rounded-full bg-white/40" />

              {/* chits */}
              <div className="absolute inset-0 overflow-hidden pt-4 pb-4 px-3">
                {CHITS.map((name, i) => {
                  const isUsed = used.has(i);
                  const col = i % 4;
                  const row = Math.floor(i / 4);
                  const baseLeft = 7 + col * 20;
                  const baseTop = 5 + row * 8.3;
                  let xShift = -4;
                  if (row % 3 === 1) xShift = 3;
                  else if (row % 3 === 2) xShift = -2;
                  const yShiftBase = col % 2 === 0 ? 1.5 : -1.5;
                  const yShiftMultiplier = row % 2 ? 1 : 0.85;
                  const yShift = yShiftBase * yShiftMultiplier;
                  const left = `${Math.max(6, Math.min(88, baseLeft + xShift))}%`;
                  const top = `${Math.max(5, Math.min(90, baseTop + yShift))}%`;
                  const rotate = ((i * 21) % 36) - 18;
                  return (
                    <motion.button
                      key={name}
                      onClick={() => unlocked && drawChit(i)}
                      disabled={!unlocked || isUsed}
                      whileHover={unlocked && !isUsed ? { scale: 1.15, y: -4 } : undefined}
                      whileTap={unlocked && !isUsed ? { scale: 0.9 } : undefined}
                      animate={{ opacity: isUsed ? 0.2 : 1 }}
                      className="absolute h-10 w-14 rounded border-2 border-pink-300 bg-[#fff8f0]"
                      style={{
                        left,
                        top,
                        transform: `rotate(${rotate}deg)`,
                        backgroundImage:
                          "repeating-linear-gradient(90deg, transparent 0 6px, rgba(255,182,193,0.5) 6px 7px)",
                        boxShadow: "1px 1px 0 rgba(219,112,147,0.5)",
                      }}
                      aria-label={`chit ${i + 1}`}
                    />
                  );
                })}
              </div>

              {/* chains + love lock wrapping the jar */}
              <AnimatePresence>
                {!unlocked && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.6, y: -30, rotate: 15 }}
                    transition={{ duration: 0.7 }}
                    className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center"
                  >
                    {/* previous lock */}
                    <motion.div
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -20, rotate: 20 }}
                      className="absolute left-1/2 top-10 -translate-x-1/2 pointer-events-auto"
                    >
                      <motion.button
                        type="button"
                        onClick={() => setShowPad(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-pink-500 bg-pink-200 text-pink-600 text-3xl"
                        style={{ boxShadow: "var(--shadow-pixel)" }}
                      >
                        ♥
                      </motion.button>
                      <div className="mt-2 text-xs text-pink-400" style={{ fontFamily: "var(--font-hand)" }}>
                        tap to unlock
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* base */}
            <div className="mx-auto -mt-1 h-4 w-72 rounded-b-xl border-4 border-pink-400 bg-pink-300" />
          </div>
        </div>
      </div>

      {/* password popup */}
      <AnimatePresence>
        {showPad && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 flex items-center justify-center bg-pink-900/30 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.7, y: 30 }}
              animate={{ scale: 1, y: 0, x: error ? [0, -10, 10, -8, 8, 0] : 0 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="w-[90%] max-w-xs rounded-2xl border-4 border-pink-400 bg-[#fff8f0] p-6 text-center"
              style={{ boxShadow: "var(--shadow-pixel)" }}
            >
              <div className="mb-3 text-pink-500" style={{ fontFamily: "var(--font-pixel)", fontSize: "0.7rem" }}>
                Enter password
              </div>
              <p className="mb-3 text-pink-400" style={{ fontFamily: "var(--font-hand)", fontSize: "1.2rem" }}>
                to unlock the lil jar of love
              </p>
              <input
                value={code}
                onChange={(e) => setCode(e.target.value)}
                autoComplete="off"
                placeholder="ilytaeju"
                className="mb-4 w-full rounded-2xl border-4 border-pink-300 bg-white px-4 py-3 text-center text-pink-600 outline-none focus:border-pink-400"
                style={{ fontFamily: "var(--font-pixel)", fontSize: "1rem" }}
              />
              <button
                onClick={tryUnlock}
                className="w-full rounded-2xl border-4 border-pink-400 bg-pink-300 px-4 py-3 text-pink-50 active:scale-95"
                style={{ fontFamily: "var(--font-pixel)", fontSize: "0.95rem" }}
              >
                unlock
              </button>
              {error && (
                <p className="mt-3 text-rose-500" style={{ fontFamily: "var(--font-hand)", fontSize: "1.2rem" }}>
                  oops, try again ♡
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* drawn chit */}
      <AnimatePresence>
        {drawn !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-pink-900/40 p-4"
            onClick={closeChit}
          >
            <motion.div
              initial={{ scale: 0.2, y: 200, rotate: -30 }}
              animate={{ scale: [0.3, 0.6, 1], y: [200, -20, 0], rotate: [-30, 10, 0] }}
              exit={{ scale: 0.2, opacity: 0 }}
              transition={{ duration: 1, times: [0, 0.5, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm rounded-3xl border-4 border-pink-400 bg-[#fff8f0] p-8 text-center"
              style={{
                boxShadow: "var(--shadow-pixel)",
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent 0 24px, rgba(255,182,193,0.3) 24px 25px)",
              }}
            >
              <div className="mb-3 text-pink-400" style={{ fontFamily: "var(--font-pixel)", fontSize: "0.55rem" }}>
                ✦ a little something ✦
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-pink-600"
                style={{ fontFamily: "var(--font-hand)", fontSize: "2rem", lineHeight: 1.2 }}
              >
                {CHITS[drawn]}
              </motion.p>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                onClick={closeChit}
                className="mt-6 rounded-xl border-4 border-pink-400 bg-pink-300 px-5 py-2 text-white"
                style={{ fontFamily: "var(--font-pixel)", fontSize: "0.65rem", boxShadow: "var(--shadow-pixel)" }}
              >
                draw another ♡
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
