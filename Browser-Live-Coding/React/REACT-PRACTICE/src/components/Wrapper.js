import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Wrapper({ data }) {
  return (
    <div className="row">
      {data.map((item) => {
        return (
          <Card style={{ width: "18rem" }} className="col-md-4">
            <Card.Img variant="top" src={item.recipe.image} />
            <Card.Body>
              <Card.Title>{item.recipe.label}</Card.Title>
              <Card.Text>
                {item.recipe.source}
                <ul>
                  {item.recipe.ingredients.map((each) => {
                    return <li> {each.text}</li>;
                  })}
                </ul>
              </Card.Text>
              <Button variant="primary" href={item.recipe.url}>
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}