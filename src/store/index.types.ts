export type TMessage = {
  message: string;
};
export interface SR<T> {
  data: T[];
  total: number;
  skip: number;
  limit: number;
}
export interface SRO<T> {
  data: T;
  total: number;
  skip: number;
  limit: number;
}
export type TGetParamsChange = {
  q?: string;
  select?: string[];
  sortBy?: string;
  order?: string;
  skip?: number;
  limit?: number;
};
