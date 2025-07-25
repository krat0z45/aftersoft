import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad - Aftersoft",
  description: "Consulta nuestra política de privacidad.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-gradient">Política de Privacidad</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
            </div>

            <div className="space-y-8 text-muted-foreground">
                <section>
                    <h2 className="font-headline text-2xl font-semibold mb-4 text-primary">1. Introducción</h2>
                    <p>
                        Bienvenido a Aftersoft. Nos comprometemos a proteger tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y salvaguardamos tu información cuando visitas nuestro sitio web. Por favor, lee esta política de privacidad cuidadosamente. Si no estás de acuerdo con los términos de esta política de privacidad, por favor no accedas al sitio.
                    </p>
                </section>

                <section>
                    <h2 className="font-headline text-2xl font-semibold mb-4 text-primary">2. Recopilación de tu Información</h2>
                    <p>
                        Podemos recopilar información sobre ti de varias maneras. La información que podemos recopilar en el Sitio incluye:
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
                        <li>
                            <strong>Datos Personales:</strong> Información de identificación personal, como tu nombre, dirección de envío, dirección de correo electrónico y número de teléfono, y información demográfica, como tu edad, género, ciudad natal e intereses, que nos proporcionas voluntariamente cuando te registras en el Sitio o cuando eliges participar en diversas actividades relacionadas con el Sitio, como el chat en línea y los foros de mensajes.
                        </li>
                        <li>
                            <strong>Datos Derivados:</strong> Información que nuestros servidores recopilan automáticamente cuando accedes al Sitio, como tu dirección IP, tu tipo de navegador, tu sistema operativo, tus tiempos de acceso y las páginas que has visto directamente antes y después de acceder al Sitio.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="font-headline text-2xl font-semibold mb-4 text-primary">3. Uso de tu Información</h2>
                    <p>
                        Tener información precisa sobre ti nos permite ofrecerte una experiencia fluida, eficiente y personalizada. Específicamente, podemos usar la información recopilada sobre ti a través del Sitio para:
                    </p>
                    <ul className="list-disc list-inside space-y-2 pl-4 mt-4">
                        <li>Crear y gestionar tu cuenta.</li>
                        <li>Enviarte por correo electrónico un boletín informativo.</li>
                        <li>Habilitar las comunicaciones de usuario a usuario.</li>
                        <li>Generar un perfil personal sobre ti para hacer futuras visitas al Sitio más personalizadas.</li>
                        <li>Aumentar la eficiencia y el funcionamiento del Sitio.</li>
                    </ul>
                </section>

                 <section>
                    <h2 className="font-headline text-2xl font-semibold mb-4 text-primary">4. Seguridad de tu Información</h2>
                    <p>
                        Utilizamos medidas de seguridad administrativas, técnicas y físicas para ayudar a proteger tu información personal. Si bien hemos tomado medidas razonables para proteger la información personal que nos proporcionas, ten en cuenta que a pesar de nuestros esfuerzos, ninguna medida de seguridad es perfecta o impenetrable, y no se puede garantizar ningún método de transmisión de datos contra ninguna intercepción u otro tipo de uso indebido.
                    </p>
                </section>

                <section>
                    <h2 className="font-headline text-2xl font-semibold mb-4 text-primary">5. Contacto</h2>
                    <p>
                        Si tienes preguntas o comentarios sobre esta Política de Privacidad, por favor contáctanos en:
                        <br />
                        Aftersoft
                        <br />
                        <a href="mailto:privacidad@aftersoft.com" className="text-primary hover:underline">privacidad@aftersoft.com</a>
                    </p>
                </section>
            </div>
        </div>
        </div>
    </div>
  );
}
