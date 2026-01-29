import type {Metadata} from 'next';
import Link from 'next/link';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'España Quiz',
  description: 'Una aplicación para poner a prueba tus conocimientos sobre España.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5219493323817536"
     crossOrigin="anonymous"></script>
      </head>
      <body className="font-body antialiased">
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
          <footer className="container mx-auto px-4 py-8 text-center text-sm text-gray-500">
            <Link href="/politica-privacidad" className="hover:underline">
              Política de Privacidad
            </Link>
          </footer>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
