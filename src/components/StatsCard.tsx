import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
}

const StatsCard = ({ title, value, description, icon: Icon, trend, trendValue }: StatsCardProps) => {
  const trendColors = {
    up: "text-success",
    down: "text-error", 
    neutral: "text-info"
  };

  return (
    <Card className="gradient-card border-border/50 hover:border-primary/50 transition-smooth">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <span>{description}</span>
          {trend && trendValue && (
            <span className={trendColors[trend]}>
              {trend === "up" ? "↗" : trend === "down" ? "↙" : "→"} {trendValue}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;