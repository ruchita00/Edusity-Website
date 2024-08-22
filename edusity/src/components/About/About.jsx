// eslint-disable-next-line no-unused-vars
import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about_left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-img" />
      </div>
      <div className="about_right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Emberk on a transformative educational journey with our university's
          comprehernsive education programs. Our cutting-edge curriculum is
          designed to empower students with the dynamic filed of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities
        </p>
        <p>
          Wheather you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
