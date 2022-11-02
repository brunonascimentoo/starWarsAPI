import axios from "axios";
import { useEffect, useState } from "react";
import { Bg } from "../../components/Bg/Bg";
import { CardPlanets } from "../../components/CardPlanets/CardPlanets";
import { BASE_URL } from "../../utils/request";
import { CaretLeft, CaretRight } from "phosphor-react";
import { starPlanetsRequest } from "../../types/planets/starPlanetsResults";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo/Logo";

export function Planets() {
  const [planets, setPlanets] = useState<starPlanetsRequest>();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios(`${BASE_URL}/planets/?page=${currentPage}`).then((response) => {
      setPlanets(response.data);
    });
  }, [currentPage]);

  function previousPage() {
    setCurrentPage(currentPage - 1);
  }

  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  if (currentPage == 0) {
    setCurrentPage(currentPage + 1);
  } else if (currentPage == 7) {
    setCurrentPage(currentPage - 1);
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
        {planets?.results.map((item, i) => {
          return (
            <div key={i}>
              <div className="card-container">
                <CardPlanets
                  name={item.name}
                  climate={item.climate}
                  gravity={item.gravity}
                  terrain={item.terrain}
                />
              </div>
            </div>
          );
        })}
        <div className="btn">
          {planets?.previous ? (
            <button onClick={previousPage}>
              <CaretLeft size={32} weight="fill" />
            </button>
          ) : null}
          {planets?.next ? (
            <button onClick={nextPage}>
              <CaretRight size={32} weight="fill" />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
