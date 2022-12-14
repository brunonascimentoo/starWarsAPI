import axios from "axios";
import { useEffect, useState } from "react";
import { Bg } from "../../components/Bg/Bg";
import { starRequest } from "../../types/films/starFilms";
import { url } from "../../utils/request";
import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo/Logo";

export function Filmes() {
  const [films, setFilms] = useState<starRequest[]>([]);

  useEffect(() => {
    axios(`${url}/films/`).then((response) => {
      setFilms(response.data.results);
    });
  }, []);

  return (
    <div className="container-main">
      <Bg />
      <div className="logo-position">
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>
      <div className="main-container">
        {films.map((film, i) => {
          return (
            <div key={i} className="card-container">
              {film.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}
