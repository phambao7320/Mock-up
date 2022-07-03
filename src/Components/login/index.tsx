import React, { useState } from 'react'
import './style.scss'
import Register from './register';
import SignIn from './signin';

const Login = () => {

    return (
        <div>
            <SignIn />
            <Register />
        </div>
    )
}
  
export default Login ;