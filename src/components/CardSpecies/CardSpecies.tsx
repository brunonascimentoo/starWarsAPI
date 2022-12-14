import { StarSpecies } from "../../types/species/StarSpecies";

export function CardSpecies(props: StarSpecies) {
  return (
    <ul className="card-container">
      <li>name: {props.name}</li>
      <li>language: {props.language}</li>
      <li>classification: {props.classification}</li>
      <li>eye colors: {props.eye_colors}</li>
      <li>hair colors: {props.hair_colors}</li>
      <li>skin colors: {props.skin_colors}</li>
    </ul>
  );
}
