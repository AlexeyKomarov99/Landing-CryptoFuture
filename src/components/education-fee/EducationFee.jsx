import React from 'react';
//===== assets =====//
import './EducationFee.scss';
import { data } from './data';

const EducationFee = () => {
  return (
    <section className='EducationFee'>
      <div className="EducationFee__wrapper">
        <div className="EducationFee__container">
          <div className="EducationFee__content">
            <h2 className="EducationFee__title">Тарифы обучения</h2>
            <div className="EducationFee__price-list">
              {data.map((list) => (
                <article 
                  key={list.id}
                  className="EducationFee__list"
                >
                  {list.title}
                  <ul className="EducationFee__list-services">
                    {list.listServices.map((service) => (
                      <li
                        key={service.id} 
                        className={`EducationFee__service ${service.access ? '' : 'inactive'}`}
                      >
                        {service.text}
                      </li>
                    ))}
                  </ul>
                  <ul className="EducationFee__prices">
                    {list.priceList.map((price) => (
                      <h3
                        key={price.id} 
                        className={`EducationFee__price ${price.access ? '' : 'cross-out'}`}
                      >
                        {price.price}
                      </h3>
                    ))}
                  </ul>
                  <div className="EducationFee__buttons">
                    {list.buttonList.map((btn) => (
                      <button
                        key={btn.id}
                        className="EducationFee__btn"
                      >
                        {btn.title}
                      </button>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationFee;