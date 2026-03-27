import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Editdata from "./components/Editdata";
import Footer from "./components/Footer";
import Navber from "./components/Navber";
import Error from "./pages/Error";

const App = () => {
  return (
    <div>
      <Navber/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Editdata />} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
