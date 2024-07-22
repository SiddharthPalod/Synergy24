import React from 'react'
import { Link } from 'react-router-dom'
const Back = () => {
  return (
    <Link className="fixed text-white button-back-events  top-0 left-0 text-xl md:text-2xl lg:text-3xl p-6 font-bold"
        to={'/events'}>&lt; BACK
    </Link>
  )
}

export default Back
