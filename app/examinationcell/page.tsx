import React from 'react'
import ExamCellHero from '../components/examinationcell/ExamCellHero'
import AboutExam from '../components/examinationcell/AboutExam'
import ExaminationStructure from '../components/examinationcell/ExaminationStructure'
import ExaminationNotification from '../components/examinationcell/ExaminationNotification'
import ExamValuation from '../components/examinationcell/ExamValuation'
import MalpracticeRules from '../components/examinationcell/MalpracticeRules'

import ExamContact from '../components/examinationcell/ExamContact'





const page = () => {
  return (
    <>
      <ExamCellHero />
      <AboutExam />
      <ExaminationStructure />
      <ExaminationNotification />
      <ExamValuation />
      <MalpracticeRules />
  <ExamContact />
      
    
  
  
    </>
  )
}

export default page
