import React, { useEffect, useState } from "react";
import "./App.css";
import Auth from "./components/Auth/Auth";
import Sitebar from "./components/Navbar/Navbar";
import CardIndex from "./components/Flashdeck/CardIndex";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Link, Switch } from "react-router-dom";
import About from "../src/components/Routes/About";
import Words from "../src/components/Routes/Words";

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  const updateToken = newToken => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(newToken);
  };

  const protectedViews = () => {
    return localStorage.getItem("token") === sessionToken ? (
      <CardIndex token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  return (
    <div className="App">
      <Router>
        <Sitebar clickLogout={clearToken} />
          <Switch>
            <Route exact path = "/" component={Auth}>
            {protectedViews()}
            </Route>
            <Route exact path="/about" component={About}>
              <About />
            </Route>
            <Route exact path="/words" component={Words}>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
