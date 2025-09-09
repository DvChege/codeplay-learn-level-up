import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Lock } from "lucide-react";

interface PathStep {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  locked: boolean;
  language: "Python" | "JavaScript";
}

interface LearningPathProps {
  title: string;
  description: string;
  progress: number;
  steps: PathStep[];
}

const LearningPath = ({ title, description, progress, steps }: LearningPathProps) => {
  const completedSteps = steps.filter(step => step.completed).length;

  return (
    <Card className="gradient-card border-border/50 w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="text-muted-foreground mt-1">
              {description}
            </CardDescription>
          </div>
          <Badge variant="secondary" className="text-xs">
            {completedSteps}/{steps.length} Complete
          </Badge>
        </div>
        
        <div className="space-y-2 mt-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Overall Progress</span>
            <span className="text-foreground font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-3">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center gap-4 p-3 rounded-lg bg-background/50 border border-border/30 transition-smooth hover:border-primary/30">
              <div className="flex-shrink-0">
                {step.completed ? (
                  <CheckCircle className="w-5 h-5 text-success" />
                ) : step.locked ? (
                  <Lock className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <Circle className="w-5 h-5 text-primary" />
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className={`font-medium text-sm ${step.completed ? 'text-success' : step.locked ? 'text-muted-foreground' : 'text-foreground'}`}>
                    {step.title}
                  </h4>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${step.language === 'Python' ? 'bg-info/20 text-info border-info/30' : 'bg-warning/20 text-warning border-warning/30'}`}
                  >
                    {step.language}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground truncate">
                  {step.description}
                </p>
              </div>
              
              <div className="flex-shrink-0 text-xs text-muted-foreground">
                Step {index + 1}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LearningPath;