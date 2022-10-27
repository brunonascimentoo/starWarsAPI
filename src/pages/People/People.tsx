import axios from "axios";
import { useEffect, useState } from "react";
import { Bg } from "../../components/Bg";
import { CardPeople } from "../../components/CardPeople";
import { starPeopleResults } from "../../types/people/starPeopleResults";
import { BASE_URL } from "../../utils/request";
import logo from "../../assets/images/logo.svg";
import "./styles.css";
import { Link } from "react-router-dom";
import { CaretLeft, CaretRight } from "phosphor-react";

export function People() {
  const [currentPage, setCurrentPage] = useState(1);
  const [peopleResult, setPeopleResult] = useState<starPeopleResults>();

  useEffect(() => {
    getPeople();
    previousPage();
    nextPage();
  }, []);

  const getPeople = async () => {
    const res = await axios(`${BASE_URL}/people/?page=${currentPage}`);
    const data = await res.data;
    setPeopleResult(data);
  };

  function previousPage() {
    setCurrentPage(currentPage - 1);
    getPeople();
  }

  function nextPage() {
    setCurrentPage(currentPage + 1);
    getPeople();
  }

  return (
    <>
      <Bg />
      <div className="container">
        <div className="logo-position">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="main-container">
          {peopleResult?.results.map((item, i) => {
            return (
              <ul key={i}>
                <CardPeople
                  name={item.name}
                  mass={item.mass}
                  height={item.height}
                  gender={item.gender}
                />
              </ul>
            );
          })}
          <div className="btn">
            {peopleResult?.previous ? (
              <button onClick={previousPage}>
                <CaretLeft size={32} weight="fill" />
              </button>
            ) : null}
            {peopleResult?.next ? (
              <button onClick={nextPage}>
                <CaretRight size={32} weight="fill" />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
