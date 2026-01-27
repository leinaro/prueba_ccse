"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import type { Question } from "@/lib/types";
import QuizProgress from "./QuizProgress";
import QuestionCard from "./QuestionCard";

type OptionKey = 'a' | 'b' | 'c';

interface QuizClientProps {
  questions: Question[];
  taskId: string;
}

// Function to shuffle array
const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

export default function QuizClient({ questions, taskId }: QuizClientProps) {
  const router = useRouter();
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<OptionKey | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [incorrectlyAnsweredIds, setIncorrectlyAnsweredIds] = useState<number[]>([]);

  useEffect(() => {
    setShuffledQuestions(shuffleArray(questions));
  }, [questions]);

  const handleSelectAnswer = (option: OptionKey) => {
    if (selectedAnswer) return;

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const correct = option === currentQuestion.answer;

    setSelectedAnswer(option);
    setIsCorrect(correct);

    if (correct) {
      setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setScore(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
      setIncorrectlyAnsweredIds(prev => [...prev, currentQuestion.id]);
    }

    setTimeout(() => {
      handleNextQuestion();
    }, 2000); // 2-second delay
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      // End of quiz
      const incorrectIds = incorrectlyAnsweredIds.join(',');
      router.push(`/quiz/${taskId}/results?incorrect=${incorrectIds}`);
    }
  };

  const currentQuestion = useMemo(() => {
      if (shuffledQuestions.length > 0) {
          return shuffledQuestions[currentQuestionIndex];
      }
      return null;
  }, [shuffledQuestions, currentQuestionIndex]);

  if (!currentQuestion) {
    return <div className="text-center p-10">Cargando preguntas...</div>;
  }

  return (
    <>
      <QuizProgress
        current={currentQuestionIndex + 1}
        total={shuffledQuestions.length}
        correct={score.correct}
        incorrect={score.incorrect}
      />
      <QuestionCard
        question={currentQuestion}
        onSelectAnswer={handleSelectAnswer}
        selectedAnswer={selectedAnswer}
        isCorrect={isCorrect}
        correctAnswer={currentQuestion.answer}
      />
    </>
  );
}
