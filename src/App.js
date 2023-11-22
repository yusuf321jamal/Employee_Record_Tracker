import React from "react";
import Create from "./Components/Create";
import { Routes, Route } from "react-router-dom";
import Read from "./Components/Read";
import Update from "./Components/Update";

function App() {
  return (
    <Routes>
      <Route path="/"  element={<Read />}/>
      <Route path="/create" element={<Create />} />
      <Route path="/update" element={<Update />} />
    </Routes>
  );
}

export default App;
