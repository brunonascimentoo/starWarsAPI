import { Vehicles } from "./Vehicles";

export interface VehiclesResult {
  count: number;
  next: string;
  previous: string;
  results: Vehicles[];
}