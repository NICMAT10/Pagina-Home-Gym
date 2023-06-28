import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo2.png";
const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <a href="https://github.com/NICMAT10/Pagina-Home-Gym">
          <img src={Github} alt="logo de github" />
          </a>
          <a href="https://instagram.com/gymboutique_home?igshid=NTc4MTIwNjQ2YQ==">
          <img src={Instagram} alt="logo de instagram" />
          </a>
          <a href="https://www.linkedin.com/in/matias-maraz-745580255/">
          <img src={LinkedIn} alt="logo de linkedIn" />
          </a>
        </div>

        <div className="Logo-f">
          <img src={Logo} alt="logo del gym" />
        </div>
      </div>
      <div className="blur footer-blur-f-1"></div>
      <div className="blur footer-blur-f-2"></div>
    </div>
  );
};

export default Footer;
