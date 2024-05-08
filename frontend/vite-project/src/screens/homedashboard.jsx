import React from 'react'
import './homedashboard.css'
import navimg from '../assets/image 1588.png'

const Homedashboard = () => {
  return (
    <div>
        <div className="navbar">
          <img src={navimg} className="navimg"/>

          <input type="text" placeholder='        Quick Search...' />
          <input type="text" placeholder='        Quick Search...'/>
        </div>
    </div>
  )
}

export default Homedashboard
