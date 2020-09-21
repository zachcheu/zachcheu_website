import React from "react";
import HeaderButton from "./components/HeaderButton";
import { FaEnvelope, FaGithubAlt, FaFile, FaLinkedin } from "react-icons/fa";
import Profile from "./files/selfie.jpeg";

function Home() {
  return (
    <div className="Home">
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
            link="files/Resume_Zechariah_Cheung_9_13.pdf"
            name="Resume"
            logo={<FaFile />}
          />
          <HeaderButton
            link="https://www.linkedin.com/in/zcheu/"
            name="LinkedIn"
            logo={<FaLinkedin />}
          />
          <HeaderButton
            link="https://github.com/zcheu"
            name="Github"
            logo={<FaGithubAlt />}
          />
        </div>
      </div>
      <div class="about">
        <div class="aboutheader">
          <div class="abouttitle">
            <h2>About</h2>
          </div>
        </div>
        <div class="abouttext">
          <p>
            Hello! I'm Zach Cheung. I'm currently in my senior year at the
            University Of Washington. I work with full-stack technologies and a
            bit of mobile development. Outside of work I enjoy bouldering,
            playing video & board games, and keeping up with the coolest tech.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
