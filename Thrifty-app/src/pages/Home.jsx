// import React from "react";
import Navbar from "../components/Navbar";
import Image from "../assets/images/Img1.jpg";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-image">
        <img src={Image} alt="Image" />
      </div>
    </div>
  );
};

export default Home;
