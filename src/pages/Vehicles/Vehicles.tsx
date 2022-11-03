import axios from "axios";
import { CaretLeft, CaretRight } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bg } from "../../components/Bg/Bg";
import { CardVehicles } from "../../components/CardVehicles/CardVehicles";
import { Logo } from "../../components/Logo/Logo";
import { VehiclesResult } from "../../types/Vehicles/VehiclesResults";
import { url } from "../../utils/request";

export function Vehicles() {
  const [vehicles, setVehicles] = useState<VehiclesResult>();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios(`${url}/vehicles/?page=${currentPage}`).then((response) => {
      setVehicles(response.data);
    });
  }, [currentPage]);

  function previousPage() {
    setCurrentPage(currentPage - 1);
  }
  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  return (
    <div className="container-main">
      <Bg />
      <div className="logo-position">
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>
      <div className="main-container">
        {vehicles?.results.map((vehicle, i) => {
          return (
            <div className="card-container" key={i}>
              <CardVehicles
                name={vehicle.name}
                model={vehicle.model}
                manufacturer={vehicle.manufacturer}
                cost_in_credits={vehicle.cost_in_credits}
                length={vehicle.length}
                crew={vehicle.crew}
                passengers={vehicle.passengers}
              />
            </div>
          );
        })}
        <div className="btn">
          {vehicles?.previous ? (
            <button onClick={previousPage}>
              <CaretLeft size={32} weight="fill" />
            </button>
          ) : null}
          {vehicles?.next ? (
            <button onClick={nextPage}>
              <CaretRight size={32} weight="fill" />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
