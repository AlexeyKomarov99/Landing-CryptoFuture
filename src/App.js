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
import EducationTarif from './components/education-tarif/EducationTarif';
import Questions from './components/questions/Questions';
import QuestionsYet from './components/questions-yet/QuestionsYet';
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
      <EducationTarif />
      <Questions />
      <QuestionsYet />
      <Footer />
    </main>
  )
}

export default App