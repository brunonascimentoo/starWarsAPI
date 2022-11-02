import axios from "axios";
import { useEffect, useState } from "react";
import { Bg } from "../../components/Bg/Bg";
import { CardSpecies } from "../../components/CardSpecies/CardSpecies";
import { StarSpeciesResults } from "../../types/species/StarSpeciesResults";
import { BASE_URL } from "../../utils/request";
import { CaretLeft, CaretRight } from "phosphor-react";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo/Logo";

export function Species() {
  const [species, setSpecies] = useState<StarSpeciesResults>();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios(`${BASE_URL}/species/?page=${currentPage}`).then((response) => {
      setSpecies(response.data);
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
  } else if (currentPage == 5) {
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
        {species?.results.map((item, i) => {
          return (
            <div key={i} className="card-container">
              <CardSpecies
                name={item.name}
                language={item.language}
                classification={item.classification}
                eye_colors={item.eye_colors}
                hair_colors={item.hair_colors}
                skin_colors={item.skin_colors}
              />
            </div>
          );
        })}
        <div className="btn">
          {species?.previous ? (
            <button onClick={previousPage}>
              <CaretLeft size={32} weight="fill" />
            </button>
          ) : null}
          {species?.next ? (
            <button onClick={nextPage}>
              <CaretRight size={32} weight="fill" />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
