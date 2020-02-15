import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  Button,
  NavbarToggler,
  Collapse,
  Nav
} from "reactstrap";

import CardIcon from "./flashcards.png";
import "./navbar.css";
import { Route, Link, Switch } from "react-router-dom";

const Sitebar = props => {
  let [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };

  return (
    <Navbar className="NB">
      <NavbarBrand>
        <img src={CardIcon} style={{ width: 200 }} />
      </NavbarBrand>
      {/* <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar> */}
        <Nav className="ml-auto" navbar>
          <NavItem>
            {/* <Button className="pull-right" onClick={props.clickLogout}>
              Logout
            </Button> */}
          </NavItem>

      <ul>
        <li>
          <Link to="/">Login</Link>
          <Link to="/about">About</Link>
          <Link to="/words">Words</Link>
          <Button className="pull-right" onClick={props.clickLogout}>
              Logout
            </Button>
        </li>
      </ul>
      </Nav>
      {/* </Collapse> */}
    </Navbar>
  );
};
export default Sitebar;
