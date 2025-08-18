import React from 'react';
//===== assets =====//
import './EducationSystem.scss';
import { row1, row2, row3 } from './data';
//===== components =====//
import ButtonCta from '../button-cta/ButtonCta';

const EducationSystem = () => {
  return (
    <div className='EducationSystem'>
      <div className="EducationSystem__blur-top"></div>
      <div className="EducationSystem__wrapper">
        <div className="EducationSystem__container">
          <div className="EducationSystem__content">
            <h2 className="EducationSystem__title">Что есть в нашей системе <br/> обучения?</h2>
            <div className="EducationSystem__content-rows">
              
              <div className="EducationSystem__row row1">
                {row1.map((step) => (
                  <article
                    key={step.id}
                    className="EducationSystem__step-edu"
                  >
                    <div className="EducationSystem__header">
                      <h3 className="EducationSystem__header-title">{step.title}</h3>
                      <span className="EducationSystem__number">{step.number}</span>
                    </div>
                    <ul className="EducationSystem__body">
                      {step.content.map((item) => (
                        <span
                          key={item.id}
                          className="EducationSystem__edu"
                        >
                          {item.text}
                        </span>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <div className="EducationSystem__row row2">
                {row2.map((step) => (
                  <article
                    key={step.id}
                    className="EducationSystem__step-edu"
                  >
                    <div className="EducationSystem__header">
                      <h3 className="EducationSystem__header-title">{step.title}</h3>
                      <span className="EducationSystem__number">{step.number}</span>
                    </div>
                    <ul className="EducationSystem__body">
                      {step.content.map((item) => (
                        <span
                          key={item.id}
                          className="EducationSystem__edu"
                        >
                          {item.text}
                        </span>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <div className="EducationSystem__row row3">
                {row3.map((step) => (
                  <article
                    key={step.id}
                    className="EducationSystem__step-edu"
                  >
                    <div className="EducationSystem__header">
                      <h3 className="EducationSystem__header-title">{step.title}</h3>
                      <span className="EducationSystem__number">{step.number}</span>
                    </div>
                    <ul className="EducationSystem__body">
                      {step.content.map((item) => (
                        <span
                          key={item.id}
                          className="EducationSystem__edu"
                        >
                          {item.text}
                        </span>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              
            </div>
            <div className="EducationSystem__btn">
              <ButtonCta />
            </div>
          </div>
        </div>
      </div>
      <div className="EducationSystem__blur-bottom"></div>
    </div>
  )
}

export default EducationSystem;