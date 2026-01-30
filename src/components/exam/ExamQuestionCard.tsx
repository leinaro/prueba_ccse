"use client";

import type { Question } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type OptionKey = 'a' | 'b' | 'c';

interface ExamQuestionCardProps {
  question: Question;
  onSelectAnswer: (questionId: number, option: OptionKey) => void;
  selectedAnswer: OptionKey | null;
  isSubmitted: boolean;
}

export default function ExamQuestionCard({
  question,
  onSelectAnswer,
  selectedAnswer,
  isSubmitted,
}: ExamQuestionCardProps) {

  const getButtonClass = (option: OptionKey) => {
    // If the exam is submitted, we show the results.
    if (isSubmitted) {
      const isTheCorrectAnswer = option === question.answer;
      const isTheSelectedAnswer = option === selectedAnswer;

      if (isTheCorrectAnswer) {
        // Always highlight the correct answer in green.
        return "border-2 border-success bg-success/10 justify-start text-left h-auto py-3";
      }
      if (isTheSelectedAnswer && !isTheCorrectAnswer) {
        // If this was selected but is wrong, highlight in red.
        return "border-2 border-destructive bg-destructive/10 justify-start text-left h-auto py-3";
      }
      // Fade out other non-correct, non-selected options.
      return "justify-start text-left h-auto py-3 opacity-50";
    }

    // If the exam is active, just highlight the selected answer.
    return selectedAnswer === option
      ? "border-2 border-primary justify-start text-left h-auto py-3"
      : "justify-start text-left h-auto py-3";
  };

  return (
    <Card className={cn("w-full shadow-sm border transition-all")}>
      <CardHeader>
        <CardTitle className="text-base leading-snug">({question.id}) {question.question}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3">
          {(Object.keys(question.options) as OptionKey[]).map((key) => (
            question.options[key] && (
              <Button
                key={key}
                variant="outline"
                className={cn(
                  "hover:bg-transparent hover:border-primary",
                  getButtonClass(key)
                )}
                onClick={() => onSelectAnswer(question.id, key)}
                disabled={isSubmitted}
              >
                <span className="font-bold mr-3">{key.toUpperCase()}.</span>
                <span className="flex-1 whitespace-normal">{question.options[key]}</span>
              </Button>
            )
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
