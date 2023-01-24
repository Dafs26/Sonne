import React from 'react'
import grid1 from '../public/grilla1.jpg';
import grid2 from '../public/grilla2.jpg';
import grid3 from '../public/grilla3.jpg';
import grid4 from '../public/grilla4.jpg';
import grid5 from '../public/grilla5.jpg';
import grid6 from '../public/grilla6.jpg';
import InstagramImg from './InstagramImg';


const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Follow me on Instagram</p>
        <p className='pb-4'>@Sonne.vs</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={grid1} />
            <InstagramImg socialImg={grid2} />
            <InstagramImg socialImg={grid3} />
            <InstagramImg socialImg={grid4} />
            <InstagramImg socialImg={grid5} />
            <InstagramImg socialImg={grid6} />
        </div>
    </div>
  )
}

export default Instagram