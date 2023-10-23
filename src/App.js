import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Thankyou from "./Components/Thankyou";
import Screen from "./Components/Screen";


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Screen/>} />
          <Route exact path="thankyou/:name" element={<Thankyou/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
