import { StarSpecies } from "../../types/species/StarSpecies";
import "./CardSpecies.css";

export function CardSpecies(props: StarSpecies) {
  return (
    <div>
      <ul className="ul-card">
        <li>name: {props.name}</li>
        <li>language: {props.language}</li>
        <li>classification: {props.classification}</li>
        <li>eye colors: {props.eye_colors}</li>
        <li>hair colors: {props.hair_colors}</li>
        <li>skin colors: {props.skin_colors}</li>
      </ul>
    </div>
  );
}
