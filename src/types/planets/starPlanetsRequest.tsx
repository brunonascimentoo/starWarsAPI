import { starPeople } from "../people/starPeople";
import { starPlanets } from "./starPlanets";

export interface starPlanetsRequest {
  count?: number;
  next: string;
  previous: number;
  results: starPlanets[];
}
