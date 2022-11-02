import { starPeople } from "../../types/people/starPeople";

export function CardPeople(props: starPeople) {
  return (
    <ul className="card-container">
      <li className="item currentItem">name: {props.name}</li>
      <li className="item ">Mass: {props.mass}</li>
      <li className="item ">Gender: {props.gender}</li>
      <li className="item ">Height: {props.height}</li>
    </ul>
  );
}
