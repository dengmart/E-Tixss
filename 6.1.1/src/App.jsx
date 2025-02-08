import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import reactLogo from "./assets/real.svg";
import viteLogo from "/vite.svg";
import Register from "./components/Register";
import Loginform from "./components/Loginform";
import Tickets from "./components/Tickets";
import Dash from "./components/Dash";
import Naf from "./components/Naf";

function App() {
  return (
    <>
      <BrowserRouter>
        <Naf />
        <Routes>
          <Route path="/" element={<Dash />} />
          <Route path="/Tickets" element={<Tickets />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Loginform" element={<Loginform />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
