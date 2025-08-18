import React from 'react';
//===== assets =====//
import './Banner.scss';
import MainLabel from '../../assets/icons/banner/main-label.svg';
import MainPhoto from '../../assets/photos/banner/main-photo.png';
import {ReactComponent as CalendarIcon} from '../../assets/icons/banner/calendar.svg';
import {ReactComponent as WatchIcon} from '../../assets/icons/banner/watch.svg';

//===== components =====//
import ButtonCta from '../button-cta/ButtonCta';

const educationData = [
  {id: 1, icon: <CalendarIcon />, title: 'Старт потока', descr: '1 июня'},
  {id: 2, icon: <WatchIcon />, title: 'Длительность обучения', descr: '1,5 месяца'}
]

const Banner = () => {
  return (
    <header className='Banner'>
      <div className="Banner__wrapper">
        <div className="Banner__container">
          <div className="Banner__content">

            <div className="Banner__label">
              <div className="Banner__main-icon-wrapper">
                <img 
                  src={MainLabel} 
                  alt="Main label"
                  className="Banner__main-icon" 
                />
              </div>
              <span className="Banner__label-name">
                crypto <br/> future
              </span>
            </div>

            <div className="Banner__content-inner">
              <div className="Banner__content-left">

                <div className="Banner__education-group">
                  {educationData.map((item) => (
                    <article 
                      key={item.id}
                      className="Banner__education-item"
                    >
                      <div className="Banner__icon-wrapper">
                        {item.icon}
                      </div>
                      <div className="Banner__text-group">
                        <span className="Banner__title">{item.title}: </span>
                        <span className="Banner__descr span-bold">{item.descr}</span>
                      </div>
                    </article>
                  ))}
                </div>
                <h1 className="Banner__title">CryptoFuture: <br/> ретродропы</h1>
                <h3 className="Banner__title-descr">Преумножь вложения в 8 раз за год, <br/> выполняя простые действия</h3>
                <ButtonCta className='btn' />
              </div>
              
              <div className="Banner__content-right">
                <div className="Banner__photo-wrapper">
                  <img 
                    src={MainPhoto} 
                    alt="Main img" 
                    className="Banner__photo" 
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="Banner__blur-bottom"></div>
    </header>
  )
}

export default Banner;