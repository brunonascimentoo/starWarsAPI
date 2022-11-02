import { starPlanets } from "../../types/planets/starPlanets";

export function CardPlanets(props: starPlanets) {
  return (
    <ul className="card-container">
      <li>Name: {props.name}</li>
      <li>Climate: {props.climate}</li>
      <li>Gravity: {props.gravity}</li>
      <li>Terrain: {props.terrain}</li>
    </ul>
  );
}
