
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export interface ProblemStatement {
  id: number;
  title: string;
  problem: string;
  solution: string;
  scope: string[];
  deliverables?: string[];
  isOpenCategory?: boolean;
}

interface ProblemCardProps {
  problem: ProblemStatement;
}

export const ProblemCard = ({ problem }: ProblemCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="bg-card text-card-foreground rounded-lg shadow p-6 cursor-pointer problem-card card-hover"
        onClick={() => setIsOpen(true)}
      >
        <div className="problem-card-content">
          <h3 className="font-bold text-xl mb-3">{problem.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {problem.problem.substring(0, 150)}...
          </p>
        </div>
        <Button 
          className="mt-4 w-full" 
          variant="outline"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(true);
          }}
        >
          View Details
        </Button>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{problem.title}</DialogTitle>
          </DialogHeader>
          
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Problem</h3>
              <p className="whitespace-pre-line">{problem.problem}</p>
            </div>
            
            {!problem.isOpenCategory && (
              <>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Solution</h3>
                  <p className="whitespace-pre-line">{problem.solution}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Scope</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {problem.scope.map((item, index) => (
                      <li key={index} className="whitespace-pre-line">{item}</li>
                    ))}
                  </ul>
                </div>
                
                {problem.deliverables && (
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Deliverables</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {problem.deliverables.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
            
            {problem.isOpenCategory && (
              <p>
                To submit your idea for the Open Category, please fill out the Tally form. Your idea and draft will be reviewed by our team, and we will inform you if you can proceed to build it.
              </p>
            )}
            
            <div className="pt-4">
              <Button className="w-full">Submit Project</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
