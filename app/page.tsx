import DatePicker from "@/components/ui/DatePicker";
import DarkVeil from "../src/blocks/Backgrounds/DarkVeil/DarkVeil";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import ThemeAwareBackground from "../components/ui/theme-aware-background";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Theme-aware Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <ThemeAwareBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-4">
        <div className="text-center text-foreground max-w-2xl mx-auto">
          {/* Main Title */}
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Day Counter
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
              Count the days from any date to any date
            </p>
          </div>

          {/* DatePicker with enhanced styling */}
          <div className="animate-fade-in-up animation-delay-200">
            <DatePicker />
          </div>
        </div>
      </div>
    </div>
  );
}
