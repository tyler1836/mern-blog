import React from 'react'

function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm">
            <label>Email</label>
            <input className='loginInput' type="text" placeholder='Enter your email' />
            <label>Password</label>
            <input className='loginInput' type="password"  placeholder='Enter your password' />
            <button className='loginButton'>Login</button>
            </form>
            <button className="logReg">Register</button>
        </div>
  )
}

export default Login