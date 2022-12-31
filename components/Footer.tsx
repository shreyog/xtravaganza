import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer container-content">
      <div className="mb-10">
        <h2 className="section-title fv-h2">Contact Us</h2>
        <div className="social-links">
          <a href={"https://www.instagram.com/__xtravaganza__/"}>
            <Image
              src={"/images/icons/instagram.png"}
              alt="instagram"
              height="50"
              width="50"
            />
          </a>
          <a href="mailto:xtravaganza2022@gmail.com">
            <Image
              src={"/images/icons/email.png"}
              alt="email"
              height="50"
              width="50"
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
