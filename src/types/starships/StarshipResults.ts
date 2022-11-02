import { Starships } from "./Starships";

export interface StarshipResults {
  count: number;
  next: string;
  previous: string;
  results: Starships[];
}