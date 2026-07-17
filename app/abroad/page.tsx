import React from 'react'
import AbroadHero from '../components/abroadstudies/AbroadHero'
import WhyStudyAbroad from '../components/abroadstudies/WhyStudyAbroad'
import AbroadStudyPrograms from '../components/abroadstudies/AbroadStudyPrograms'
import AbroadProcess from '../components/abroadstudies/AbroadProcess'
import AbroadCriteria from '../components/abroadstudies/AbroadCriteria'
import AbroadScholarship from '../components/abroadstudies/AbroadScholarship'
import Testimonial from '../components/abroadstudies/Testimonial'
import AbroadQuestions from '../components/abroadstudies/AbroadQuestions'
import AbroadContact from '../components/abroadstudies/AbroadContact'



const page = () => {
  return (
    <>
  
   <AbroadHero />
   <WhyStudyAbroad />
   <AbroadStudyPrograms />
   <AbroadProcess />
   <AbroadCriteria/>
<AbroadScholarship />
<Testimonial />
<AbroadQuestions />
<AbroadContact />
    </>
  )
}

export default page
