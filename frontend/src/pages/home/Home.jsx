import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] bg-transparent backdrop-blur-lg bg-clip-padding overflow-hidden'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home