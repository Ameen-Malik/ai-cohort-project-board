import { ThemeToggle } from "./ThemeToggle";
export const Header = () => {
  return <header className="border-b border-border bg-background sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          
          <span className="font-bold text-xl hidden md:inline-block">
            100x Engineers
          </span>
        </div>
        <ThemeToggle />
      </div>
    </header>;
};