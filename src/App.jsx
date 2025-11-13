import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navber from "./pages/Navber"; 
import HomePage from "./pages/Home";
import Contact from "./pages/Contact";
import Massege from "./pages/Massege";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navber />

  
      <section className={`pt-20 bg-gray-900 text-white bg-[url('bg.webp')] bg-no-repeat bg-cover w-full min-h-screen flex flex-col justify-center items-center`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Message" element={<Massege/>} />
            <Route path="/About" element={<About/>} />
          </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
