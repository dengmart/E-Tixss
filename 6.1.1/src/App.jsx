import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Register from "./components/Register";
import Loginform from "./components/Loginform";

function App() {
  return (
    <>
      <div>
        <Register />
      </div>
    </>
  );
}

export default App;
