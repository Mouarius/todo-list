export interface Todo {
  id: number;
  content: string;
  done: boolean;
}
export enum FilterValue {
  ALL = "all",
  ACTIVE = "active",
  COMPLETED = "completed",
}
