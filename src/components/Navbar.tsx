import { Button } from "@/components/ui/button";
import { Code, Menu, X, Trophy, User, BookOpen, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { AuthDialog } from "./AuthDialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const { user, signOut } = useAuth();

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
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.user_metadata?.avatar_url} />
                    <AvatarFallback>
                      {user.user_metadata?.full_name?.charAt(0) || user.email?.charAt(0) || 'U'}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {user.user_metadata?.full_name || 'Anonymous'}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" size="sm" onClick={() => setShowAuthDialog(true)}>
                <User className="w-4 h-4 mr-1" />
                Login
              </Button>
              <Button variant="hero" size="sm" onClick={() => setShowAuthDialog(true)}>
                Start Playing
              </Button>
            </>
          )}
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
                {user ? (
                  <>
                    <div className="flex items-center gap-2 px-3 py-2 text-sm">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={user.user_metadata?.avatar_url} />
                        <AvatarFallback>
                          {user.user_metadata?.full_name?.charAt(0) || user.email?.charAt(0) || 'U'}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">
                        {user.user_metadata?.full_name || 'Anonymous'}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="justify-start" onClick={() => signOut()}>
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="ghost" size="sm" className="justify-start" onClick={() => setShowAuthDialog(true)}>
                      <User className="w-4 h-4 mr-2" />
                      Login
                    </Button>
                    <Button variant="hero" size="sm" onClick={() => setShowAuthDialog(true)}>
                      Start Playing
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
      <AuthDialog open={showAuthDialog} onOpenChange={setShowAuthDialog} />
    </header>
  );
};

export default Navbar;