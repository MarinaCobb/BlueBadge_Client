import React from "react";
import { Table, Button, ButtonGroup } from "reactstrap";
import "./cardTable.css";
import APIURL from "../../helpers/environment";

const CardTable = props => {
  const deleteCard = card => {
    fetch(`${APIURL}/api/card/delete/${card.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token
      })
    }).then(() => props.fetchCards());
  };

  const cardMapper = () => {
    return props.cards
      ? props.cards.map((card, index) => {
          return (
            <tr key={index}>
              <th scope="row">{card.id}</th>
              <td>{card.example}</td>
              <td>{card.concept}</td>
              <td>{card.definition}</td>
              <td>
                <ButtonGroup aria-label="Basic example">
                  <Button
                    variant="secondary"
                    outline color="info"
                    onClick={() => {
                      props.editUpdateCard(card);
                      props.updateOn();
                    }}
                  >
                    Update
                  </Button>

                  <Button
                    variant="secondary"
                    outline color="danger"
                    onClick={() => {
                      deleteCard(card);
                    }}
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          );
        })
      : () => {
          localStorage.clear();
        };
  };

  return (
    <div
      style={{
        backgroundColor: "white"
      }}
    >
      <br />
      <h3>Card History</h3>
      <br />
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Example</th>
            <th>Concept</th>
            <th>Definition</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>{cardMapper()}</tbody>
      </Table>
    </div>
  );
};

export default CardTable;
