import AboutLibrary from '@/app/components/facilities/AboutLibrary'
import Library from '@/app/components/facilities/Library'
import LibraryHero from '@/app/components/facilities/LibraryHero'
import React from 'react'

const page = () => {
  return (
    <>
      <LibraryHero />
      <AboutLibrary />
      <Library />
    </>
  )
}

export default page
