"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  clientNeeds: z.string().min(10, {
    message: "Por favor, describe tus necesidades en al menos 10 caracteres.",
  }),
  budget: z.string().min(2, {
    message: "Por favor, proporciona un presupuesto estimado.",
  }),
  timeline: z.string().min(2, {
    message: "Por favor, proporciona un cronograma deseado.",
  }),
  examples: z.string().url({ message: "Por favor, introduce una URL válida." }).optional().or(z.literal('')),
});

type PersonalizedPlanFormProps = {
  onSubmit: (data: z.infer<typeof formSchema>) => void;
  isLoading: boolean;
};

export function PersonalizedPlanForm({ onSubmit, isLoading }: PersonalizedPlanFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clientNeeds: "",
      budget: "",
      timeline: "",
      examples: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="clientNeeds"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Necesidades del Cliente</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe las características principales y los objetivos de tu proyecto..." {...field} rows={4} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Presupuesto</FormLabel>
                <FormControl>
                  <Input placeholder="ej., $1000 - $2000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="timeline"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cronograma</FormLabel>
                <FormControl>
                  <Input placeholder="ej., 2-4 semanas" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="examples"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sitio Web de Ejemplo (Opcional)</FormLabel>
              <FormControl>
                <Input placeholder="https://ejemplo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-center">
            <Button type="submit" disabled={isLoading} size="lg">
            {isLoading ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generando...
                </>
            ) : (
                "Generar Mi Plan"
            )}
            </Button>
        </div>
      </form>
    </Form>
  );
}
