import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Stack from "react-bootstrap/Stack";
import Table from "react-bootstrap/Table";
import "./instyle.css";

function Naf() {
  return (
    <div className="naf">
      <Stack direction="horizontal" gap={3}>
        <div className="p-2">
          <Navbar expand="lg">
            <Container fluid>
              <Navbar.Brand href="#">
                <h3>NLYYA-JUBA</h3>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link>
                    <Link to="/Dash">
                      <p className="link">Home</p>
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="Aboutus">
                      <p className="link">About Us</p>
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="Events">
                      <p className="link">Events</p>
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/Tickets">
                      <p className="link">Executives</p>
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/FAQ">
                      <p className="link">FAQs</p>
                    </Link>
                  </Nav.Link>
                  <NavDropdown title="Services" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="Register">
                    <p className="register">Sign Up</p>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div className="Reg">
          <Link to="Register">
            <h6>Sign up</h6>
          </Link>
        </div>
        <div className="p-2">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div>
      </Stack>
    </div>
  );
}
export default Naf;
