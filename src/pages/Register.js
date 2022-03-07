import React from 'react'

function Register() {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm">
            <label>Email</label>
            <input className='registerInput' type="text" placeholder='Enter your email' />
            <label>Password</label>
            <input className='registerInput' type="password"  placeholder='Enter your password' />
            <button className='registerButton'>Register</button>
            </form>
            <button className="regLogin">Login</button>
        </div>
  )
}

export default Register