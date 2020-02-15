import React , { useState } from "react";
import {
  Card,
  Button,
  CardTitle,
  CardDeck,
  CardSubtitle,
  CardBody,
  Fade
} from "reactstrap";
import "./practice.css";
//import CardIndex from "./CardIndex";

const Practice = props => {

  const [clickedIndex, setClickedIndex] = useState(0)
  const [fadeIn, setFadeIn] = useState(false);
  const toggle = (transfer) => {
  setFadeIn(!fadeIn)
  setClickedIndex(transfer)
  }
  const flashCardMapper = () => {
    return props.cards
      ? props.cards.map((card, index) => {
          return (
            <Card key={index}>
              {/* <CardTitle>{card.id}</CardTitle> */}
              <CardSubtitle>{card.concept}</CardSubtitle>
              <CardBody>{card.example}</CardBody>
            <Button color="primary" size="sm" onClick={()=>toggle(index)}>Definition</Button>
            <Fade in={fadeIn} tag="h5" className="mt-3">
            {index==clickedIndex ? card.definition : null}
            </Fade>
            </Card>
          );
        })
      : () => {
          localStorage.clear();
        };
  };

  return (
    <>
      <h3>Card History</h3>
      <hr />
      <CardDeck>{flashCardMapper()}</CardDeck>
    </>
  );
};

export default Practice;
