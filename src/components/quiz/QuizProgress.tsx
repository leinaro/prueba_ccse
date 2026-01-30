import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle, HelpCircle } from "lucide-react";

interface QuizProgressProps {
  total: number;
  correct: number;
  incorrect: number;
  answered?: number;
  current?: number; // Optional for task-based quizzes
  isSubmitted?: boolean; // Optional to change display mode
}

export default function QuizProgress({
  total,
  correct,
  incorrect,
  answered,
  current,
  isSubmitted,
}: QuizProgressProps) {
  
  const answeredCount = answered ?? 0;
  const progressPercentage = total > 0 ? (answeredCount / total) * 100 : 0;

  return (
    <Card className="shadow-none border-none bg-transparent">
      <CardContent className="p-0">
        <div className="flex justify-between items-center mb-2 text-sm text-muted-foreground">
          {isSubmitted || current === undefined ? (
            <span>{answeredCount} de {total} respondidas</span>
          ) : (
            <span>Pregunta {current} de {total}</span>
          )}
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-success font-medium">
              <CheckCircle className="h-4 w-4" /> {correct}
            </span>
            <span className="flex items-center gap-1 text-destructive font-medium">
              <XCircle className="h-4 w-4" /> {incorrect}
            </span>
          </div>
        </div>
        <Progress value={progressPercentage} className="w-full h-2" />
      </CardContent>
    </Card>
  );
}
