"use client";

import { useState, useMemo } from "react";
import type { Question } from "@/lib/types";
import ExamQuestionCard from "./ExamQuestionCard";
import { Button } from "@/components/ui/button";
import QuizProgress from "@/components/quiz/QuizProgress";

type OptionKey = 'a' | 'b' | 'c';
type UserAnswers = {
  [questionId: number]: OptionKey;
};

interface ExamClientProps {
  questions: Question[];
}

export default function ExamClient({ questions }: ExamClientProps) {
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelectAnswer = (questionId: number, option: OptionKey) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  const handleSubmit = () => {
    if (Object.keys(userAnswers).length < questions.length) {
        if (!window.confirm("No has respondido todas las preguntas. ¿Quieres continuar y ver los resultados de todos modos?")) {
            return;
        }
    }
    setIsSubmitted(true);
  };

  const handleTryAgain = () => {
    window.location.reload();
  };

  const score = useMemo(() => {
    let correct = 0;
    let incorrect = 0;
    if (isSubmitted) {
      questions.forEach((q) => {
        const userAnswer = userAnswers[q.id];
        if (userAnswer && userAnswer === q.answer) {
          correct++;
        } else if (userAnswer) {
          incorrect++;
        }
      });
    } else {
        // While not submitted, just count answered questions
        return { correct: 0, incorrect: 0, answered: Object.keys(userAnswers).length };
    }
    return { correct, incorrect, answered: Object.keys(userAnswers).length };
  }, [isSubmitted, userAnswers, questions]);

  return (
    <>
      <div className="sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10 py-4 mb-4 border-b">
        <QuizProgress
          total={questions.length}
          correct={score.correct}
          incorrect={score.incorrect}
          answered={score.answered}
          isSubmitted={isSubmitted}
        />
      </div>

      <div className="space-y-4">
        {questions.map((question) => (
          <ExamQuestionCard
            key={question.id}
            question={question}
            onSelectAnswer={handleSelectAnswer}
            selectedAnswer={userAnswers[question.id] || null}
            isSubmitted={isSubmitted}
          />
        ))}
      </div>

      {!isSubmitted && (
        <div className="mt-8 text-center">
          <Button
            size="lg"
            onClick={handleSubmit}
            disabled={Object.keys(userAnswers).length === 0}
          >
            Ver Resultados
          </Button>
          <p className="text-sm text-muted-foreground mt-2">
            {questions.length - score.answered} preguntas restantes.
          </p>
        </div>
      )}

      {isSubmitted && (
        <div className="mt-8 text-center bg-card border rounded-lg p-6">
          <p className="text-xl font-bold mb-4">
            Puntuación Final: {score.correct} de {questions.length}
          </p>
          <Button
            size="lg"
            onClick={handleTryAgain}
          >
            Intentar de Nuevo
          </Button>
        </div>
      )}
    </>
  );
}
