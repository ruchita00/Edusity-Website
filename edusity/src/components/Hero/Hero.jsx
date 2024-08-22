// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fuga
          voluptas totam magni, quas aut distinctio quibusdam doloribus veniam
          vel eum commodi! Eveniet beatae non totam officia maiores quaerat
          esse!
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="arrow_icon" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
