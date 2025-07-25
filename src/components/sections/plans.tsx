"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { PlanSheet } from "@/components/sheets/plan-sheet";

const plans = [
  {
    name: "Básico",
    price: "$5,500 MXN",
    description: "Desde",
    features: [
      "Landing Page Responsiva",
      "Hasta 5 secciones",
      "Servicio de hosting y Dominio incluido",
      "Certificado SSL",
      "1 Cuenta de correo empresarial",
      "Formulario de contacto",
      "Enlaces a redes sociales y WhatsApp",
      "30 días de soporte",
    ],
    cta: "Seleccionar Plan",
  },
  {
    name: "Startup",
    price: "$7,500 MXN",
    description: "Desde",
    features: [
      "Sitio web completo (hasta 10 secciones)",
      "Panel de administración",
      "Servicio de hosting y Dominio incluido",
      "Certificado SSL",
      "3 Cuentas de correo empresarial",
      "Formulario de contacto",
      "Enlaces a redes sociales y WhatsApp",
      "3 meses de soporte",
    ],
    cta: "Seleccionar Plan",
    popular: true,
  },
  {
    name: "Profesional",
    price: "$11,900 MXN",
    description: "Desde",
    features: [
      "Sitio web completo y E-commerce",
      "Panel de administración avanzado",
      "Servicio de hosting y Dominio incluido",
      "Certificado SSL",
      "5 Cuentas de correo empresarial",
      "Integraciones de terceros y API REST",
      "Enlaces a redes sociales y WhatsApp",
      "60 meses de soporte",
    ],
    cta: "Seleccionar Plan",
  },
];

export function PlansSection() {
  const [selectedPlan, setSelectedPlan] = React.useState<string | null>(null);
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    setIsSheetOpen(true);
  };

  return (
    <section id="plans" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold">Planes de <span className="text-primary">Desarrollo</span></h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Desde proyectos básicos hasta soluciones empresariales complejas
          </p>
        </div>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <Card key={plan.name} className={`flex flex-col bg-card/80 backdrop-blur-sm ${plan.popular ? "border-2 border-primary shadow-lg shadow-primary/20" : "border-border"}`}>
                {plan.popular && (
                  <Badge className="absolute -top-4 right-6 bg-primary text-primary-foreground">Más Popular</Badge>
                )}
                <CardHeader className="items-center text-center">
                  <CardTitle className="font-headline text-2xl">{plan.name}</CardTitle>
                  <div className="pt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <CardDescription className="mt-1">{plan.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                    <SheetTrigger asChild>
                        <Button className="w-full font-bold" variant={plan.popular ? "default" : "secondary"} onClick={() => handleSelectPlan(plan.name)}>
                            {plan.cta}
                        </Button>
                    </SheetTrigger>
                </CardFooter>
              </Card>
            ))}
          </div>
          <SheetContent>
            {selectedPlan && <PlanSheet planName={selectedPlan} />}
          </SheetContent>
        </Sheet>
        <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground">¿Necesitas algo diferente?</p>
            <Button asChild variant="link" className="text-lg text-primary">
                <Link href="/personalized-plan">Obtén una Propuesta de Plan Personalizado</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
