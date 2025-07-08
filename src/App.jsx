import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Carrinho from "./Carrinho";
import Home from "./Home";
import "./App.css";

function App() {
 

  return (
    <>
    <BrowserRouter>
     <Routes>
        <Route>
          <Route path="/Carrinho" element={<Carrinho />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
     

    </>
  );
}

export default App;
