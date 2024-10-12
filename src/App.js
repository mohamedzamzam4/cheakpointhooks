import logo from "./logo.svg";
import "./App.css";
import MovieList from "./MovieList";
import React, { useState } from "react";
import Addmovie from "./Addmovie";
import Filter from "./Filter";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import Trailer from "./Trailer";

function App() {
  //mettre le films dans une state
  const [movielist, setMovielist] = useState([
    {
      title: "The Last Summer",
      description: "good movie",
      posterUrl:
        "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfGGq99MCqgv8q3kKwd8ZxImB9Tb_lDorpV_z6RzgORcryzpf7PnwSkQ-C0GtWgOK_9IQEq4DgSeQPl5pJoKCESCIHCRn32wGmMk1GdRlslPTs9DiZxVWHYwiD_f7Ab2_CmhKA.jpg?r=f71",
      rating: 9.0,
      trailer: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Qe9B8kzlFjM?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      title: "HIT LIST",
      description: "hight quality",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMzdiZjFhMDYtZTQ4YS00N2FhLThiZmItYTQ0NzE4Mjg1M2M1XkEyXkFqcGc@._V1_.jpg",
      rating: 7,
      trailer: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/rXkAUU63t74?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      title: "Tiranga",
      description: "acceptable",
      posterUrl:
        "https://assets.gadgets360cdn.com/pricee/assets/product/202209/Code_Name_Tiranga_1663878733.jpg",
      rating: 5,
      trailer: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Fz59A68eH4E?si=H83UJEEBdJIjlB4Z"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
    },

    {
      title: "Spider-Man",
      description: "is full of action",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/6/6c/Spider-Man_%282002_film%29_poster.jpg",
      rating: 8.4,
      trailer: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/t06RUxPbp_c?si=H6NKEPbj8UU-i3c8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
    },
  ]);

  const [filterfilms, setFilterfilms] = useState(movielist);
  //this function take the result of the input movie and compare it with the movies list
  const Filteredfil = (input) => {
    const filterfilms = movielist.filter((movie) => {
      if (input === "") {
        return true;
      } else if (
        movie.title.toLowerCase().trim().includes(input.toLowerCase().trim())
      ) {
        return true;
      } //compare the movie rating
      else if (movie.rating === parseInt(input)) {
        return true;
      }
    });
    setFilterfilms(filterfilms);
  };

  return (
    <div>
      {/* defintion de routes */}
      <Routes>
        <Route
          /*Route principale de l'application */
          path="/"
          element={
            <header className="App-header">
              <Filter list={movielist} onFilterChange={Filteredfil} />
              <Addmovie movielist={movielist} setMovielist={setMovielist} />
              <MovieList movies={filterfilms} />
            </header>
          }
        />

        <Route
          //Route de trailer
          path="/Trailer/:movieName"
          element={<Trailer list={movielist} />}
        />
      </Routes>
    </div>
  );
}

export default App;
