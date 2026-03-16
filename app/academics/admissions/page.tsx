import React from 'react'

import AboutAdmission from '@/app/components/academics/AboutAdmission'
import Admission from '@/app/components/academics/Admission'
import AdmissionHero from '@/app/components/academics/admissionHero'

const page = () => {
  return (
    <>
      <AdmissionHero />
      <AboutAdmission />
      <Admission />
    </>
  )
}

export default page
