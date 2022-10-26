import { starPeople } from "../types/starPeople";
import "./CardPeople.css";

export function CardPeople(props: starPeople) {
  return (
    <div className="card-container">
      <h3 className="item currentItem">name: {props.name}</h3>
      <h4 className="item ">Mass: {props.mass}</h4>
      <h4 className="item ">Gender: {props.gender}</h4>
      <h4 className="item ">Height: {props.height}</h4>
    </div>
  );
}
