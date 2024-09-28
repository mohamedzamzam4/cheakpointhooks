import logo from "./logo.svg";
import "./App.css";
import MovieList from "./MovieList";
import React, { useState } from "react";
import Addmovie from "./Addmovie";
import Filter from "./Filter";

function App() {
  const [movielist, setMovielist] = useState([
    {
      title: "The Last Summer",
      description: "good movie",
      posterUrl:
        "https://occ-0-8407-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfGGq99MCqgv8q3kKwd8ZxImB9Tb_lDorpV_z6RzgORcryzpf7PnwSkQ-C0GtWgOK_9IQEq4DgSeQPl5pJoKCESCIHCRn32wGmMk1GdRlslPTs9DiZxVWHYwiD_f7Ab2_CmhKA.jpg?r=f71",
      rating: 9.0,
    },
    {
      title: "HIT LIST",
      description: "hight quality",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMzdiZjFhMDYtZTQ4YS00N2FhLThiZmItYTQ0NzE4Mjg1M2M1XkEyXkFqcGc@._V1_.jpg",
      rating: 7,
    },
    {
      title: "Tiranga",
      description: "acceptable",
      posterUrl:
        "https://assets.gadgets360cdn.com/pricee/assets/product/202209/Code_Name_Tiranga_1663878733.jpg",
      rating: 5,
    },

    {
      title: "Spider-Man",
      description: "is full of action",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/en/6/6c/Spider-Man_%282002_film%29_poster.jpg",
      rating: 8.4,
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
      <header className="App-header">
        <Filter list={movielist} onFilterChange={Filteredfil} />
        <Addmovie movielist={movielist} setMovielist={setMovielist} />
        <MovieList movies={filterfilms} />
      </header>
    </div>
  );
}

export default App;
