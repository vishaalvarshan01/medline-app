import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Aboutus from "./Pages/Aboutus";

import { supabase } from "./supabaseClient";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const getData = async () => {
      let { data, error } = await supabase.from("customerinfo").select("*");

      console.log(error);
      console.log(data);
    };
    getData();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
