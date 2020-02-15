import React, { useState, useEffect } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import CardCreate from "./CardCreate";
import CardTable from "./CardTable";
import CardEdit from "./CardEdit";
import Practice from "./Practice"
// import Sidebar from '../Routes/Sidebar'
// import { BrowserRouter as Router, } from 'react-router-dom';

function CardIndex(props) {
  const [cards, setCards] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [cardToUpdate, setCardToUpdate] = useState({});
  const [activeTab, setActiveTab] = useState("Table");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const editUpdateCard = cards => {
    setCardToUpdate(cards);
    console.log(cards);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  const fetchCards = () => {
    fetch("http://localhost:4000/api/card/getall", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token
      })
    })
      .then(res => res.json())
      .then(cardData => {
        setCards(cardData);
        console.log(cardData);
      });
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div>
      <Nav tabs>
        <NavItem className='nav-item'>
          <NavLink
            className={classnames({ active: activeTab === "Table" })}
            onClick={() => {
              toggle("Table");
            }}
          >
            Table
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "createCard" })}
            onClick={() => {
              toggle("createCard");
            }}
          >
            Create Cards
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "Practice" })}
            onClick={() => {
              toggle("Practice");
            }}
          >
            Practice
          </NavLink>
        </NavItem>

      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="Table">
          <Row>
            <Col>
              <CardTable
                cards={cards}
                fetchCards={fetchCards}
                token={props.token}
                editUpdateCard={editUpdateCard}
                updateOn={updateOn}
              />
            </Col>
            {updateActive ? (
              <CardEdit
                cardToUpdate={cardToUpdate}
                updateOff={updateOff}
                token={props.token}
                fetchCards={fetchCards}
              />
            ) : null}
          </Row>
        </TabPane>
        <TabPane tabId="createCard">
          <Row>
            <Col sm="6">
              <CardCreate fetchCards={fetchCards} token={props.token} />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="Practice">
          <Row>
            <Col sm="6">
              <Practice fetchCards={fetchCards} token={props.token} cards={cards}/>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default CardIndex;
