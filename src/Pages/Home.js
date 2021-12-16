import React, { useEffect } from "react";
import Announcements from "../components/Announcements";
import { Categories } from "../components/Categories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Home = () => {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => console.log(json));
  });

  return (
    <div>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
