import React from 'react';
//===== assets =====//
import './ButtonCta.scss';
import { LiaHandPointRight as HandIcon } from "react-icons/lia";

const ButtonCta = () => {
  return (
    <button className="ButtonCta">
      <div className="ButtonCta__icon-wrapper">
        <HandIcon 
          className='ButtonCta__icon'
        />
      </div>
      <span className="Banner__cta-text">Хочу принять участие!</span>
    </button>
  )
}

export default ButtonCta;