import React, {useState} from 'react';
//===== assets =====//
import './Questions.scss';
import {data} from './data';
import { RxCross1 as CrossIcon } from "react-icons/rx";

const Questions = () => {
  const [activeIds, setActiveIds] = useState([]);
  const toggleAnswer = (id) => {
    setActiveIds((prevState) => (
      prevState.includes(id)
        ? prevState.filter(item => item !== id)
        : [...prevState, id]
    ))
  };

  return (
    <section className='Questions'>
      <div className="Questions__blur-top"></div>
      <div className="Questions__wrapper">
        <div className="Questions__container">
          <div className="Questions__content">
            <h2 className="Questions__title">Часто задаваемые <br/> вопросы</h2>
            <div className="Questions__group">
              {data.map((question) => (
                <article 
                  key={question.id}
                  className="Questions__item"
                  onClick={() => toggleAnswer(question.id)}
                >
                  <div className="Questions__header-group">
                    <h3 className="Questions__question-title">{question.question}</h3>
                    <div className={`Questions__icon-wrapper`}>
                      <CrossIcon className={`Questions__icon  ${activeIds.includes(question.id) ? 'active-chapter' : ''}`} />
                    </div>
                  </div>
                  
                  {activeIds.includes(question.id) && (
                    <ul className="Questions__answer-group">
                      {question.answer.map((answer) => (
                        <li
                          key={answer.id} 
                          className="Questions__answer-item"
                        >
                          {answer.text}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="Questions__blur-bottom"></div>
    </section>
  )
}

export default Questions;