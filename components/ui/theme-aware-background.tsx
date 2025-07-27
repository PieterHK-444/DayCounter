"use client";

import { useTheme } from "next-themes";
import DarkVeil from "../../src/blocks/Backgrounds/DarkVeil/DarkVeil";

export default function ThemeAwareBackground() {
  const { resolvedTheme } = useTheme();

  if (resolvedTheme === "dark") {
    return (
      <DarkVeil
        hueShift={180}
        noiseIntensity={0.0}
        scanlineIntensity={0.2}
        speed={0.3}
        scanlineFrequency={0.0}
        warpAmount={0.1}
        resolutionScale={1}
      />
    );
  }

  // Light theme background
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
    </div>
  );
}
