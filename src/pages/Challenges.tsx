import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Clock, Trophy, Target, Star, Code, Users, Calendar } from "lucide-react";

const Challenges = () => {
  const dailyChallenge = {
    title: "FizzBuzz Deluxe",
    description: "Create an enhanced FizzBuzz that handles multiple divisors",
    language: "Python",
    difficulty: "Medium",
    timeLeft: "14h 23m",
    participants: 2847,
    xpReward: 150,
    completed: false
  };

  const weeklyChallenge = {
    title: "Build a Todo API",
    description: "Create a REST API for managing todo items with full CRUD operations",
    language: "JavaScript",
    difficulty: "Hard",
    timeLeft: "4d 12h",
    participants: 956,
    xpReward: 500,
    completed: false
  };

  const completedChallenges = [
    {
      title: "Prime Number Generator",
      description: "Generate prime numbers up to a given limit",
      language: "Python",
      difficulty: "Easy",
      xpEarned: 75,
      stars: 3,
      completedAt: "2 days ago"
    },
    {
      title: "Password Validator",
      description: "Validate password strength based on multiple criteria",
      language: "JavaScript",
      difficulty: "Medium",
      xpEarned: 120,
      stars: 2,
      completedAt: "5 days ago"
    },
    {
      title: "Binary Search Tree",
      description: "Implement a binary search tree with insertion and search",
      language: "Python",
      difficulty: "Hard",
      xpEarned: 250,
      stars: 3,
      completedAt: "1 week ago"
    }
  ];

  const upcomingChallenges = [
    {
      title: "Sorting Algorithm Race",
      description: "Compare different sorting algorithms for performance",
      language: "Python",
      difficulty: "Medium",
      startsIn: "Tomorrow",
      xpReward: 180
    },
    {
      title: "React Component Library",
      description: "Build reusable React components with TypeScript",
      language: "JavaScript",
      difficulty: "Hard",
      startsIn: "3 days",
      xpReward: 400
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy": return "bg-success/20 text-success border-success/30";
      case "medium": return "bg-warning/20 text-warning border-warning/30";
      case "hard": return "bg-error/20 text-error border-error/30";
      default: return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  const getLanguageColor = (language: string) => {
    return language === "Python" 
      ? "bg-info/20 text-info border-info/30"
      : "bg-warning/20 text-warning border-warning/30";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Header */}
        <section className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Coding Challenges</h1>
            <p className="text-muted-foreground text-lg">
              Test your skills, compete with others, and level up your programming abilities
            </p>
          </div>
        </section>

        {/* Active Challenges */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Active Challenges</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {/* Daily Challenge */}
            <Card className="gradient-card border-primary/20 glow-primary">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    <Calendar className="w-3 h-3 mr-1" />
                    Daily Challenge
                  </Badge>
                  <Badge className={getDifficultyColor(dailyChallenge.difficulty)}>
                    {dailyChallenge.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{dailyChallenge.title}</CardTitle>
                <CardDescription>{dailyChallenge.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <Badge className={getLanguageColor(dailyChallenge.language)}>
                      {dailyChallenge.language}
                    </Badge>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {dailyChallenge.participants.toLocaleString()} participants
                    </span>
                  </div>
                  <span className="text-warning font-medium">+{dailyChallenge.xpReward} XP</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {dailyChallenge.timeLeft} remaining
                  </div>
                  <Button variant="hero" size="sm">
                    <Code className="w-3 h-3 mr-1" />
                    Start Challenge
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Challenge */}
            <Card className="gradient-card border-accent/20">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-accent/20 text-accent border-accent/30">
                    <Trophy className="w-3 h-3 mr-1" />
                    Weekly Challenge
                  </Badge>
                  <Badge className={getDifficultyColor(weeklyChallenge.difficulty)}>
                    {weeklyChallenge.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{weeklyChallenge.title}</CardTitle>
                <CardDescription>{weeklyChallenge.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <Badge className={getLanguageColor(weeklyChallenge.language)}>
                      {weeklyChallenge.language}
                    </Badge>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {weeklyChallenge.participants.toLocaleString()} participants
                    </span>
                  </div>
                  <span className="text-warning font-medium">+{weeklyChallenge.xpReward} XP</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {weeklyChallenge.timeLeft} remaining
                  </div>
                  <Button variant="success" size="sm">
                    <Code className="w-3 h-3 mr-1" />
                    Start Challenge
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Completed Challenges */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-6 h-6 text-success" />
            <h2 className="text-2xl font-bold">Completed Challenges</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {completedChallenges.map((challenge, index) => (
              <Card key={index} className="gradient-card border-success/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getLanguageColor(challenge.language)}>
                      {challenge.language}
                    </Badge>
                    <Badge className={getDifficultyColor(challenge.difficulty)}>
                      {challenge.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{challenge.title}</CardTitle>
                  <CardDescription>{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(3)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < challenge.stars ? 'fill-warning text-warning' : 'text-muted-foreground'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-success font-medium">+{challenge.xpEarned} XP</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{challenge.completedAt}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Challenges */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-6 h-6 text-info" />
            <h2 className="text-2xl font-bold">Upcoming Challenges</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingChallenges.map((challenge, index) => (
              <Card key={index} className="gradient-card border-info/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getLanguageColor(challenge.language)}>
                      {challenge.language}
                    </Badge>
                    <Badge className={getDifficultyColor(challenge.difficulty)}>
                      {challenge.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{challenge.title}</CardTitle>
                  <CardDescription>{challenge.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-info font-medium">+{challenge.xpReward} XP</span>
                    <span className="text-sm text-muted-foreground">Starts {challenge.startsIn}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Challenges;