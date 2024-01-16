import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer container-content">
      <div className="mb-10">
        <div className="footer-logo">
          <Image
            src={"/images/xtravaganza_3.webp"}
            alt="Xtravaganza logo"
            height="370"
            width="370"
          />
        </div>

        <h2 className="contact-us-title fv-h2">Contact Us</h2>
        <div className="social-links">
          <a href={"https://www.instagram.com/__xtravaganza__/"}>
            <Image
              src={"/images/icons/instagram.webp"}
              alt="instagram"
              height="70"
              width="70"
            />
          </a>
          <a href="mailto:xtravaganza2022@gmail.com">
            <Image
              src={"/images/icons/email.webp"}
              alt="email"
              height="70"
              width="70"
            />
          </a>
        </div>
      </div>
      <div className="footer-creator">
        <p className="fv-p">
          Coded with ❤ By{" "}
          <a href={`mailto:shreyog23@gmail.com`}>Shreyog Nemlekar</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
