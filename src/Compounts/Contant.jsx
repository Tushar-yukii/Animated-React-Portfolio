import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
const Contant = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>Contact Here</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <a href="https://www.github.com" target="_blank" className="items">
            <FaGithub className="icons" />
          </a>
          <a href="ttikkiwal@gamil.com" target="_blank" className="items">
            <SiGmail className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/tushar-tikkiwal-b32943359/"
            target="_blank"
            className="items"
          >
            <FaLinkedinIn className="icons" />
          </a>
          <a href="" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="" target="_blank" className="items">
            <FaFacebookF className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contant;
