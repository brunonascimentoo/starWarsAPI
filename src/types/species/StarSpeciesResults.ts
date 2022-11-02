import { StarSpecies } from "./StarSpecies";

export interface StarSpeciesResults {
  count: number;
  next: string;
  previous: string;
  results: StarSpecies[];
}
