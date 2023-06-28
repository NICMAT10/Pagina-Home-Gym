import React from "react";
import "./Programs.css";
import {programsData} from './../../data/programsData';
import RigthArrow from '../../assets/rightArrow.png';

//Redireccionar a Join
const redirectToCode = () => {
  const joinSection = document.getElementById('join.us');
  joinSection.scrollIntoView({ behavior: 'smooth' });
};
const Programs = () => {
  return (
    <div className="Programs" id= "programs">
      {/* Encabezado */}
      <div className="programs-header">
        <span className="stroke-text">Explora</span>
        <span> Los Programas</span>
        <span className="stroke-text">que tenemos </span>
      </div>

      <div className="program-categories">
        {programsData.map((program)=>(
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span onClick={redirectToCode}>Únete Ahora</span><img src={RigthArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
    )
};

export default Programs;
