import { Starships } from "../../types/starships/Starships";

export function CardStarships(props: Starships) {
  return (
    <ul className="ul-card">
      <li>name: {props.name}</li>
      <li>model: {props.model}</li>
      <li>manufacturer: {props.manufacturer}</li>
      <li>passengers: {props.passengers}</li>
      <li>consumables: {props.consumables}</li>
      <li>starship class: {props.starship_class}</li>
    </ul>
  );
}
