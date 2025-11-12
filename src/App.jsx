import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// আপনার Navbar কম্পোনেন্ট এখানে ইম্পোর্ট করুন (সঠিক পাথ ব্যবহার করুন)
import Navber from "./pages/Navber"; // আপনার পাথ অনুযায়ী পরিবর্তন করুন

import HomePage from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar কে Routes এর বাইরে রাখায় এটি সব পেজে দেখাবে */}
      <Navber />

      {/* 
        এই সেকশনটি আপনার পেজের কন্টেন্টকে ধারণ করবে।
        এখানে `pt-20` ক্লাসটি যোগ করা হয়েছে, যাতে কন্টেন্ট ফিক্সড ন্যাভবারের নিচে চলে না যায়।
      */}
      <section className={`pt-20 bg-gray-900 text-white bg-[url('bg.webp')] bg-no-repeat bg-cover w-full min-h-screen flex flex-col justify-center items-center`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
