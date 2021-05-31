import React from "react";
import "./App.css";
import MyFooter from "./components/Footer/MyFooter";
import MyForm from "./components/Form/MyForm";
import MyNavBar from "./components/NavBar/MyNavBar";
import Presentation from "./components/Presentation/Presentation";

function App() {
  return (
    <>
      <MyNavBar />
      <Presentation />
      <MyForm />
      <MyFooter />
    </>
  );
}

export default App;
