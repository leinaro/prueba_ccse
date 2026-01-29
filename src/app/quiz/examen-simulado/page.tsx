import { questions } from "@/lib/questions";
import type { Question } from "@/lib/types";
import QuizClient from "@/components/quiz/QuizClient";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Function to pick first N elements
const pickFirstN = (array: Question[], count: number): Question[] => {
  return array.slice(0, count);
};

export default function ExamPage() {
  const task1Questions = pickFirstN(questions.filter(q => q.task.toLowerCase() === 'tarea 1'), 10);
  const task2Questions = pickFirstN(questions.filter(q => q.task.toLowerCase() === 'tarea 2'), 3);
  const task3Questions = pickFirstN(questions.filter(q => q.task.toLowerCase() === 'tarea 3'), 2);
  const task4Questions = pickFirstN(questions.filter(q => q.task.toLowerCase() === 'tarea 4'), 3);
  const task5Questions = pickFirstN(questions.filter(q => q.task.toLowerCase() === 'tarea 5'), 7);

  const examQuestions = [
      ...task1Questions, 
      ...task2Questions, 
      ...task3Questions, 
      ...task4Questions, 
      ...task5Questions
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-3xl mx-auto">
        <div className="relative flex items-center justify-center mb-4">
            <Button asChild variant="ghost" size="icon" className="absolute left-0">
                <Link href="/" aria-label="Volver a la página principal">
                    <ArrowLeft className="h-6 w-6" />
                </Link>
            </Button>
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-primary">
                Examen Simulado
            </h1>
        </div>
        <QuizClient questions={examQuestions} taskId="examen-simulado" />
      </div>
    </main>
  );
}
