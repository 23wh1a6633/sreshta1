import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FloatingDecor } from "./FloatingDecor";

const LETTER = `Hello sweetheart,

This is for you to read whenever your mind starts convincing you of things that simply aren't true.

You told me that, to you, a good person is someone who smiles all the time no matter what they're feeling, someone who makes other people happy, someone who doesn't leave a mess behind in other people's lives.

But sweetheart... that's such an impossible standard to hold yourself to.

Good people aren't the ones who never break. 
They're the ones who keep choosing kindness even when life isn't kind to them. 

You've been one... all along.
That's simply who you are.

And if you ever forget that...

Come back and read this again.

Because I'll keep reminding you for as long as it takes.

You don't have to smile all the time. 
You're allowed to be tired. 
You're allowed to cry. 
You're allowed to have bad days, to feel angry, confused, lost, or heavy. 
None of those things make you any less deserving of love.
You don't exist just to make everyone else happy.
You deserve happiness too.

I wish you could see yourself the way i see you.

You are the brightest star in the sky. 
Not because you're always shining, but because even when clouds cover you, I know you're still there. 
Your light doesn't disappear just because you can't see it.

You are enough.
not "You will be enough someday."
not "You'll be enough once you've fixed yourself."
You. right now.
even with your overthinking.
even with your messy emotions.
even with your flaws.
with every piece of you that you want to hide.
You are enough.

There is nothing you could ever do that would make me think you're undeserving of happiness. 
There is nothing you could ever say that would make me believe you're a bad person.

On the days you can't believe in yourself, borrow my belief in you until yours comes back.

Remember
You are loved.
You are wanted.
You are appreciated.
You are worthy.
You deserve happiness.
and no matter how loud your doubts become, they'll never change the fact that you are more than enough.
always.
`;

export function LetterScreen() {
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
            ♡ for the brightest star in the sky ♡
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
            {!done && (
              <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }} className="text-pink-400">
                ▍
              </motion.span>
            )}
          </pre>
        </div>
        {!done && (
          <div className="mt-6 text-center">
            <button onClick={() => setShown(LETTER.length)} className="text-pink-400 underline" style={{ fontFamily: "var(--font-hand)", fontSize: "1.1rem" }}>
              skip typing
            </button>
          </div>
        )}
      </div>
    </div>
  );
}