import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import {ReactComponent as LOGO} from "./assets/Logo.svg";

const App = ()  =>{

  return (
      <div className="rr">

          <div className="app">

              <div className="logo">
                  <LOGO/>
              </div>
              <Navbar/>
          </div>


      </div>

  );
}

export default App;

