
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="https://www.100xengineers.com/_next/image?url=%2Fassets%2Flogo.png&w=384&q=75" 
            alt="100x Engineers Logo" 
            className="logo h-8"
          />
          <span className="font-bold text-xl hidden md:inline-block">Mini-Capstone Projects</span>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};
