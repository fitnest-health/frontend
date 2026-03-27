import { useMutation } from "@tanstack/react-query";
import { calculateBmi } from "../api/bmi";
import type { BmiCalculateRequest } from "../api/types";

export function useCalculateBmi() {
  return useMutation({
    mutationFn: (body: BmiCalculateRequest) => calculateBmi(body),
  });
}
