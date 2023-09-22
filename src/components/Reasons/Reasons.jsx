import React from "react";
import "./Reasons.css";
import img1 from "../../assets/img1.jfif";
import img2 from "../../assets/img2.jfif";
import img3 from "../../assets/img3.jfif";
import img4 from "../../assets/img4.jfif";
import tick from "../../assets/tick.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      {/*Imagenes de Prueba*/}
      <div className="left-r">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div>
      <div className="right-r">
        <span>Algunas razones</span>

        <div>
          <span className="stroke-text">¿Por qué </span>
          <span>elegirnos?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt=""></img>
            <span>MÁS DE 5+ ENTRENADORAS EXPERTAS</span>
          </div>
          <div>
            <img src={tick}  alt="" />
            <span>ENTRENA MÁS INTELIGENTE Y MÁS RÁPIDO QUE ANTES</span>
          </div>
          <div>
            <img src={tick}  alt="" />
            <span>1 PROGRAMA GRATIS PARA NUEVO MIEMBRO</span>
          </div>
          <div>
            <img src={tick}  alt="" />
            <span>SOCIOS CONFIABLES</span>
          </div>
        </div>
        <span style={{
          color:"var(--gray)",
          fontWeight: "normal",
        }}
        >Marcas Conocidas</span>

        <div className="brands">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
