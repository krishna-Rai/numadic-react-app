import React from "react";
import { Navbar,Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Link to="/">
          <Navbar.Brand>Place Interactions</Navbar.Brand>
        </Link>
        <Link to="/vehicle_activity">
          <Navbar.Brand>Vehicle Activity</Navbar.Brand>
        </Link>
        <Navbar.Brand href="#" style={{ marginLeft: "350px" }}>
          Numadic
        </Navbar.Brand>
      </Nav>
    </Navbar>
  );
}
