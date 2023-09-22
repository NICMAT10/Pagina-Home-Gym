import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"; 
import Logo from "../../assets/logo2.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="center-content">
          <div className="copyright">
            <p>© 2023 Home Gym Boutique. Todos los derechos reservados.</p>
            <p>Desarrollado por Nicolas Matias Maraz</p>
          </div>
          <div className="social-links">
            <a href="https://web.facebook.com/profile.php?id=61550242915581">
              <FaFacebook size={32} color="lightgray"/> {/* Usa FaGithub de react-icons */}
            </a>
            <a href="https://instagram.com/gymboutique_home?igshid=NTc4MTIwNjQ2YQ==">
              <FaInstagram size={32} color="lightgray" /> {/* Usa FaInstagram de react-icons */}
            </a>
            <a href="https://api.whatsapp.com/send/?phone=5493884538710&text&type=phone_number&app_absent=0">
              <FaWhatsapp size={32}  color="lightgray"/> {/* Usa FaLinkedin de react-icons */}
            </a>
          </div>
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
