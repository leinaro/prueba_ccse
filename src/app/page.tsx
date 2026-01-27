import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Flag, Map, Palette, Briefcase, ClipboardCheck, List } from "lucide-react";
import Link from "next/link";

const tasks = [
  { id: 1, name: "Tarea 1", description: "Gobierno, legislación y participación ciudadana", icon: BookOpen },
  { id: 2, name: "Tarea 2", description: "Derechos y deberes fundamentales", icon: Flag },
  { id: 3, name: "Tarea 3", description: "Geografía física y política de España", icon: Map },
  { id: 4, name: "Tarea 4", description: "Cultura, historia y sociedad españolas", icon: Palette },
  { id: 5, name: "Tarea 5", description: "Vida cotidiana y trámites administrativos", icon: Briefcase },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-8">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary">
          España Quiz
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          Pon a prueba tus conocimientos sobre España. Elige una tarea para comenzar.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {tasks.map((task, index) => (
          <Card key={task.id} className={`shadow-lg hover:shadow-xl transition-shadow duration-300 ${index === 4 ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}>
            <CardHeader className="flex flex-row items-center gap-4">
              <task.icon className="w-8 h-8 text-accent" />
              <CardTitle className="text-2xl font-bold">{task.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-start gap-4">
              <p className="text-muted-foreground flex-grow">{task.description}</p>
              <Button asChild className="w-full mt-auto">
                <Link href={`/quiz/tarea-${task.id}`}>Comenzar</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-16 mb-8 sm:mb-12 w-full max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Otras Opciones
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl mb-8">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <ClipboardCheck className="w-8 h-8 text-accent" />
              <CardTitle className="text-2xl font-bold">Simular Examen</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-start gap-4">
              <p className="text-muted-foreground flex-grow">Pon a prueba tus conocimientos con una selección de 16 preguntas aleatorias de todas las tareas.</p>
              <Button asChild className="w-full mt-auto">
                <Link href="/quiz/examen-simulado">Comenzar Simulación</Link>
              </Button>
            </CardContent>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center gap-4">
              <List className="w-8 h-8 text-accent" />
              <CardTitle className="text-2xl font-bold">Todas las Preguntas</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-start gap-4">
              <p className="text-muted-foreground flex-grow">Accede al banco completo de preguntas para estudiar y prepararte a fondo.</p>
              <Button asChild className="w-full mt-auto">
                <Link href="/preguntas">Ver Preguntas</Link>
              </Button>
            </CardContent>
        </Card>
      </div>
    </main>
  );
}
