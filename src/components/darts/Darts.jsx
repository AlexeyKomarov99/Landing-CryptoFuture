import React from 'react';
//===== assets =====//
import './Darts.scss';
import DartsPhoto from '../../assets/photos/darts/darts.png';

const Darts = () => {
  return (
    <section className="Darts">
      <div className="Darts__blur-top"></div>
      <div className="Darts__wrapper">
        <div className="Darts__container">
          <div className="Darts__content">
            <div className="Darts__left">
              <h2 className="Darts__title">CryptoFuture: <br/> ретродропы —</h2>
              <h3 className="Darts__descr">
                это совместный выбор прибыльных проектов для активностей, <br/> четкие инструкции, опытные менторы, которые знают 
                <br/>
                <span className='text-blue' >проверенные стратегии, ведущие к результату</span>
              </h3>
            </div>
            <div className="Darts__right">
              <div className="Darts__photo-wrapper">
                <img 
                  src={DartsPhoto} 
                  alt="Darts img" 
                  className="Darts__photo" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Darts__blur-bottom"></div>
    </section>
  )
}

export default Darts;