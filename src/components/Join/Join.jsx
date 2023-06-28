import React, {useRef} from 'react';
import './Join.css';
import emailjs from '@emailjs/browser'
const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_w2f04zm', 'template_gq52qfh', form.current, 'lR0Ea2k45JfcAwC4R')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className='join' id='join.us'>
      <div className="left-j">
        <hr />
        <div>
          <span className='stroke-text'>¿LISTA PARA</span>
          <span> ENTRENAR</span>
        </div>
        <div>
          <span> CON</span>
          <span className='stroke-text'> NOSOTRAS?</span>
        </div>
      </div>
      <div className='right-j'>
        <form ref={form} className='email-container' onSubmit={sendEmail}>
          <input type="email" name='user_email' placeholder='Ingresa tu direccion de correo'/>
          <button className='btn btn-j'>Únete ahora</button>
        </form>
      </div>
    </div>
  )
}

export default Join
