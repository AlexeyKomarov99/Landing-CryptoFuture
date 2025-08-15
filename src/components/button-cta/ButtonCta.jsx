import React from 'react';
//===== assets =====//
import './ButtonCta.scss';

// Для теста иконок
import {ReactComponent as TestIcon} from '../../assets/icons/personal-cases/graph.svg';

const ButtonCta = () => {
  return (
    <button className="ButtonCta">
      <div className="ButtonCta__icon-wrapper">
        <img 
          src={<TestIcon />} 
          alt="Hand" 
          className="Banner__icon-cta" 
        />
      </div>
      <span className="Banner__cta-text">Хочу принять участие!</span>
    </button>
  )
}

export default ButtonCta;