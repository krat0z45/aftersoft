"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Leaf, Rocket, Building } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Leaf,
    category: "Pequeñas Empresas",
    subtitle: "Soluciones ágiles y económicas",
    features: [
      "Landing Pages Optimizadas",
      "Sitios Web Corporativos",
      "E-commerce Básico",
      "SEO Local",
      "Mantenimiento Básico",
    ],
    popular: false,
    iconColor: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Rocket,
    category: "Medianas Empresas",
    subtitle: "Crecimiento y escalabilidad",
    features: [
      "Aplicaciones Web Complejas",
      "E-commerce Avanzado",
      "Sistemas de Gestión",
      "APIs y Integraciones",
      "Analytics Avanzados",
    ],
    popular: true,
    iconColor: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Building,
    category: "Grandes Empresas",
    subtitle: "Soluciones empresariales",
    features: [
      "Arquitecturas Escalables",
      "Microservicios",
      "Cloud Infrastructure",
      "Consultoría Digital",
      "Soporte 24/7",
    ],
    popular: false,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold">
            <span className="text-gradient">Servicios</span> Especializados
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Soluciones adaptadas para cada tipo de empresa, desde startups hasta
            corporaciones globales
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {services.map((service, index) => (
            <Card
              key={index}
              className={cn(
                "relative flex flex-col bg-card/50 backdrop-blur-sm transition-all duration-300 h-full",
                service.popular
                  ? "border-2 border-primary shadow-lg shadow-primary/20"
                  : "border-border hover:border-primary/50 hover:-translate-y-1"
              )}
            >
              {service.popular && (
                <Badge className="absolute -top-4 self-center bg-primary text-primary-foreground">
                  Más Popular
                </Badge>
              )}
              <CardHeader className="items-center text-center">
                <div className={cn("p-4 rounded-lg", service.bgColor)}>
                    <service.icon className={cn("h-8 w-8", service.iconColor)} />
                </div>
                <CardTitle className="font-headline text-2xl pt-4">{service.category}</CardTitle>
                <p className="text-muted-foreground pt-1">{service.subtitle}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                       <Check className="h-5 w-5 text-green-500 mt-1 shrink-0"/>
                       <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
