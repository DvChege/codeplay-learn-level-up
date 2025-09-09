import { Button } from "@/components/ui/button";
import { Code, Menu, X, Trophy, User, BookOpen } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            CodePlay
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#courses" className="text-muted-foreground hover:text-primary transition-smooth">
            Courses
          </a>
          <a href="#challenges" className="text-muted-foreground hover:text-primary transition-smooth">
            Challenges
          </a>
          <a href="#leaderboard" className="text-muted-foreground hover:text-primary transition-smooth">
            Leaderboard
          </a>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">
            About
          </a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">
            <User className="w-4 h-4 mr-1" />
            Login
          </Button>
          <Button variant="hero" size="sm">
            Start Playing
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 md:hidden">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a 
                href="#courses" 
                className="block text-muted-foreground hover:text-primary transition-smooth py-2"
                onClick={() => setIsOpen(false)}
              >
                <BookOpen className="w-4 h-4 inline mr-2" />
                Courses
              </a>
              <a 
                href="#challenges" 
                className="block text-muted-foreground hover:text-primary transition-smooth py-2"
                onClick={() => setIsOpen(false)}
              >
                <Trophy className="w-4 h-4 inline mr-2" />
                Challenges
              </a>
              <a 
                href="#leaderboard" 
                className="block text-muted-foreground hover:text-primary transition-smooth py-2"
                onClick={() => setIsOpen(false)}
              >
                <Trophy className="w-4 h-4 inline mr-2" />
                Leaderboard
              </a>
              <a 
                href="#about" 
                className="block text-muted-foreground hover:text-primary transition-smooth py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <Button variant="ghost" size="sm" className="justify-start">
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
                <Button variant="hero" size="sm">
                  Start Playing
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;