import { apiClient } from "@/lib/api";
import type { BmiCalculateRequest, BmiCalculateResponse } from "./types";

const ENDPOINT = "/bmi/calculate";

export async function calculateBmi(
  body: BmiCalculateRequest,
): Promise<BmiCalculateResponse> {
  const { data } = await apiClient.post<BmiCalculateResponse>(ENDPOINT, body);
  return data;
}
