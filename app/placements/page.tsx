import React from 'react'
import PlacementHero from '../components/placements/PlacementHero'
import AboutPlacements from '../components/placements/AboutPlacements'
import PlacementTeam from '../components/placements/PlacementTeam'
import Recruiters_Partners from '../components/placements/Recruiters_Partners'
import Statistics from '../components/placements/Statistics'
import CareerGuidance from '../components/placements/CareerGuidance'
import Study_Aboard from '../components/placements/Study_Aboard'

const page = () => {
  return (
    <>
      <PlacementHero />
      <AboutPlacements />
      <PlacementTeam />
      <Recruiters_Partners />
      <Statistics />
      <CareerGuidance />
      <Study_Aboard />
    </>
  )
}

export default page
