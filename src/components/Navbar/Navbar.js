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

import CardIcon from "./FlashCards1-01.png";
import "./navbar.css";
import { Link } from "react-router-dom";

const Sitebar = props => {
  let [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };

  return (
    <Navbar color="dark">
      <NavbarBrand>
        <img src={CardIcon} style={{ width: 150 }} />
      </NavbarBrand>
     <NavbarToggler className="btn-dark" onClick={toggle} />
      <Collapse isOpen={isOpen} navbar color="dark">
        <Nav className="main">
        <div className="d-flex flex-column bd-highlight mb-3">
        <div className="p-2 bd-highlight"><Link to="/" style={{ color: '#FFF' }}>Home</Link></div>
        <div className="p-2 bd-highlight"><Link to="/about" style={{ color: '#FFF' }}>About</Link></div>
        <div className="p-2 bd-highlight"><Link to="/words" style={{ color: '#FFF' }}>Words</Link></div>
          <Button type="button" className="btn btn-light" onClick={props.clickLogout}>
              Logout
            </Button>
            </div>
      </Nav>
      </Collapse>
    </Navbar>
  );
};
export default Sitebar;
