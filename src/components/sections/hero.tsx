import { Button } from "@/components/ui/button";
import Link from "next/link";
import Meteors from "@/components/effects/meteors";

export function HeroSection() {
  return (
    <section id="home" className="relative h-[85vh] min-h-[600px] w-full">
      <div className="absolute inset-0 -z-10">
        <Meteors />
        <div className="header-glow" />
      </div>
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-5xl font-bold tracking-tight md:text-7xl">
            <span className="text-gradient">Creando Universos Digitales</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Desde elegantes landing pages hasta complejas aplicaciones web, construyo experiencias web estelares que lanzan tus ideas a la órbita.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="font-bold btn-glow">
              <Link href="#why-us">Ver Mi Trabajo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-bold">
              <Link href="#contact">Contáctame</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
