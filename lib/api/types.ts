export interface ApiListResponse<T> {
  items: T[];
}

export interface ApiError {
  status: number;
  message: string;
}
