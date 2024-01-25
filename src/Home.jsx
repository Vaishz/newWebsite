import React from 'react'
/*import Newsletter from './components/Newsletter'*/
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
    <div className='sec grid grid-cols-2 bg-pink-500 w-screen min-h-screen'>
      <div className="sec-1  min-h-screen bg-slate-200">
        <button>Login</button>
      </div>
      <div className="sec-2  min-h-screen bg-slate-500"></div>
     
    </div>
  )
}

export default Home