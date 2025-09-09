import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import GameCard from "@/components/GameCard";
import StatsCard from "@/components/StatsCard";
import { 
  Code, 
  Trophy, 
  Users, 
  Star, 
  Play, 
  Target, 
  BookOpen, 
  Zap,
  Award,
  TrendingUp,
  Globe
} from "lucide-react";
import heroImage from "@/assets/hero-coding.jpg";

const Index = () => {
  const featuredCourses = [
    {
      title: "Python Basics",
      description: "Learn Python from scratch with interactive exercises",
      progress: 0,
      level: 1,
      language: "Python" as const,
      difficulty: "Beginner" as const,
      stars: 0,
    },
    {
      title: "JavaScript Fundamentals", 
      description: "Master the language that powers the web",
      progress: 0,
      level: 1,
      language: "JavaScript" as const,
      difficulty: "Beginner" as const,
      stars: 0,
    },
    {
      title: "Web Development",
      description: "Build modern websites with HTML, CSS & JS",
      progress: 0,
      level: 2,
      language: "JavaScript" as const,
      difficulty: "Intermediate" as const,
      stars: 0,
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
          
          <div className="relative container mx-auto px-4 text-center z-10">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-4 py-1">
              🎮 SDG 4: Quality Education
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Learn to Code Through
              <span className="block bg-gradient-hero bg-clip-text text-transparent">
                Interactive Games
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Master Python and JavaScript with gamified challenges, instant feedback, 
              and step-by-step progression. Make coding fun and accessible for everyone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                Start Learning Free
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Trophy className="w-5 h-5 mr-2" />
                View Challenges
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Active Learners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-success">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-warning">1M+</div>
                <div className="text-sm text-muted-foreground">Challenges Solved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-info">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="courses" className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose CodePlay?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the future of coding education with our innovative approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatsCard
              title="Gamified Learning"
              value="🎮"
              description="Earn XP, badges, and climb leaderboards while coding"
              icon={Trophy}
            />
            <StatsCard
              title="Instant Feedback"
              value="⚡"
              description="Get immediate results and hints for your code"
              icon={Zap}
            />
            <StatsCard
              title="Step-by-Step"
              value="📚"
              description="Structured curriculum from basics to advanced"
              icon={BookOpen}
            />
            <StatsCard
              title="Community"
              value="👥"
              description="Learn with thousands of coding enthusiasts"
              icon={Users}
            />
          </div>
        </section>

        {/* Featured Courses */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Coding Journey
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose your programming language and begin with interactive lessons
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course, index) => (
              <GameCard key={index} {...course} />
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              <BookOpen className="w-4 h-4 mr-2" />
              View All Courses
            </Button>
          </div>
        </section>

        {/* Learning Path Preview */}
        <section className="bg-secondary/20 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Structured Learning Paths
              </h2>
              <p className="text-muted-foreground text-lg mb-12">
                Follow carefully designed curricula that take you from beginner to expert
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card className="gradient-card border-info/20 text-left">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-info/20 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🐍</span>
                      </div>
                      <div>
                        <CardTitle className="text-xl">Python Mastery</CardTitle>
                        <CardDescription>8 levels • 45 challenges</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      From variables to web frameworks, master Python step by step
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-info/20 text-info border-info/30">Beginner Friendly</Badge>
                      <span className="text-xs text-success">Free Forever</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="gradient-card border-warning/20 text-left">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <div>
                        <CardTitle className="text-xl">JavaScript Journey</CardTitle>
                        <CardDescription>10 levels • 60 challenges</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Build interactive websites and modern applications
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge className="bg-warning/20 text-warning border-warning/30">Most Popular</Badge>
                      <span className="text-xs text-success">Free Forever</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Button variant="hero" size="lg">
                <Target className="w-4 h-4 mr-2" />
                Explore Learning Paths
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center gradient-card rounded-3xl p-12 border border-primary/20">
            <div className="mb-6">
              <Award className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Level Up Your Skills?
              </h2>
              <p className="text-muted-foreground text-lg">
                Join thousands of learners who are mastering programming through CodePlay's 
                innovative gamified approach. Start your journey today!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gaming" size="lg" className="text-lg px-8 py-4">
                <Play className="w-5 h-5 mr-2" />
                Start Playing Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                <Globe className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary/20 py-12 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Code className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">CodePlay</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Making programming education fun, accessible, and effective for everyone.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Courses</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">Python Basics</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">JavaScript</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Web Development</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Data Structures</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">Discord</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Forums</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Leaderboard</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 CodePlay. Built for SDG 4 - Quality Education. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
