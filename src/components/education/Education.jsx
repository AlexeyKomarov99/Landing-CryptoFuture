import React from 'react';
//===== assets =====//
import './Education.scss';
import {ReactComponent as CheckMarkIcon} from '../../assets/icons/education/check-mark.svg';
import MoneyOne from '../../assets/photos/money/money-one.png';
import MoneyTwo from '../../assets/photos/money/money-two.png';
import MoneyThree from '../../assets/photos/money/money-three.png';
//===== components =====//
import ButtonCta from '../button-cta/ButtonCta';

const eduContent = [
  {id: 1, icon: <CheckMarkIcon className="Education__icon" />, descr: <span className='Education__descr'><span className='span-bold'>Не нужны знания</span> в инвестициях и криптовалюте, чтобы начать</span>},
  {id: 2, icon: <CheckMarkIcon className="Education__icon" />, descr: <span className='Education__descr'><span className='span-bold'>Команда профессионалов</span> рассказывает <span className="span-bold">все секреты, берет “за ручку”</span> и доводит <span className="span-bold">до результата</span></span>},
  {id: 3, icon: <CheckMarkIcon className="Education__icon" />, descr: <span className='Education__descr'><span className='span-bold'>Не нужны</span> большие стартовые <span className="span bold">вложения</span> (50-100$ на аккаунт)</span>},
]

const Education = () => {
  return (
    <section className="Education">
      <div className="Education__blur-top"></div>
      <div className="Education__wrapper">
        <div className="Education__container">
          <div className="Education__content">
            <h2 className="Education__title">“CryptoFuture: ретродропы” <br/> — обучение, где:</h2>
            <div className="Education__group">
              {eduContent.map((item) => (
                <article 
                  key={item.id}
                  className="Education__item"
                >
                  <div className="Education__icon-wrapper">
                    {item.icon}
                  </div>
                  {item.descr}
                </article>
              ))}
            </div>
            <div className="Education__content-inner">
              <div className="Education__left">
                <h3 className="Education__title-inner">Ретродропы — главный <br/> тренд 2024 года в крипте!</h3>
                <span className="Education__descr-inner">
                  Полностью безопасный и простой способ <br/> для приумножения вложений <span className="span-bold">в 8 раз за год!</span>
                </span>
                <div className="Education__btn-wrapper">
                  <ButtonCta />
                </div>
              </div>
              <div className="Education__right">

                <div className="Education__photo-wrapper">
                  <img 
                    src={MoneyOne} 
                    alt="" 
                    className="Education__photo one" 
                  />
                </div>

                <div className="Education__photo-wrapper">
                  <img 
                    src={MoneyTwo} 
                    alt="" 
                    className="Education__photo two" 
                  />
                </div>

                <div className="Education__photo-wrapper">
                  <img 
                    src={MoneyThree} 
                    alt="" 
                    className="Education__photo three" 
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="Education__blur-bottom"></div>
    </section>
  )
}

export default Education;