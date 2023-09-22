import React from "react";
import Header from '../Header/Header'
import './Hero.css';
import hero_image from "../../assets/hero-image1.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from 'number-counter'
import {motion} from 'framer-motion'
const Hero = () => {
  const transition = {type: 'spring', duration : 3}

  //Redireccionar a Join
  const redirectToCode = () => {
    const joinSection = document.getElementById('join.us');
    joinSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="hero">

      <div className="blur hero-blur"></div>
      <div className="left-h">

        <Header/>
        {/* El anuncio */}
        <div className="the-best-ad">
          <motion.div
            initial={{left: '238px'}}
            whileInView={{left: '8px'}}
            transition ={{...transition, type: 'tween'}}
          ></motion.div>
          <span>El mejor gimnasio de la ciudad</span>
        </div>
        {/* El titulo */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Transforma </span>
            <span>Tu</span>
          </div>
          <div>
            <span>Cuerpo, Mente y tu estado de ánimo</span>
          </div>
          <div>
            <span>
              Ama los resultados que veras con tus Entrenamientos.
            </span>
          </div>
        </div>

        {/* Figuras */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={5} start={0} delay='2' preFix='+'/>
            </span>
            <span>Entrenadoras expertas</span>
          </div>
          <div>
            <span>
            <NumberCounter end={15} start={8} delay='2' preFix='+' />
            </span>
            <span>Miembros unidos</span>
          </div>
          <div>
            <span>
            <NumberCounter end={50} start={40} delay='3' preFix='+' />
            </span>
            <span>Programas de Entrenamiento</span>
          </div>
        </div>
        {/* Botones */}
        <div className="hero-buttons">
          <buttons className="btn" onClick={redirectToCode}>Empezar</buttons>
          <buttons className="btn" onClick={redirectToCode}>Aprende más</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn" onClick={redirectToCode}>Únete Ahora</button>

        <motion.div
        initial={{right: '-1rem'}}
        whileInView={{right: '4rem'}}
        transition={transition}  
        className="heart-rate">
          <img src={Heart} alt="Corazón" />
          <span>Ritmo Cardiaco</span>
          <span>80 bpm</span>
        </motion.div>

        {/* Imagen */}
        <img src={hero_image} alt="" className="hero-image"/>
        <motion.img
        initial={{right: '11rem'}}
        whileInView={{right: '20rem'}}
        transition={transition}
        src={hero_image_back} alt="" className="hero-image-back"/>
        {/* Calorias */}
        <motion.div
          initial={{right:'37rem'}}
          whileInView={{right:'28rem'}}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <span>Calorias Quemadas</span>
          <span>220 kcal</span>
        </motion.div>
      </div>
    </div>
  )
};

export default Hero;
