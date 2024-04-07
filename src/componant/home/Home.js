import React from 'react'
import Feed from './Feed'
import Leftsidebar from './Leftsidebar'
import RightSidebar from './RightSidebar'

const Home = () => {
  return (
    <div>
      <div className='home-container'>
       <Leftsidebar/>
       <Feed/>
       <RightSidebar/> 
      </div>

    </div>
  )
}

export default Home