import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'

const work = () => {
  return (
    <div>
        <Hero heading='Our work' message='This is some of our products.' />
        <Portfolio />
    </div>
  )
}

export default work