import { Card, CardContent } from "@/components/ui/card";
import { Megaphone } from "lucide-react";

export default function AdBanner() {
  return (
    <div className="w-full max-w-4xl my-8">
      <Card className="bg-muted/30 border-dashed border-accent">
        <CardContent className="p-6">
          <div className="flex items-center justify-center gap-4">
            <Megaphone className="w-10 h-10 text-accent" />
            <div className="text-center">
              <p className="font-bold text-lg text-accent">Espacio Publicitario</p>
              <p className="text-sm text-muted-foreground">
                Este es un anuncio. ¡Apoya nuestra app!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
