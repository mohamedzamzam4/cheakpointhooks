import React from "react";
import { useParams } from "react-router-dom";
import "./App.css";

const Trailer = ({ list }) => {
  //Recupere le parametres de la route
  const Params = useParams();
  //Rechercher le film dans le state
  const movie = list.find((el) => el.title === Params.movieName);
  //affichage d'erreurs
  if (!movie) {
    return <div>Movie not found</div>;
  }
  //Afficher le trailer de film
  return (
    <div className="section">
      <h1>{movie.title}</h1>

      <div className="trailer">{movie.trailer}</div>
    </div>
  );
};

export default Trailer;
