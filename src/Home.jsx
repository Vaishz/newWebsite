import React from 'react'
import Footer from './components/Footer'
/*import Newsletter from './components/Newsletter'*/
import { NavLink } from 'react-router-dom'
import Chatbox from './Chatbox'


const Home = () => {
  return (
    <div className='sec grid grid-cols-2 bg-pink-500 w-[100%] min-h-screen overflow-hidden'>
      <div className="sec-1  min-h-screen bg-slate-200">
        <button>Login</button>
      </div>
      <div className="sec-2  min-h-screen bg-slate-500"></div>
     
    </div>
  )
}





export default Home