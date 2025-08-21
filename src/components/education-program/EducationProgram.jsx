import React, {useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
//===== assets =====//
import './EducationProgram.scss';
import { data } from './data';
import {ReactComponent as ArrowRightIcon} from '../../assets/icons/education-program/arrow-right.svg';

const EducationProgram = () => {

  const swiperRef = useRef(null);

  const handleSwiperClick = (e) => {
    // Проверяем, что клик был именно по контейнеру Swiper, а не по слайду
    if (e.target === swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.slideNext();
    }
  };

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

            <Swiper
              ref={swiperRef}
              modules={[Mousewheel, FreeMode]}
              slidesPerView="auto"
              spaceBetween={30}
              freeMode={true}
              mousewheel={true}
              grabCursor={true}
              resistance={true}
              resistanceRatio={0.7}
              className="EducationProgram__program-group"
              onClick={handleSwiperClick}
            >
              {data.map((program) => (
                <SwiperSlide
                  key={program.id}
                  className="EducationProgram__program-item"
                >
                  <article className="EducationProgram__program-content">
                    <div className="EducationProgram__header">
                      <span className="EducationProgram__module">{program.module}</span>
                      <span className="EducationProgram__icon-wrapper">
                        {program.icon}
                      </span>
                    </div>
                    {program.title}
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
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </div>
      </div>
      <div className="EducationProgram__blur-bottom"></div>
    </section>
  )
}

export default EducationProgram;