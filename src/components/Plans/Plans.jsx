import React from "react";
import "./Plans.css";
import {plansData} from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

//Redireccionar a Join
const redirectToCode = () => {
  const joinSection = document.getElementById('join.us');
  joinSection.scrollIntoView({ behavior: 'smooth' });
};
const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header">
        <span className="stroke-text">Lista para</span>
        <span>comenzar</span>
        <span className="stroke-text">con nosotras</span>
      </div>

      {/* Tarjetas de planes */}
      <div className="plans">
        {plansData.map((plan, i) =>(
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) =>(
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>Ver más beneficios</span>
            </div>
            <button className="btn" onClick={redirectToCode}>Únete ahora</button>
          </div>
        ))}

      </div>
    </div>
  )
};

export default Plans;
