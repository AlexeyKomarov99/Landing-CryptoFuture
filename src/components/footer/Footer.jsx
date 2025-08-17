import React from 'react';
//===== assets =====//
import './Footer.scss';
import GirlPhoto from '../../assets/photos/footer/girl.png';
import Label from '../../assets/icons/banner/main-label.svg';

const Footer = () => {
  return (
    <section className='Footer'>
      <div className="Footer__wrapper">
        <div className="Footer__container">
          <div className="Footer__content">
            <h2 className="Footer__title">Остались вопросы?</h2>
            <button className="Footer__btn-support">Написать в поддержку</button>
            
            <div className="Footer__content-body">
              <h2 className="Footer__title-two">Отдел заботы</h2>
              <div className="Footer__photo-wrapper">
                <img 
                  src={GirlPhoto} 
                  alt="Girl img" 
                  className="Footer__photo" 
                />
              </div>
              <h3 className="Footer__girl-name">Кристина</h3>
              <span className="Footer__phone">+7 982 744-28-00</span>
            </div>

            <div className="Footer__content-bottom">
              <div className="Footer__label-group">
                  <img
                    src={Label}
                    alt='Label main'
                    className="Footer__label-icon"
                  />
              </div>
              <span className="Footer__privacy-policy">Политика конфиденциальности</span>
              <span className="Footer__offer-agreement">Договор оферты</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;