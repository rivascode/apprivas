import React from 'react';
import { SocialMedia } from '../SocialMedia/SocialMedia';
import './FooterApp.css';
export const FooterApp = () => {
  return (
    <footer>
      <div className='socialMediaContainer'>
        <SocialMedia/>
      </div>
      <p>Copyright &copy; 2022 Bruno de Renzis, todos los derechos reservados.</p>
    </footer>
  )
}
