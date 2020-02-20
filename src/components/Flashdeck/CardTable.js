import React from "react";
import { Table, Button, Row, Col } from "reactstrap";
import "./cardTable.css";
import APIURL from "../../helpers/environment"

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
                <Row>
                  <Col>
                <Button
                  outline color="warning"
                  onClick={() => {
                    props.editUpdateCard(card);
                    props.updateOn();
                  }}
                >
                  Update
                </Button>
                </Col>
                </Row>
                </td>

                <td>
                <Row>
                <Col>
                <Button
                  color="danger"
                  onClick={() => {
                    deleteCard(card);
                  }}
                >
                  Delete
                </Button>
                </Col>
                </Row>
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
      backgroundColor: 'white',
    }}
    >
      <h3>Card History</h3>
      <hr />
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Example</th>
            <th>Concept</th>
            <th>Definition</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{cardMapper()}</tbody>
      </Table>
    </div>
  );
};

export default CardTable;
