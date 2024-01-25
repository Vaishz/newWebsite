import React from 'react'
import Button from './Button/Button'

const Searchbar = () => {
  return (
    <>
    <div className="searchbar h-30 bg-red-100 w-6/12 m-10 items-center grid grid-cols-2">
    <input type='text' className='w-30 h-full bg-transparent p-2'/>
    <Button title='Search' className='text-center'/>
    </div>
    </>
  )
}

export default Searchbar