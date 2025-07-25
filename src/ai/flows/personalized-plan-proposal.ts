// This file is machine-generated - edit with care!

'use server';

/**
 * @fileOverview A personalized plan proposal AI agent.
 *
 * - personalizedPlanProposal - A function that generates a personalized plan proposal.
 * - PersonalizedPlanProposalInput - The input type for the personalizedPlanProposal function.
 * - PersonalizedPlanProposalOutput - The return type for the personalizedPlanProposal function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedPlanProposalInputSchema = z.object({
  clientNeeds: z
    .string()
    .describe('Las necesidades y requisitos específicos del cliente.'),
  budget: z.string().describe('El presupuesto del cliente para el proyecto.'),
  timeline: z.string().describe('El cronograma deseado para la finalización del proyecto.'),
  examples: z
    .string()
    .describe('Ejemplos de otros sitios web con la funcionalidad deseada.'),
});
export type PersonalizedPlanProposalInput = z.infer<
  typeof PersonalizedPlanProposalInputSchema
>;

const PersonalizedPlanProposalOutputSchema = z.object({
  planName: z.string().describe('El nombre del plan propuesto.'),
  description: z.string().describe('Una descripción detallada del plan propuesto.'),
  features: z.array(z.string()).describe('Las características clave incluidas en el plan.'),
  estimatedCost: z
    .string()
    .describe('El costo estimado para el plan propuesto.'),
  timeline: z.string().describe('El cronograma estimado para el plan propuesto.'),
});
export type PersonalizedPlanProposalOutput = z.infer<
  typeof PersonalizedPlanProposalOutputSchema
>;

export async function personalizedPlanProposal(
  input: PersonalizedPlanProposalInput
): Promise<PersonalizedPlanProposalOutput> {
  return personalizedPlanProposalFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedPlanProposalPrompt',
  input: {schema: PersonalizedPlanProposalInputSchema},
  output: {schema: PersonalizedPlanProposalOutputSchema},
  prompt: `Eres un consultor experto en desarrollo web en Aftersoft Galaxy, especializado en crear propuestas de planes personalizados para clientes potenciales.

  Basado en las necesidades específicas del cliente, su presupuesto, el cronograma deseado y ejemplos de la funcionalidad deseada, elaborarás una propuesta de plan detallada que describa las mejores opciones para su proyecto.

  Necesidades del Cliente: {{{clientNeeds}}}
  Presupuesto: {{{budget}}}
  Cronograma: {{{timeline}}}
  Ejemplos: {{{examples}}}

  Considera los requisitos del cliente y proporciona un plan que sea realista, efectivo y alineado con sus objetivos.
  Asegúrate de incluir el nombre del plan, una descripción detallada, las características clave, el costo estimado y el cronograma estimado.
  Responde siempre en español.
  `,
});

const personalizedPlanProposalFlow = ai.defineFlow(
  {
    name: 'personalizedPlanProposalFlow',
    inputSchema: PersonalizedPlanProposalInputSchema,
    outputSchema: PersonalizedPlanProposalOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
