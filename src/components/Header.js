import React from "react";
import NavBar from "./NavBar";

function Header(prop){
    return (
      <header id="main-header" className="header">
        <h1>Pepitos</h1>
        <p>Bienvenido {prop.nombre + " " + prop.apellido}</p>
        <button onClick={prop.callback}>Click</button>
        <NavBar/>
      </header>
    )
}

export default Header;