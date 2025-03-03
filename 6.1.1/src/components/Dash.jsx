import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
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

export default function Dash() {
  return (
    <div className="stacks">
      <Stack direction="horizontal" gap={3}>
        <div className="p-2">first stack</div>

        <div className="p-2 ms-auto">second stack</div>

        <div className="p-2">third stack</div>
      </Stack>
    </div>
  );
}
