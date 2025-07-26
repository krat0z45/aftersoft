import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "CRM Cósmico",
    description: "Un tablero de CRM futurista para gestionar las relaciones con los clientes en toda la galaxia.",
    image: "/img/viaje1.jpg",
    tags: ["Next.js", "Tailwind CSS", "Firebase"],
    hint: "dashboard interface",
  },
  {
    title: "E-commerce Stargate",
    description: "Una tienda en línea para artefactos raros, con una experiencia de pago sin interrupciones.",
    image: "/img/viaje2.webp",
    tags: ["Shopify", "React", "GraphQL"],
    hint: "product gallery",
  },
  {
    title: "Astro Landing",
    description: "Una página de aterrizaje elegante y animada para el lanzamiento de un nuevo producto SaaS.",
    image: "/img/viaje3.jpg",
    tags: ["Astro", "GSAP", "Sanity"],
    hint: "website mockup",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold">Viajes Recientes</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Un vistazo a las constelaciones digitales que he trazado.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-60 w-full object-cover"
                  data-ai-hint={project.hint}
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                <CardDescription className="mt-2">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
