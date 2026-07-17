import React from 'react';
import RecruitersPartners from '../components/placements/Recruiters_Partners'
// import AboutPlacements from '../components/placements/AboutPlacements'
import Places from '../components/placements/Places'
import Statistics from '../components/placements/Statistics';
import CareerGuidance from '../components/placements/CareerGuidance'

// import PlacementHero from '../components/placements/PlacementHero';


// import Study_Aboard from '../components/placements/Study_Aboard'

const Page = () => {
  return (
    <>
    {/* <PlacementHero /> */}
      <RecruitersPartners />
      {/* <AboutPlacements /> */}
      <Places />
      <Statistics />
      <CareerGuidance />
 
      {/* <Study_Aboard /> */}
    </>
  )
}

export default Page;