import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { Button, Row, Col } from "reactstrap";
import "./auth.css";

const Auth = props => {
  const [showLogin, setShowLogin] = useState(true);
  const [buttonName, setButtonName] = useState("DON'T HAVE AN ACCOUNT? SIGNUP");
  const [loginText, setLoginText] = useState("");

  function toggleLogin() {
    return showLogin ? (
      <Login updateToken={props.updateToken} />
    ) : (
      <Signup updateToken={props.updateToken} />
    );
  }

  function changeView() {
    if (showLogin) {
      setShowLogin(false);
      setButtonName("LOGIN");
      setLoginText("HAVE AN ACCOUNT? ");
    } else {
      setShowLogin(true);
      setButtonName("SIGNUP");
      setLoginText("DONT HAVE AN ACCOUNT? ");
    }
  }
  return (
    

      <Row>
        <Col>
      {toggleLogin()}
      {
        <div className="d-flex justify-content-center"><Button style={{ color: '#FFF' }} onClick={changeView} color="link" className="button1">
          {loginText}
           {buttonName}
        </Button>
        </div>
      }
      </Col>
      </Row>
  );
};



export default Auth;
