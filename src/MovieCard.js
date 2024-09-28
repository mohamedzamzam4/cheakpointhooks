import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import StarRatingComponent from "react-star-rating-component";

const MovieCard = (props) => {
  return (
    <div>
      <Card style={{ width: "20rem", height: "500px" }}>
        <Card.Img
          variant="top"
          style={{ width: "100%", height: "250px" }}
          src={props.list.posterUrl}
        />
        <Card.Body>
          <Card.Title>
            <h1>{props.list.title}</h1>
          </Card.Title>
          <Card.Text>{props.list.description}</Card.Text>

          <StarRatingComponent
            name="rate2"
            editing={false}
            starCount={10}
            value={props.list.rating}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
