import type { Question } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type OptionKey = 'a' | 'b' | 'c';

interface QuestionCardProps {
  question: Question;
  onSelectAnswer: (option: OptionKey) => void;
  selectedAnswer: OptionKey | null;
  isCorrect: boolean | null;
  correctAnswer: OptionKey;
}

export default function QuestionCard({
  question,
  onSelectAnswer,
  selectedAnswer,
  isCorrect,
  correctAnswer,
}: QuestionCardProps) {

  const getButtonClass = (option: OptionKey) => {
    if (!selectedAnswer) {
      return "justify-start text-left h-auto py-3";
    }

    const isSelected = selectedAnswer === option;
    const isTheCorrectAnswer = correctAnswer === option;

    if (isSelected) {
      return isCorrect ? "border-2 border-success bg-success/10 justify-start text-left h-auto py-3" : "border-2 border-destructive bg-destructive/10 justify-start text-left h-auto py-3";
    }
    
    if (isTheCorrectAnswer) {
        return "border-2 border-success bg-success/10 justify-start text-left h-auto py-3";
    }

    return "justify-start text-left h-auto py-3 opacity-60";
  };

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl leading-snug">({question.id}) {question.question}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3">
          {(Object.keys(question.options) as OptionKey[]).map((key) => (
            question.options[key] && (
              <Button
                key={key}
                variant="outline"
                className={cn(
                  getButtonClass(key),
                  !selectedAnswer && "hover:bg-transparent hover:border-primary"
                )}
                onClick={() => onSelectAnswer(key)}
                disabled={!!selectedAnswer}
              >
                <span className="font-bold mr-3">{key.toUpperCase()}.</span>
                <span className="flex-1 whitespace-normal">{question.options[key]}</span>
              </Button>
            )
          ))}
        </div>
        {selectedAnswer && (
          <div className="mt-6 text-center font-bold text-lg">
            {isCorrect ? (
              <p className="text-success">¡Correcto!</p>
            ) : (
              <p className="text-destructive">Incorrecto</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
