import axios from "axios";
import { useEffect, useState } from "react";
import { Bg } from "../../components/Bg";
import { CardPlanets } from "../../components/CardPlanets/CardPlanets";
import { starPlanets } from "../../types/planets/starPlanets";
import { BASE_URL } from "../../utils/request";
import { CaretLeft, CaretRight } from "phosphor-react";
import logo from "../../assets/images/logo.svg";
import "./styles.css";
import { starPlanetsRequest } from "../../types/planets/starPlanetsRequest";
import { Link } from "react-router-dom";

export function Planets() {
  const [planets, setPlanets] = useState<starPlanetsRequest>();
  const [currentPage, setCurrentPage] = useState(1);

  console.log(planets);

  useEffect(() => {
    request();
    previousPage();
    nextPage();
  }, []);

  const request = async () => {
    const res = await axios(`${BASE_URL}/planets/?page=${currentPage}`);
    const data = await res.data;
    setPlanets(data);
  };

  function previousPage() {
    setCurrentPage(currentPage - 1);
    request();
  }
  function nextPage() {
    setCurrentPage(currentPage + 1);
    request();
  }

  return (
    <div className="container-main">
      <Bg />
      <div className="logo-position">
        <Link to={"/"}>
          <img src={logo} />
        </Link>
      </div>
      {planets?.results.map((item, i) => {
        return (
          <div className="container" key={i}>
            <div className="main-container">
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
  );
}
