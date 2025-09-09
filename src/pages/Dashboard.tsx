import Navbar from "@/components/Navbar";
import StatsCard from "@/components/StatsCard";
import GameCard from "@/components/GameCard";
import LearningPath from "@/components/LearningPath";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Trophy, Target, Flame, Star, BookOpen, Award } from "lucide-react";

const Dashboard = () => {
  const pythonCourses = [
    {
      title: "Variables & Data Types",
      description: "Learn the fundamentals of Python variables and basic data types",
      progress: 100,
      level: 1,
      language: "Python" as const,
      difficulty: "Beginner" as const,
      stars: 3,
    },
    {
      title: "Control Structures",
      description: "Master if statements, loops, and conditional logic",
      progress: 75,
      level: 2,
      language: "Python" as const,
      difficulty: "Beginner" as const,
      stars: 2,
    },
    {
      title: "Functions & Modules",
      description: "Create reusable code with functions and modules",
      progress: 30,
      level: 3,
      language: "Python" as const,
      difficulty: "Intermediate" as const,
      stars: 1,
    },
    {
      title: "Object-Oriented Programming",
      description: "Understanding classes, objects, and inheritance",
      progress: 0,
      level: 4,
      language: "Python" as const,
      difficulty: "Advanced" as const,
      stars: 0,
      isLocked: true,
    },
  ];

  const jsCourses = [
    {
      title: "JavaScript Basics",
      description: "Variables, functions, and basic DOM manipulation",
      progress: 90,
      level: 1,
      language: "JavaScript" as const,
      difficulty: "Beginner" as const,
      stars: 3,
    },
    {
      title: "Async Programming",
      description: "Promises, async/await, and API calls",
      progress: 45,
      level: 2,
      language: "JavaScript" as const,
      difficulty: "Intermediate" as const,
      stars: 1,
    },
  ];

  const learningPaths = [
    {
      title: "Python Fundamentals",
      description: "Complete beginner's path to Python mastery",
      progress: 68,
      steps: [
        { id: 1, title: "Setup & First Program", description: "Install Python and write Hello World", completed: true, locked: false, language: "Python" as const },
        { id: 2, title: "Variables & Input", description: "Store data and get user input", completed: true, locked: false, language: "Python" as const },
        { id: 3, title: "Conditionals", description: "Make decisions with if/else", completed: true, locked: false, language: "Python" as const },
        { id: 4, title: "Loops", description: "Repeat code with for and while loops", completed: false, locked: false, language: "Python" as const },
        { id: 5, title: "Functions", description: "Create reusable code blocks", completed: false, locked: true, language: "Python" as const },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Header */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, Coder! 👋</h1>
              <p className="text-muted-foreground">Continue your programming journey</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-success/20 text-success border-success/30">
                <Flame className="w-3 h-3 mr-1" />
                5 Day Streak
              </Badge>
              <Badge variant="outline" className="bg-warning/20 text-warning border-warning/30">
                <Trophy className="w-3 h-3 mr-1" />
                Level 12
              </Badge>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Challenges Completed"
              value={47}
              description="This month"
              icon={Target}
              trend="up"
              trendValue="+12%"
            />
            <StatsCard
              title="Code Streak"
              value="5 days"
              description="Current streak"
              icon={Flame}
              trend="up"
              trendValue="Personal best"
            />
            <StatsCard
              title="XP Earned"
              value="2,847"
              description="Total experience"
              icon={Star}
              trend="up"
              trendValue="+340"
            />
            <StatsCard
              title="Rank"
              value="#156"
              description="Global leaderboard"
              icon={Award}
              trend="up"
              trendValue="+23"
            />
          </div>
        </section>

        {/* Learning Paths */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Learning Paths</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {learningPaths.map((path, index) => (
              <LearningPath key={index} {...path} />
            ))}
          </div>
        </section>

        {/* Courses */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Continue Learning</h2>
          </div>
          
          <div className="space-y-8">
            {/* Python Courses */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-info">🐍 Python Track</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pythonCourses.map((course, index) => (
                  <GameCard key={index} {...course} />
                ))}
              </div>
            </div>

            {/* JavaScript Courses */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-warning">⚡ JavaScript Track</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jsCourses.map((course, index) => (
                  <GameCard key={index} {...course} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center gradient-card rounded-2xl p-8 border border-primary/20">
            <Trophy className="w-12 h-12 text-warning mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Ready for a Challenge?</h3>
            <p className="text-muted-foreground mb-6">
              Test your skills with daily coding challenges and compete with other learners
            </p>
            <Button variant="gaming" size="lg">
              <Target className="w-4 h-4 mr-2" />
              View Challenges
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;