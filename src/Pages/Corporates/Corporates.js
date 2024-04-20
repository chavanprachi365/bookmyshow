import React from 'react'
import Banner from './Banner'
import Partners from './Partners'
import OurRecord from './OurRecord'
import Promotions from './Promotions'
import Solutions from './Solutions'

export const Corporates = () => {
  return (
    <div>
      <Banner/>
      <div className='container'>
        <Partners/> 
        <OurRecord/>
        <Promotions/>
        <Solutions/>
      </div>
    </div>
  )
}
