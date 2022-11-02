import axios from "axios";
import { useEffect, useState } from "react";
import { Bg } from "../../components/Bg/Bg";
import { CardPeople } from "../../components/CardPeople/CardPeople";
import { starPeopleResults } from "../../types/people/starPeopleResults";
import { BASE_URL } from "../../utils/request";
import { Link } from "react-router-dom";
import { CaretLeft, CaretRight } from "phosphor-react";
import { Logo } from "../../components/Logo/Logo";

export function People() {
  const [currentPage, setCurrentPage] = useState(1);
  const [people, setPeople] = useState<starPeopleResults>();

  useEffect(() => {
    axios(`${BASE_URL}/people/?page=${currentPage}`).then((response) => {
      setPeople(response.data);
    });
  }, [currentPage]);

  function previousPage() {
    setCurrentPage(currentPage - 1);
  }

  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  if (currentPage < 1) {
    setCurrentPage(currentPage + 1);
  } else if (currentPage > 9) {
    setCurrentPage(currentPage - 1);
  }

  return (
    <div className="container">
      <Bg />
      <div className="logo-position">
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>
      <div className="main-container">
        {people?.results.map((item, i) => {
          return (
            <div className="card-container" key={i}>
              <CardPeople
                name={item.name}
                mass={item.mass}
                height={item.height}
                gender={item.gender}
              />
            </div>
          );
        })}
        <div className="btn">
          {people?.previous ? (
            <button onClick={previousPage}>
              <CaretLeft size={32} weight="fill" />
            </button>
          ) : null}
          {people?.next ? (
            <button onClick={nextPage}>
              <CaretRight size={32} weight="fill" />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
