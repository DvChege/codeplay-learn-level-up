import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Play, Trophy, Star } from "lucide-react";

interface GameCardProps {
  title: string;
  description: string;
  progress: number;
  level: number;
  language: "Python" | "JavaScript";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  stars: number;
  isLocked?: boolean;
}

const GameCard = ({ 
  title, 
  description, 
  progress, 
  level, 
  language, 
  difficulty, 
  stars,
  isLocked = false 
}: GameCardProps) => {
  const languageColors = {
    Python: "bg-info text-white",
    JavaScript: "bg-warning text-background"
  };

  const difficultyColors = {
    Beginner: "bg-success text-white",
    Intermediate: "bg-warning text-background", 
    Advanced: "bg-error text-white"
  };

  return (
    <Card className="gradient-card border-border/50 hover:border-primary/50 transition-smooth group hover:shadow-card">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge className={languageColors[language]} variant="secondary">
            {language}
          </Badge>
          <Badge className={difficultyColors[difficulty]} variant="outline">
            {difficulty}
          </Badge>
        </div>
        
        <CardTitle className="text-lg group-hover:text-primary transition-smooth">
          Level {level}: {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="text-foreground font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(3)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < stars ? 'fill-warning text-warning' : 'text-muted-foreground'}`} 
              />
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            {progress === 100 && (
              <Trophy className="w-4 h-4 text-warning" />
            )}
            <Button 
              size="sm" 
              variant={isLocked ? "outline" : "hero"}
              disabled={isLocked}
              className="min-w-20"
            >
              <Play className="w-3 h-3" />
              {isLocked ? "Locked" : progress === 0 ? "Start" : "Continue"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;