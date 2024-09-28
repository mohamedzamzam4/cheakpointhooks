import React, { useRef, useState } from "react";
import StarRatingComponent from "react-star-rating-component";

const Addmovie = (props) => {
  const tref = useRef();

  const dref = useRef();
  const uRef = useRef();

  const [stars, setStars] = useState(0);
  const onStarClick = (nextValue) => {
    setStars(nextValue);
  };
  return (
    <div className="Addmovie">
      <h2 className="Addmovie h2">
        donner un title :
        <input type="text" ref={tref} className="Addmovie input" />
      </h2>
      <h2 className="Addmovie h2">
        donner un description:
        <input type="text" ref={dref} className="Addmovie input" />
      </h2>
      <h2 className="Addmovie h2">
        donner l'url :
        <input type="text" ref={uRef} className="Addmovie input" />
      </h2>
      <h2 className="Addmovie h2">
        donner la note :
        <StarRatingComponent
          name="rate2"
          editing={true}
          starCount={10}
          onStarClick={onStarClick}
        />
      </h2>
      <button
        onClick={() => {
          props.setMovielist([
            ...props.movielist,
            {
              title: tref.current.value,
              description: dref.current.value,
              posterUrl: uRef.current.value,
              rating: stars,
            },
          ]);
        }}
      >
        Add Movie
      </button>
    </div>
  );
};

export default Addmovie;
