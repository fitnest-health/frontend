export interface BmiCalculateRequest {
  height: number;
  weight: number;
  birthDate: string;
  gender: string;
}

export interface BmiCalculateResponse {
  bmi: number;
  category: string;
}
