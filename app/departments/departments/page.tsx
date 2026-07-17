


import StudentTestimonials from '@/app/components/abroadstudies/Testimonial'
import DepartmentCategory from '@/app/components/departments/DepartmentCategory'
import DepartmentsFeature from '@/app/components/departments/DepartmentFeature'
import DepartmentHero from '@/app/components/departments/DepartmentHero'
import Departmentstatistics from '@/app/components/departments/DepartmentStatistics'
import DepartmentTestimonial from '@/app/components/departments/DepartmentTestimonial'
// import PartnerSlider from '@/app/components/departments/PartnerSlider'
import React from 'react'

const page = () => {
  return (
    <>
  <DepartmentHero/>
    <Departmentstatistics />
  <DepartmentCategory />
  <DepartmentsFeature />

 {/* <PartnerSlider /> */}
  <DepartmentTestimonial />

    </>
  )
}

export default page
