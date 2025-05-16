
import { Header } from "@/components/Header";
import { ProblemCard } from "@/components/ProblemCard";
import { problemStatements } from "@/data/problemStatements";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Mini-Capstone Project
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
              Applied Generative AI Cohort Problem Statements
            </p>
            <Button className="animate-fade-in" size="lg">
              Start Building
            </Button>
          </div>
        </section>
        
        {/* Problem Statements Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Problem Statements</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problemStatements.map((problem) => (
                <ProblemCard key={problem.id} problem={problem} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Call To Action */}
        <section className="py-16 bg-gradient-to-b from-background to-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Choose one of the problem statements above and submit your project for review.
            </p>
            <Button size="lg">
              Submit Your Project
            </Button>
          </div>
        </section>
      </main>
      
      <footer className="bg-card py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 100xEngineers. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
