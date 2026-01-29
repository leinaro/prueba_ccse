import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Privacidad - España Quiz',
  description: 'Política de privacidad de la aplicación España Quiz.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Política de Privacidad</h1>
      <p className="mb-4">
        Fecha de última actualización: 18 de Julio de 2024
      </p>

      <p className="mb-4">
        Esta Política de Privacidad describe nuestras políticas y procedimientos sobre la recopilación, uso y divulgación de su información cuando utiliza el Servicio y le informa sobre sus derechos de privacidad y cómo la ley lo protege.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">Recopilación y Uso de sus Datos Personales</h2>
      <p className="mb-4">
        No recopilamos ninguna información de identificación personal (PII) de nuestros usuarios. Todas las funcionalidades de la aplicación de quiz están diseñadas para funcionar sin necesidad de que el usuario se registre o proporcione datos personales.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">Cookies y Tecnologías de Seguimiento</h2>
      <p className="mb-4">
        Utilizamos cookies y tecnologías de seguimiento similares para rastrear la actividad en nuestro Servicio y almacenar cierta información. Las tecnologías de seguimiento utilizadas son balizas, etiquetas y scripts para recopilar y rastrear información y para mejorar y analizar nuestro Servicio.
      </p>
      <p className="mb-4">
        Puede indicar a su navegador que rechace todas las cookies o que indique cuándo se envía una cookie. Sin embargo, si no acepta las cookies, es posible que no pueda utilizar algunas partes de nuestro Servicio.
      </p>


      <h2 className="text-2xl font-bold mt-6 mb-2">Google AdSense</h2>
      <p className="mb-4">
        Utilizamos Google AdSense para mostrar anuncios en nuestro sitio web. Google, como proveedor externo, utiliza cookies para publicar anuncios en nuestro Servicio. El uso de la cookie de DoubleClick por parte de Google le permite a él y a sus socios publicar anuncios a nuestros usuarios en función de su visita a nuestro Servicio u otros sitios web en Internet.
      </p>
      <p className="mb-4">
        Puede inhabilitar el uso de la cookie de DoubleClick para la publicidad basada en intereses visitando la página de configuración de anuncios de Google:{" "}
        <a href="http://www.google.com/ads/preferences/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          Configuración de anuncios de Google
        </a>
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">Enlaces a Otros Sitios Web</h2>
      <p className="mb-4">
        Nuestro Servicio puede contener enlaces a otros sitios web que no son operados por nosotros. Si hace clic en un enlace de un tercero, será dirigido al sitio de ese tercero. Le recomendamos encarecidamente que revise la Política de Privacidad de cada sitio que visite.
      </p>
      <p className="mb-4">
        No tenemos control ni asumimos ninguna responsabilidad por el contenido, las políticas de privacidad o las prácticas de los sitios o servicios de terceros.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">Cambios a esta Política de Privacidad</h2>
      <p className="mb-4">
        Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página.
      </p>
      <p className="mb-4">
        Se le recomienda revisar esta Política de Privacidad periódicamente para detectar cualquier cambio. Los cambios a esta Política de Privacidad son efectivos cuando se publican en esta página.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-2">Contáctenos</h2>
      <p className="mb-4">
        Si tiene alguna pregunta sobre esta Política de Privacidad, puede contactarnos.
      </p>

      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">
          &larr; Volver al inicio
        </Link>
      </div>
    </main>
  );
}
