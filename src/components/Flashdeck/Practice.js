import React from "react";
import { Card, CardSubtitle, CardBody, CardDeck, Container, Row, Col } from "reactstrap";
import "./practice.css";
//import CardIndex from "./CardIndex";

const Practice = props => {
  const flashCardMapper = () => {
    return props.cards
      ? props.cards.map((card, index) => {
          console.log(card);
          return (
            <Container key = {index}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <Card key={index} className="border border-white">
                      {/* <CardTitle>{card.id}</CardTitle> */}
                      <CardSubtitle>{card.concept}</CardSubtitle>
                      <CardBody>{card.example}</CardBody>
                    </Card>
                  </div>

                  <div className="flip-card-back">
                    <Card key={index} className="border border-white">
                      {/* <CardTitle>{card.id}</CardTitle> */}
                      <CardBody>{card.definition}</CardBody>
                    </Card>
                  </div>
                </div>
              </div>
            </Container>
          );
        })
      : () => {
          localStorage.clear();
        };
  };

  return (
    <>
      <h3>Flash Cards</h3>
      <CardDeck>{flashCardMapper()}</CardDeck>
    </>
  );
};

export default Practice;
