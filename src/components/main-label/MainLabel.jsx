import React from 'react';
//===== assets =====//
import './MainLabel.scss';
import Label from '../../assets/icons/banner/main-label.svg';
import { nameOne, nameTwo } from './data';

const MainLabel = () => {
  return (
    <div className='MainLabel'>
        <div className="MainLabel__label-photo-wrapper">
            <img 
                src={Label} 
                alt="Главный значок" 
                className="MainLabel__label-photo" 
            />
        </div>
        <div className="MainLabel__name-content">
            <div className="MainLabel__first-name">
                {nameOne.map((symbol) => (
                    <div 
                        key={symbol.id}
                        className="MainLabel__symbol-item-wrapper"
                    >
                        {symbol.symbol}
                    </div>
                ))}
            </div>
            <div className="MainLabel__second-name">
                {nameTwo.map((symbol) => (
                    <div 
                        key={symbol.id}
                        className="MainLabel__symbol-item-wrapper"
                    >
                        {symbol.symbol}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MainLabel;