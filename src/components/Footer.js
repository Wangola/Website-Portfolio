import React from "react";
import { BsGithub as GithubIcon } from "react-icons/bs";
import { BsLinkedin as LinkedInIcon } from "react-icons/bs";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/Wangola" target="_blank" rel="noreferrer">
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/wangola/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>

      {/* Creates @ sign */}
      <p> &copy; 2023 wangola.com</p>
    </div>
  );
}

export default Footer;
