import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";
import { CardBody, CardImg } from "react-bootstrap";

const MovieCard = (props) => {
  return (
    <Link to={`/Trailer/${props.list.title}`}>
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
    </Link>
  );
};

export default MovieCard;
