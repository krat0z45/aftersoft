"use server";

import { personalizedPlanProposal, type PersonalizedPlanProposalInput } from "@/ai/flows/personalized-plan-proposal";

export async function getPersonalizedPlan(input: PersonalizedPlanProposalInput) {
  try {
    const result = await personalizedPlanProposal(input);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error generating personalized plan:", error);
    return { success: false, error: "No se pudo generar un plan. El asistente de IA podría estar desconectado. Por favor, inténtalo de nuevo más tarde." };
  }
}
