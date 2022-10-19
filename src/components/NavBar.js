import React from "react";
import CartWidget from "./CartWidget";

function NavBar(){
    return (
      <nav>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        <CartWidget/>
      </nav>
    )
}

export default NavBar;