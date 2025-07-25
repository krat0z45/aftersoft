"use client";

import { useState } from "react";
import { PersonalizedPlanForm } from "./form";
import { type PersonalizedPlanProposalOutput } from "@/ai/flows/personalized-plan-proposal";
import { getPersonalizedPlan } from "./actions";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Loader2 } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function PersonalizedPlanPage() {
  const [result, setResult] = useState<PersonalizedPlanProposalOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (data: any) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    const response = await getPersonalizedPlan(data);

    if (response.success) {
      setResult(response.data);
    } else {
      setError(response.error);
    }

    setIsLoading(false);
  };

  const resetForm = () => {
    setResult(null);
    setError(null);
  }

  return (
    <div className="bg-secondary">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Asistente de Plan Personalizado</h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Completa el siguiente formulario y nuestro asistente de IA creará una propuesta de plan a tu medida.
                </p>
            </div>

            {!result && (
                 <Card className="border-2 border-primary/20 shadow-lg shadow-primary/10">
                    <CardContent className="p-8">
                        <PersonalizedPlanForm onSubmit={handleFormSubmit} isLoading={isLoading} />
                    </CardContent>
                 </Card>
            )}

            {isLoading && (
                <div className="flex flex-col items-center justify-center gap-4 text-center p-8">
                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
                    <h2 className="font-headline text-2xl font-bold">Generando Tu Plan...</h2>
                    <p className="text-muted-foreground">Nuestra IA está analizando tu solicitud. Por favor, espera un momento.</p>
                </div>
            )}
            
            {error && (
                <Card className="bg-destructive/10 border-destructive">
                    <CardHeader>
                        <CardTitle className="text-destructive">Ocurrió un Error</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{error}</p>
                    </CardContent>
                    <CardFooter>
                         <Button variant="destructive" onClick={resetForm}>Intentar de Nuevo</Button>
                    </CardFooter>
                </Card>
            )}

            {result && (
                <Card className="border-2 border-primary/20 shadow-lg shadow-primary/10 animate-in fade-in-50">
                    <CardHeader className="text-center bg-primary/10">
                        <CardTitle className="font-headline text-3xl text-primary">{result.planName}</CardTitle>
                        <CardDescription className="text-base">{result.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 grid gap-6">
                        <div>
                            <h3 className="font-headline text-xl font-semibold mb-3">Características Clave</h3>
                            <ul className="space-y-2">
                                {result.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-primary mt-1 shrink-0"/>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t">
                            <div>
                                <h3 className="font-headline text-xl font-semibold mb-2">Costo Estimado</h3>
                                <Badge variant="secondary" className="text-lg">{result.estimatedCost}</Badge>
                            </div>
                            <div>
                                <h3 className="font-headline text-xl font-semibold mb-2">Cronograma Estimado</h3>
                                <Badge variant="secondary" className="text-lg">{result.timeline}</Badge>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col sm:flex-row gap-4 justify-center bg-primary/10 p-6">
                       <Button size="lg" asChild>
                           <Link href="#contact">Aceptar y Agendar Llamada</Link>
                       </Button>
                       <Button size="lg" variant="outline" onClick={resetForm}>Solicitar un Plan Diferente</Button>
                    </CardFooter>
                </Card>
            )}
        </div>
        </div>
    </div>
  );
}
