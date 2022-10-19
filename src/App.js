import React from "react";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ItemListContainer from "./components/ItemListContainer";

function App(){

  const eClick = () => {
    console.log('click');
  }

    return (
      <>
        <Header 
          nombre= "Jose"
          apellido= "Perez"
          callback = {eClick}
          />
          <ItemListContainer greeting="Holi"/>
        <Main/>
        <Footer/>
      </>
    )
  }

  export default App;