import React from 'react';
//===== assets =====//
import './EducationProgram.scss';
import { data } from './data';
import {ReactComponent as ArrowRightIcon} from '../../assets/icons/education-program/arrow-right.svg';

const EducationProgram = () => {
  return (
    <section className="EducationProgram">
      <div className="EducationProgram__blur-top"></div>
      <div className="EducationProgram__wrapper">
        <div className="EducationProgram__container">
          <div className="EducationProgram__content">
            <h2 className="EducationProgram__title">Программа обучения:</h2>
            <div className="EducationProgram__icon-arrow-wrapper">
              <ArrowRightIcon className='EducationProgramm__icon-arrow' />
            </div>
            <div className="EducationProgram__program-group">
              {data.map((program) => (
                <article
                  key={program.id} 
                  className="EducationProgram__program-item"
                >
                  <div className="EducationProgram__header">
                    <span className="EducationProgram__module">{program.module}</span>
                    <span className="EducationProgram__icon-wrapper">
                      {program.icon}
                    </span>
                  </div>
                  <h3 className="EducationProgram__header-title">{program.title}</h3>
                  <ul className="EducationProgram__list">
                    {program.list.map((item) => (
                      <li
                        key={item.id}
                        className='EducationProgram__list-item'
                      >
                        {item.descr}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="EducationProgram__blur-bottom"></div>
    </section>
  )
}

export default EducationProgram;