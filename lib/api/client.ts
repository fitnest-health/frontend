import axios from "axios";
import type { AxiosError, AxiosInstance } from "axios";

function createClient(baseURL: string): AxiosInstance {
  const client = axios.create({
    baseURL,
    timeout: 15_000,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  client.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => Promise.reject(error),
  );

  return client;
}

/** Client-side — goes through Next.js proxy to avoid CORS */
export const apiClient = createClient(
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "/api/proxy",
);

/** Server-side — direct backend URL, no CORS issue */
export const serverApiClient = createClient(
  process.env.API_BASE_URL ?? "https://dev-api.fitnest.az/api/v1",
);
