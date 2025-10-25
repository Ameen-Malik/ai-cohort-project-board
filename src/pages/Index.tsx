
//import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { ProblemCard } from "@/components/ProblemCard";
import { problemStatements } from "@/data/problemStatements";
import { Button } from "@/components/ui/button";
//import { Dialog, DialogContent } from "@/components/ui/dialog";

const Index = () => {
  //const [isFormOpen, setIsFormOpen] = useState(false);
  
  // Initialize Tally embed script when the dialog is opened
  /*useEffect(() => {
    if (isFormOpen) {
      // Check if Tally script exists
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        document.body.appendChild(script);
      } else {
        // If script exists, trigger Tally to load the form
        // @ts-ignore
        if (window.Tally && typeof window.Tally.loadEmbeds === "function") {
          // @ts-ignore
          window.Tally.loadEmbeds();
        }
      }
    }
  }, [isFormOpen]);*/
  
  return <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Mini-Hackathon
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
            Applied Generative AI Cohort Problem Statements
          </p>
          <Button 
            className="animate-fade-in" 
            size="lg"
            // REMOVE: onClick={() => setIsFormOpen(true)}
            // ADD Tally data attributes:
            data-tally-open="n02xvB"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
          >
            Select your Project
          </Button>
        </div>
      </section>
      
      {/* Problem Statements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Problem Statements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemStatements.map(problem => <ProblemCard key={problem.id} problem={problem} />)}
          </div>
        </div>
      </section>
      
      {/* Call To Action */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready with your Project?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {/* Choose one of the problem statements above and submit your project for review. */}
            Go ahead and submit your projects for review. Make sure to keep your repos 'Public' if you're using AI dev tools like lovable!!
          </p>
          <Button 
            className="animate-fade-in" 
            size="lg"
            // REMOVE: onClick={() => setIsFormOpen(true)}
            // ADD Tally data attributes:
            data-tally-open="w56zvZ"
            data-tally-emoji-text="🚀"
            data-tally-emoji-animation="wave"
          >
            Submit your Project
          </Button>
          {/* <Button 
            size="lg"
            onClick={() => window.open("https://100xengineers.onlineclass.site/student/classes", "_blank")}
          >
            Submit Your Project
          </Button> */}
        </div>
      </section>
      
      <footer className="bg-card py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 100xEngineers. All rights reserved.
          </p>
        </div>
      </footer>

            
    </div>;
};

export default Index;
