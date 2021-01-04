import NavBar from "./components/NavBar";
import React from "react";
import { Container } from "react-bootstrap";
import PlaceInteraction from "./components/PlaceInteraction";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VehicleActivity from "./components/VehicleActivity";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Container className="mt-5">
              <PlaceInteraction />
            </Container>
          </Route>
          <Route path="/vehicle_activity">
            <Container className="mt-5">
              <VehicleActivity />
            </Container>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
