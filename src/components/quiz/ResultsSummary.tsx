import type { Question } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Info } from "lucide-react";

interface ResultsSummaryProps {
  questions: Question[];
}

export default function ResultsSummary({ questions }: ResultsSummaryProps) {
  if (questions.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 space-y-4">
      
      {questions.map((q, index) => (
        <Card key={index} className="bg-background/50">
          <CardHeader>
            <CardTitle className="text-lg flex items-start gap-3">
                <Info className="h-5 w-5 text-accent shrink-0 mt-1" />
                <span>{q.question}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="flex items-start gap-3 text-success font-semibold">
                <Check className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Respuesta correcta: {q.options[q.answer]}</span>
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
