import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos de Servicio - Aftersoft",
  description: "Consulta nuestros términos de servicio.",
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-background">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-gradient">Términos de Servicio</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
            </div>

            <div className="space-y-8 text-muted-foreground">
                <section>
                    <h2 className="font-headline text-2xl font-semibold mb-4 text-primary">1. Aceptación de los Términos</h2>
                    <p>
                        Al acceder y utilizar nuestro sitio web y servicios, aceptas y estás de acuerdo con estar sujeto a los términos y provisiones de este acuerdo. Además, al utilizar estos servicios particulares, estarás sujeto a cualquier guía o regla correspondiente publicada para dichos servicios. Toda participación en este servicio constituirá la aceptación de este acuerdo. Si no estás de acuerdo en cumplir con lo anterior, por favor no lo uses.
                    </p>
                </section>

                <section>
                    <h2 className="font-headline text-2xl font-semibold mb-4 text-primary">2. Descripción del Servicio</h2>
                    <p>
                        Aftersoft proporciona soluciones de desarrollo web, incluyendo pero no limitado a diseño de sitios web, desarrollo de aplicaciones web, servicios de e-commerce y consultoría digital. Nos reservamos el derecho de modificar o descontinuar el servicio con o sin previo aviso. No seremos responsables ante ti o cualquier tercero si ejercemos nuestro derecho a modificar o descontinuar el servicio.
                    </p>
                </section>

                <section>
                    <h2 className="font-headline text-2xl font-semibold mb-4 text-primary">3. Conducta del Usuario</h2>
                    <p>
                        Como condición para el uso, te comprometes a no utilizar los Servicios para ningún propósito que sea ilegal o prohibido por estos Términos, o cualquier otro propósito no previsto razonablemente por Aftersoft. A modo de ejemplo, y no como una limitación, aceptas no utilizar los Servicios para:
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
                        <li>Publicar o transmitir cualquier contenido que sea abusivo, amenazante, obsceno, difamatorio o racial, sexual, religioso o de otra manera objetable y ofensivo.</li>
                        <li>Violar cualquier ley, reglamento o norma aplicable.</li>
                        <li>Suplantar a cualquier persona o entidad, o falsear tu afiliación con una persona o entidad.</li>
                    </ul>
                </section>

                 <section>
                    <h2 className="font-headline text-2xl font-semibold mb-4 text-primary">4. Propiedad Intelectual</h2>
                    <p>
                        El Sitio y su contenido original, características y funcionalidad son propiedad de Aftersoft y están protegidos por leyes internacionales de derechos de autor, marcas registradas, patentes, secretos comerciales y otras leyes de propiedad intelectual o derechos de propiedad.
                    </p>
                </section>

                <section>
                    <h2 className="font-headline text-2xl font-semibold mb-4 text-primary">5. Terminación</h2>
                    <p>
                        Podemos terminar tu acceso al Sitio, sin causa o aviso, lo que puede resultar en la confiscación y destrucción de toda la información asociada contigo. Todas las disposiciones de este Acuerdo que por su naturaleza deban sobrevivir a la terminación sobrevivirán a la terminación, incluidas, entre otras, las disposiciones de propiedad, las renuncias de garantía, la indemnización y las limitaciones de responsabilidad.
                    </p>
                </section>

                <section>
                    <h2 className="font-headline text-2xl font-semibold mb-4 text-primary">6. Contacto</h2>
                    <p>
                        Si tienes alguna pregunta sobre estos Términos, por favor contáctanos en:
                        <br />
                        Aftersoft
                        <br />
                        <a href="mailto:terminos@aftersoft.com" className="text-primary hover:underline">terminos@aftersoft.com</a>
                    </p>
                </section>
            </div>
        </div>
        </div>
    </div>
  );
}
