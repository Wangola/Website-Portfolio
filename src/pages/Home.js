import React from "react";
import { BsGithub as GithubIcon } from "react-icons/bs";
import { BsLinkedin as LinkedInIcon } from "react-icons/bs";
import { HiMail as EmailIcon } from "react-icons/hi";
import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, my name is William </h2>
        <div className="prompt">
          <p> A software engineer with a passion for learning and creating</p>

          <Link
            to={"https://github.com/Wangola"}
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </Link>

          <Link to={"/contact"}>
            <EmailIcon />
          </Link>

          <Link
            to={"https://www.linkedin.com/in/wangola/"}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </Link>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-end</h2>
            <span> ReactJS, HTML, CSS</span>
          </li>
          <li className="item">
            <h2> Back-end</h2>
            <span> Java, Spring Boot, AWS, DynamoDB, MySQL</span>
          </li>
          <li className="item">
            <h2> Languages</h2>
            <span> Java, Python, JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
