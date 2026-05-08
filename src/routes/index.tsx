import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SurpriseScreen } from "@/components/SurpriseScreen";
import { LetterScreen } from "@/components/LetterScreen";
import { JarScreen } from "@/components/JarScreen";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [screen, setScreen] = useState<"surprise" | "letter" | "jar">("surprise");

  return (
    <AnimatePresence mode="wait">
      {screen === "surprise" && (
        <SurpriseScreen key="s" onClick={() => setScreen("letter")} />
      )}
      {screen === "letter" && (
        <LetterScreen key="l" onContinue={() => setScreen("jar")} />
      )}
      {screen === "jar" && <JarScreen key="j" />}
    </AnimatePresence>
  );
}
