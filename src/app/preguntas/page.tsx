import { questions } from "@/lib/questions";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";

export default function AllQuestionsPage() {
  return (
    <main className="flex flex-col items-center min-h-screen p-4 sm:p-8 bg-muted/20">
      <div className="w-full max-w-4xl mx-auto">
        <div className="relative flex items-center justify-center mb-8">
            <Button asChild variant="ghost" size="icon" className="absolute left-0 top-1/2 -translate-y-1/2">
                <Link href="/" aria-label="Volver a la página principal">
                    <ArrowLeft className="h-6 w-6" />
                </Link>
            </Button>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-primary text-center">
                Banco de Preguntas
            </h1>
        </div>

        <p className="text-center text-muted-foreground mb-8">Aquí puedes consultar todas las preguntas del test con sus respuestas correctas para estudiar.</p>

        <div className="border rounded-lg bg-card p-2 sm:p-4">
            <Accordion type="multiple" className="w-full">
                {questions.map((q) => (
                    <AccordionItem value={`item-${q.id}`} key={q.id}>
                        <AccordionTrigger className="text-left hover:no-underline text-base font-semibold">
                            <span className="font-bold mr-3 text-primary">{q.id}</span>
                            <span className="flex-1 text-card-foreground">{q.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 pl-10">
                            <div className="space-y-2 text-muted-foreground">
                                <p>a) {q.options.a}</p>
                                <p>b) {q.options.b}</p>
                                {q.options.c && <p>c) {q.options.c}</p>}
                                <p className="flex items-start gap-2 pt-2 text-success font-bold">
                                    <Check className="h-5 w-5 shrink-0 mt-0.5" />
                                    <span>Respuesta: {q.options[q.answer]}</span>
                                </p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
        <div className="mt-8 text-center">
            <Button asChild>
                <Link href="/">Volver al inicio</Link>
            </Button>
        </div>
      </div>
    </main>
  );
}
