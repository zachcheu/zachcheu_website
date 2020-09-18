import React from "react";
import HeaderButton from "./HeaderButton";
import { FaEnvelope, FaGithubAlt, FaFile, FaLinkedin } from "react-icons/fa";
import Profile from "../files/selfie.jpeg";

export default (props) => (
  <div class="home-description">
    <div class="imgcenterwrap">
      <img
        src={Profile}
        class="headshot"
        alt="A profile shot of Zach Cheung"
      ></img>
    </div>

    <div class="introlinks">
      <div class="introname">
        <b>Zach Cheung</b>
      </div>
      <div class="introtitle">
        I'm a Computer Science Student
        <br />
        at University of Washington.
      </div>
      <HeaderButton
        link="mailto:zachcheu@gmail.com"
        name="Email"
        logo={<FaEnvelope />}
      />
      <HeaderButton
        link="https://github.com/zcheu"
        name="Github"
        logo={<FaGithubAlt />}
      />
      <HeaderButton
        link="files/Resume_Zechariah_Cheung_9_13.pdf"
        name="Resume"
        logo={<FaFile />}
      />
      <HeaderButton
        link="https://www.linkedin.com/in/zcheu/"
        name="LinkedIn"
        logo={<FaLinkedin />}
      />
    </div>
  </div>
);
