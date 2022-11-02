import axios from "axios";
import { useEffect, useState } from "react";
import { Bg } from "../../components/Bg";
import { CardStarships } from "../../components/CardStarships/CardStarships";
import { StarSpeciesResults } from "../../types/species/StarSpeciesResults";
import { StarshipResults } from "../../types/starships/StarshipResults";
import { BASE_URL } from "../../utils/request";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { CaretLeft, CaretRight } from "phosphor-react";

export function Starships() {
  const [starships, setStarships] = useState<StarshipResults>();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios(`${BASE_URL}/starships?page=${currentPage}`).then((response) => {
      setStarships(response.data);
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
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="main-container">
        {starships?.results.map((ships, i) => {
          return (
            <div key={i} className="card-container">
              <CardStarships
                name={ships.name}
                model={ships.model}
                manufacturer={ships.manufacturer}
                passengers={ships.passengers}
                consumables={ships.consumables}
                starship_class={ships.starship_class}
              />
            </div>
          );
        })}
        <div className="btn">
          {starships?.previous ? (
            <button onClick={previousPage}>
              <CaretLeft size={32} weight="fill" />
            </button>
          ) : null}
          {starships?.next ? (
            <button onClick={nextPage}>
              <CaretRight size={32} weight="fill" />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
