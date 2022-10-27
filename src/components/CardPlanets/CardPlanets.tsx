import { starPlanets } from "../../types/planets/starPlanets";
import "./styles.css";

export function CardPlanets(props: starPlanets) {
  return (
    <div className="list-card">
      <ul className="ul-card">
        <li>Name: {props.name}</li>
        <li>Climate: {props.climate}</li>
        <li>Gravity: {props.gravity}</li>
        <li>Terrain: {props.terrain}</li>
      </ul>
    </div>
  );
}
