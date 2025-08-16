import React from 'react';
//===== assets =====//
import './PersonalCases.scss';
import { dataCases } from './dataCases';

const PersonalCases = () => {
  return (
    <section className="PersonalCases">
      <div className="PersonalCases__blur-top"></div>
      <div className="PersonalCases__wrapper">
        <div className="PersonalCases__container">
          <div className="PersonalCases__content">
            <h2 className="PersonalCases__title">Личные кейсы Лили <br/> в ретродропах</h2>
            <div className="PersonalCases__cases-group">
                {dataCases.map((item) => (
                  <article className="PersonalCases__case-item">
                    <div className="PersonalCases__header-icon">
                      {item.icon}
                    </div>
                    <ul className="PersonalCases__list">
                      {item.listCases.map((elem) => (
                        <li
                          key={elem.id}
                          className="PersonalCases__list-item"
                        >
                          <div className="PersonalCases__list-item-icon-wrapper">
                            <div className="PersonalCases__list-item-icon">{elem.innerIcon}</div>
                          </div>
                          <div className="PersonalCases__list-item-text">{elem.case}</div>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="PersonalCases__blur-bottom"></div>
    </section>
  )
}

export default PersonalCases;