import React from 'react';
//===== assets =====//
import './App.css';
//===== components =====//
import Banner from './components/banner/Banner';
import Education from './components/education/Education';
import PersonalCases from './components/personal-cases/PersonalCases';
import EducationProgram from './components/education-program/EducationProgram';
import EducationSystem from './components/education-system/EducationSystem';
import Darts from './components/darts/Darts';
import EducationFee from './components/education-fee/EducationFee';
import Questions from './components/questions/Questions';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <main>
      <Banner />
      <Education />
      <PersonalCases />
      <EducationProgram />
      <EducationSystem />
      <Darts />
      <EducationFee />
      <Questions />
      <Footer />
    </main>
  )
}

export default App