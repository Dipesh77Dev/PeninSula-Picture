import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Entry from "./Components/Entry.js";
import Home from "./Components/Home.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Entry />}> */}
        <Route exact path="/" element={<Entry />} />
          <Route exact path="/home" element={<Home />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
