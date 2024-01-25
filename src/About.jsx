import React from 'react'
import Button from './components/Button/Button'
import './About.css'
import { useState } from 'react'


const About = () => {

  const data = { fname: '', lname: '', age: '' }
  const [inputData, setinputData] = useState(data)

  const onSubmits = (e) => {
    e.preventDefault();
    alert('fom submitted')
  }

  const handleOnChange = (e) => {
    setinputData({ ...inputData, [e.target.name]: e.target.value })
    console.log(inputData)
  }


  return (
    <>
      <form>
        <div className='info'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe suscipit asperiores eius repudiandae pariatur animi itaque molestiae inventore quibusdam consectetur obcaecati, id expedita blanditiis placeat at error tenetur iure voluptate!
            <Button title='nana' />
          </p>
        </div>

        <div className="input bg-red-300 flex items-center justify-center p-2" >
          <h2 className='m-2'>Enter First Name: </h2>
          <input type='text'
            name='fname'
            value={inputData.fname}
            onChange={handleOnChange}
          />
        </div>

        <div className="input bg-red-300 flex items-center justify-center p-2" >
          <h2 className='m-2'>Enter Last Name: </h2>
          <input type='text'
            name='lname'
            value={inputData.lname}
            onChange={handleOnChange}
            input />
        </div>

        <div className="input bg-red-300 flex items-center justify-center p-2" >
          <h2 className='m-2'>Enter Age: </h2>
          <input type='text'
            name='age'
            value={inputData.age}
            onChange={handleOnChange}
          />
        </div>
      </form>

    </>
  )
}

export default About