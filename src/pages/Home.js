import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Posts from './Posts'

function Home() {
  return (
  <><Header />
    <div className='home'>
        <Posts />
        <Sidebar />
    </div>
    </>
  )
}

export default Home