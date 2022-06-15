import React from 'react'
import "./error.css"

const Error = () => {
  return (
    <div className='error'>
        <p>404 !</p>
        
        <p>
            Oops That page doesn't exist !!!!
        </p>

        <p>
            Take me back to <a href='/'>Homepage</a> 
        </p>

    </div>
  )
}

export default Error