import { Vehicles } from "../../types/Vehicles/Vehicles";

export function CardVehicles(props: Vehicles) {
  return (
    <ul className="card-container">
      <li>name: {props.name}</li>
      <li>model: {props.model}</li>
      <li>manufacturer: {props.manufacturer}</li>
      <li>cost in credits: {props.cost_in_credits}</li>
      <li>length: {props.length}</li>
      <li>crew: {props.crew}</li>
      <li>passengers: {props.passengers}</li>
    </ul>
  );
}
