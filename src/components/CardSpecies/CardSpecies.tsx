import { StarSpecies } from "../../types/species/StarSpecies";
import "./CardSpecies.css";

export function CardSpecies(props: StarSpecies) {
  return (
    <div>
      <ul className="ul-card">
        <li>name: {props.name}</li>
        <li>language: {props.language}</li>
        <li>classification: {props.classification}</li>
        <li>eye_colors: {props.eye_colors}</li>
        <li>hair_colors: {props.hair_colors}</li>
        <li>skin_colors: {props.skin_colors}</li>
      </ul>
    </div>
  );
}
