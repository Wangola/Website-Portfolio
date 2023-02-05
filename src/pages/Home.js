import React from "react";
import { BsGithub as GithubIcon } from "react-icons/bs";
import { BsLinkedin as LinkedInIcon } from "react-icons/bs";
import { HiMail as EmailIcon } from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";

// Skill icons (icons commented out in case Devicon svg's are taken [could update all to be individual svg's "worldvectorlogo"])
// import { IoLogoReact as ReactIcon } from "react-icons/io5";
// import { IoLogoHtml5 as HtmlIcon } from "react-icons/io";
// import { IoLogoCss3 as CssIcon } from "react-icons/io";

// import { SiJava as JavaIcon } from "react-icons/si";
// import { SiSpringboot as SpringIcon } from "react-icons/si";
// import { SiAmazonaws as AwsIcon } from "react-icons/si";
import AwsIcon from "../assets/Aws.svg";
import DynamoIcon from "../assets/DynamoDB.svg";
// import { SiMysql as SqlIcon } from "react-icons/si";

// import { SiPython as PythonIcon } from "react-icons/si";
// import { SiJavascript as JsIcon } from "react-icons/si";

// Skill icons

import "../styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm William Angola </h2>
        <div className="prompt">
          <p>
            Software engineer{" "}
            {/* Reference https://www.youtube.com/watch?v=t7ePHIsKnnI&t=41s , https://www.npmjs.com/package/react-simple-typewriter*/}
            <span style={{ color: "white", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "who seeks impact through new challenges 🚀",
                  "and life-long programmer 🧑🏽‍💻",
                  "with a passion for gaming 🎮",
                  "and is a Java enthusiast 🤩",
                ]}
                loop={Infinity}
                typeSpeed={50}
                deleteSpeed={40}
                delaySpeed={3000}
              />
            </span>
            {/* A software engineer seeking new challenges to make a positive
            impact. */}
          </p>

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
      {/* Separating header */}
      <div className="skills">
        <h1> Skills</h1>
      </div>

      {/* Handles item placement of skills */}
      <div className="skills-container">
        <div className="skill-box">
          <h2 className="front">Front end</h2>

          <img
            className="icon-spacing"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt={"react"}
          />
          <img
            className="icon-spacing"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt={"html"}
          />
          <img
            className="icon-spacing"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt={"css"}
          />

          {/* <ReactIcon size={"70px"} color={"#61dafb"} />
          <HtmlIcon className="icon-spacing" size={"70px"} color={"#fe5722"} />
          <CssIcon className="icon-spacing" size={"70px"} color={"#4179d2"} /> */}
        </div>

        <div className="skill-box">
          <h2 className="back">Back end</h2>

          <img
            className="icon-java"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
            alt={"java"}
          />
          <img
            className="icon-spacing"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
            alt={"spring"}
          />
          <img className="icon-spacing" src={AwsIcon} alt={"AWSIcon"} />
          <img className="icon-spacing" src={DynamoIcon} alt={"DynamoDBIcon"} />

          <img
            className="icon-java"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
            alt={"MySQL"}
          />

          {/* Left these icons in case Devicon svg's go down
          <JavaIcon size={"70px"} color={"#0076b4"} />
          <SpringIcon className="icon-spacing" size={"70px"} color={"#6db33d"} />
          <SqlIcon className="icon-spacing" size={"70px"} color={"black"} /> */}
        </div>

        <div className="skill-box">
          <h2 className="lang">Languages</h2>

          <img
            className="icon-java"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
            alt={"java"}
          />
          <img
            className="icon-spacing"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt={"python"}
          />
          <img
            className="icon-spacing"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt={"javascript"}
          />

          {/* Left these icons in case Devicon svg's go down
          <JavaIcon size={"70px"} color={"#0076b4"} />
          <PythonIcon className="icon-spacing" size={"70px"} color={"black"} />
          <JsIcon className="icon-spacing" size={"70px"} color={"#5da013"} /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
