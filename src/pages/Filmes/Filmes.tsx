import axios from "axios";
import { useEffect, useState } from "react";
import { Bg } from "../../components/Bg";
import { starRequest } from "../../types/starFilms";
import { BASE_URL } from "../../utils/request";
import { ArrowLeft } from "phosphor-react";
import "./filmes.css";
import { Link } from "react-router-dom";

export function Filmes() {
  const [films, setFilms] = useState<starRequest[]>([]);
  useEffect(() => {
    sagaFilme();
  }, []);

  const sagaFilme = async () => {
    const response = await axios(`${BASE_URL}/films/`).then((res) => {
      const data = res.data.results.map((obj: starRequest) => {
        return obj;
      });
      setFilms(
        data.filter((item: starRequest) => {
          return item.title;
        })
      );
    });
    return response;
  };

  return (
    <div>
      <Bg />
      <div className="filmes-name">
        <div className="filmes-name-position">
          <h2>Saga</h2>
        </div>
      </div>
      <div className="Filmes">
        <div className="filmes-content">
          <ul>
            {films.map((s, i) => (
              <li key={i}>{s.title}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="buscar-filme">
        <div className="buscar-filme-position">
          <Link to={"/"}>
            <button>
              <ArrowLeft size={32} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
