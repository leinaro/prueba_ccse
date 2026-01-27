import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

interface QuizProgressProps {
  current: number;
  total: number;
  correct: number;
  incorrect: number;
}

export default function QuizProgress({ current, total, correct, incorrect }: QuizProgressProps) {
  const progressPercentage = total > 0 ? (current / total) * 100 : 0;

  return (
    <Card className="mb-6 shadow-md">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2 text-sm text-muted-foreground">
          <span>Pregunta {current} de {total}</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-success font-medium">
              <CheckCircle className="h-4 w-4" /> {correct}
            </span>
            <span className="flex items-center gap-1 text-destructive font-medium">
              <XCircle className="h-4 w-4" /> {incorrect}
            </span>
          </div>
        </div>
        <Progress value={progressPercentage} className="w-full h-2 [&>div]:bg-accent" />
      </CardContent>
    </Card>
  );
}
