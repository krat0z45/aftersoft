import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, MessageSquare, Calculator, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Directo",
    content: "contacto@aftersoftgalaxy.com",
    subcontent: "Respuesta en 24 horas",
    href: "mailto:contacto@aftersoftgalaxy.com",
  },
  {
    icon: MessageSquare,
    title: "Chat en Vivo",
    content: "Habla con nuestros agentes",
    subcontent: "Iniciar Chat →",
    href: "#",
  },
  {
    icon: Calculator,
    title: "Cotización Rápida",
    content: "Obtén un presupuesto inmediato",
    subcontent: "Cotizar Ahora →",
    href: "/personalized-plan",
  },
  {
    icon: Phone,
    title: "Llamada Directa",
    content: "+1 (555) 123-4567",
    subcontent: "Lun-Vie 9AM-6PM",
    href: "tel:+15551234567",
  },
];

const quickActions = [
    {
      title: "Solicitar Cotización",
      description: "Presupuesto personalizado en 2 horas",
      href: "/personalized-plan",
    },
    {
      title: "Agendar Consulta",
      description: "30 min de consultoría gratuita",
      href: "#",
    },
  ];

export function ContactSection() {
  return (
    <section id="contact" className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Comencemos tu Proyecto</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos listos para convertir tu visión en realidad digital
            </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Left Column */}
            <div className="space-y-8">
                <div>
                    <h3 className="font-headline text-2xl font-bold mb-6">Múltiples Formas de Contacto</h3>
                    <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                        <Link href={method.href} key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-card/80 transition-colors group">
                            <div className="p-3 bg-primary/10 rounded-md">
                                <method.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">{method.title}</h4>
                                <p className="text-muted-foreground">{method.content}</p>
                                <p className="text-sm text-primary group-hover:underline">{method.subcontent}</p>
                            </div>
                        </Link>
                    ))}
                    </div>
                </div>
                <div>
                    <h3 className="font-headline text-2xl font-bold mb-6">Acciones Rápidas</h3>
                    <Card className="bg-card/80">
                        <CardContent className="p-6 space-y-4">
                        {quickActions.map((action, index) => (
                            <Link href={action.href} key={index} className="flex justify-between items-center p-4 rounded-lg hover:bg-secondary/80 transition-colors">
                                <div>
                                    <h4 className="font-semibold">{action.title}</h4>
                                    <p className="text-sm text-muted-foreground">{action.description}</p>
                                </div>
                                <ArrowRight className="h-5 w-5 text-primary" />
                            </Link>
                        ))}
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Right Column */}
            <Card className="bg-card/80 p-4 md:p-8">
                <h3 className="font-headline text-2xl font-bold mb-6">Envíanos tu Proyecto</h3>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                        <Label htmlFor="name">Nombre *</Label>
                        <Input id="name" placeholder="Tu nombre completo" required />
                        </div>
                        <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="tu@email.com" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="company">Empresa</Label>
                        <Input id="company" placeholder="Nombre de tu empresa" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="project-type">Tipo de Proyecto *</Label>
                            <Select required>
                                <SelectTrigger id="project-type">
                                <SelectValue placeholder="Selecciona una opción" />
                                </SelectTrigger>
                                <SelectContent>
                                <SelectItem value="landing-page">Landing Page</SelectItem>
                                <SelectItem value="website">Sitio Web Completo</SelectItem>
                                <SelectItem value="webapp">Aplicación Web</SelectItem>
                                <SelectItem value="ecommerce">E-commerce</SelectItem>
                                <SelectItem value="other">Otro</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="budget">Presupuesto Estimado</Label>
                            <Select>
                                <SelectTrigger id="budget">
                                <SelectValue placeholder="Selecciona un rango" />
                                </SelectTrigger>
                                <SelectContent>
                                <SelectItem value="<1k">Menos de $1,000</SelectItem>
                                <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                                <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                                <SelectItem value=">10k">Más de $10,000</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="description">Descripción del Proyecto *</Label>
                        <Textarea id="description" placeholder="Cuéntanos sobre tu proyecto, objetivos y requisitos específicos..." rows={5} required/>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" required/>
                        <Label htmlFor="terms" className="text-sm font-normal text-muted-foreground">
                            Acepto los{" "}
                            <Link href="#" className="underline text-primary hover:text-primary/80">
                            términos de servicio
                            </Link>{" "}
                            y{" "}
                            <Link href="#" className="underline text-primary hover:text-primary/80">
                            política de privacidad
                            </Link>
                        </Label>
                    </div>
                    <div className="text-left">
                        <Button type="submit" size="lg" className="font-bold btn-glow">
                            Enviar Proyecto
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
      </div>
    </section>
  );
}
