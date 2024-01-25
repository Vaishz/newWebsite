import React from 'react'

const PasswordGen = () => {
    const [password, setPassword] = useState('');
    const [length, setLength] = useState('8');
    const [numAllowed, setNumAllowed] = useState('false');
    const [charAllowed, setCharAllowed] = useState('false');
  return (
    <>
        
    <div className="container">
        <h2>PASSWORD GENERATOR</h2>
        <input type='range' ></input>

    </div>
    </>
  )
}

export default PasswordGen