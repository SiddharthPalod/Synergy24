import React from 'react'
import DayEvents from '../components/DayEvents'
import { images1,images2,images3 } from '../data/event_image'
import Red from '../components/Red'
const Events = () => {
  return (
    <div>
      <DayEvents day={1} images={images1}/>
      <DayEvents day={2} images={images2}/>
      <DayEvents day={3} images={images3}/>
    </div>
  )
}

export default Events
