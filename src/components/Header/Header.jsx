import React, { useState } from "react";
import Logo from '../../assets/logo2.png'
import Bars from '../../assets/bars.png'
import { Link } from "react-scroll";
import "./Header.css";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="Logo del gimnasio" className="logo"/>
      {menuOpened === false && mobile === true ? (
        <div
        style={{backgroundColor: 'var(--appColor)', padding: '0.56', borderRadius: '5px'}}

        onClick={() => setMenuOpened(true)}
        >
          <img src={Bars} alt="Logo menu" style={{width: '1.5rem', height:'1.5rem'}}/>
        </div>
      ) : (

        <ul className="header-menu">
          <li><Link
          onClick={()=>setMenuOpened(false)}
          to="hero"
          span={true}
          smooth={true}
          >Inicio</Link>
            </li>
          <li><Link
            onClick={()=>setMenuOpened(false)}
            to="Programs"
            span={true}
            smooth={true}
          >Programas</Link> </li>
          <li><Link
            onClick={()=>setMenuOpened(false)}
            to="Reasons"
            span={true}
            smooth={true}
          >Por qué nosotras</Link> </li>
          <li><Link
            onClick={()=>setMenuOpened(false)}
            to="plans-container"
            span={true}
            smooth={true}
          >Planes</Link></li>
          <li><Link
            onClick={()=>setMenuOpened(false)}
            to="testimonials"
            span={true}
            smooth={true}
          >Testimonios</Link></li>
        </ul>
  )}
    </div>
  );
};

export default Header;
