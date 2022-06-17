import React, { useState } from 'react'
import { auth } from '../../firebase-config';
import Register from './Register';
import Signin from './Signin';

const Signup = () => {
    const [state, setState] = useState(false);

    return (
    
    <div>
        {state ? (
            <Signin />
        ) : (
            <Register setState={setState} />
        )
        }

    </div>
  )
}

export default Signup