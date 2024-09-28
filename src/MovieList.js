import MovieCard from "./MovieCard";

const MovieList = (props) => {
  return (
    <div className="container">
      {props.movies.map((el) => (
        <MovieCard list={el} />
      ))}
    </div>
  );
};

export default MovieList;
