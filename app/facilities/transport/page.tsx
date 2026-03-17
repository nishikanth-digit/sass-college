import AboutTransport from '@/app/components/facilities/AboutTransport'
import Transport from '@/app/components/facilities/Transport'
import TransportHero from '@/app/components/facilities/TransportHero'
import React from 'react'

const page = () => {
  return (
    <>
      <TransportHero />
      <AboutTransport />
   <Transport />
    </>
  )
}

export default page
