import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SurpriseScreen } from "@/components/SurpriseScreen";
import { LetterScreen } from "@/components/LetterScreen";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [screen, setScreen] = useState<"surprise" | "letter">("surprise");

  return screen === "surprise" ? (
    <SurpriseScreen onClick={() => setScreen("letter")} />
  ) : (
    <LetterScreen />
  );
}
