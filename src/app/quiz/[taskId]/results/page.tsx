import { questions } from "@/lib/questions";
import type { Question } from "@/lib/types";
import ResultsSummary from "@/components/quiz/ResultsSummary";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PartyPopper, Frown } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AdBanner from "@/components/AdBanner";

export default function ResultsPage({
  params,
  searchParams,
}: {
  params: { taskId: string };
  searchParams: { incorrect?: string };
}) {
  const incorrectIds = searchParams.incorrect ? searchParams.incorrect.split(',').map(Number).filter(id => !isNaN(id)) : [];
  
  const incorrectlyAnsweredQuestions = questions.filter(q => incorrectIds.includes(q.id)) as Question[];

  const isSimulatedExam = params.taskId === 'examen-simulado';
  
  let finalCorrectAnswers: number;
  let finalTotalQuestions: number;

  if (isSimulatedExam) {
    finalTotalQuestions = 25;
    finalCorrectAnswers = finalTotalQuestions - incorrectlyAnsweredQuestions.length;
  } else {
    finalTotalQuestions = questions.filter(q => q.task.toLowerCase() === params.taskId.replace('-', ' ')).length;
    finalCorrectAnswers = finalTotalQuestions - incorrectlyAnsweredQuestions.length;
  }


  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl sm:text-4xl font-extrabold text-primary">Resultados del Quiz</CardTitle>
            <CardDescription className="text-lg sm:text-xl mt-2">
              Completaste la {params.taskId.replace('-', ' ')}.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center my-6">
                <p className="text-5xl sm:text-6xl font-bold">{finalCorrectAnswers} / {finalTotalQuestions}</p>
                <p className="text-muted-foreground mt-2">Respuestas correctas</p>
            </div>
            {incorrectlyAnsweredQuestions.length === 0 ? (
                <div className="text-center p-8 bg-success/10 rounded-lg">
                    <PartyPopper className="h-16 w-16 mx-auto text-success mb-4" />
                    <h3 className="text-2xl font-bold text-success">¡Felicidades!</h3>
                    <p className="mt-2 text-muted-foreground">¡No has tenido ningún error!</p>
                </div>
            ) : (
                 <div className="text-center p-8 bg-destructive/10 rounded-lg">
                    <Frown className="h-16 w-16 mx-auto text-destructive mb-4" />
                    <h3 className="text-2xl font-bold text-destructive">Repasemos los fallos</h3>
                    <p className="mt-2 text-muted-foreground">Aquí tienes las preguntas que fallaste para que puedas mejorar.</p>
                </div>
            )}

            <ResultsSummary questions={incorrectlyAnsweredQuestions} />

            <AdBanner />

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild>
                    <Link href={`/quiz/${params.taskId}`}>Intentar de nuevo</Link>
                </Button>
                <Button asChild variant="outline">
                    <Link href="/">Volver al inicio</Link>
                </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
