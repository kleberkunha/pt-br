import React from 'react';
import HeaderBar from "./Components/Header/navbar.html";
import MainTop from "./Components/MainTop/maintop.html";
import Main from "./Components/ContentPortfolio/main.html";
import { BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <HeaderBar/>
      <MainTop/>
      <Main/>
    </BrowserRouter>
  );
}

export default App;