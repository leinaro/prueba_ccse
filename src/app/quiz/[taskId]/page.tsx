import { questions } from "@/lib/questions";
import type { Question } from "@/lib/types";
import QuizClient from "@/components/quiz/QuizClient";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function QuizPage({ params }: { params: { taskId: string } }) {
  const taskId = params.taskId.replace("-", " "); // "tarea-1" -> "tarea 1"
  const titleCasedTaskId = taskId.charAt(0).toUpperCase() + taskId.slice(1); // "tarea 1" -> "Tarea 1"
  
  const taskQuestions = questions.filter(
    (q) => q.task.toLowerCase() === taskId.toLowerCase()
  );

  if (taskQuestions.length === 0) {
    notFound();
  }

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
                {titleCasedTaskId}
            </h1>
        </div>
        <QuizClient questions={taskQuestions as Question[]} taskId={params.taskId} />
      </div>
    </main>
  );
}
