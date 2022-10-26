import { starPeople } from "./starPeople";

export interface starPeopleResults {
  count?: {};
  next: number;
  previous: number;
  results: starPeople[];
}
