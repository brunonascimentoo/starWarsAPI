import axios from "axios";
import { useEffect, useState } from "react";
import { Bg } from "../../components/Bg";
import { starRequest } from "../../types/films/starFilms";
import { BASE_URL } from "../../utils/request";
import { CaretLeft } from "phosphor-react";
import "./filmes.css";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo/Logo";

export function Filmes() {
  const [films, setFilms] = useState<starRequest[]>([]);

  useEffect(() => {
    axios(`${BASE_URL}/films/`).then((response) => {
      setFilms(response.data.results);
    });
  }, []);

  return (
    <div>
      <Bg />
      <div className="logo-position">
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>
      <div className="filmes-name">
        <div className="filmes-name-position">
          <h2>Films</h2>
        </div>
      </div>
      <div className="Filmes">
        <div className="filmes-content">
          <ul>
            {films.map((film, i) => (
              <div key={i}>
                <li>{film.title}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className="buscar-filme">
        <div className="buscar-filme-position">
          <Link to={"/"}>
            <button>
              <CaretLeft size={32} weight="fill" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
