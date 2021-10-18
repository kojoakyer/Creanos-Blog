import React from 'react'
import './Register.css'


function Login() {
    return (
        <div className='register'>
            <form className="registerForm">
                <div className="registerTitle">
                    <span>Register</span>
                </div>
                <label htmlFor="" className=''>Username</label>
                <input type="text" className='registerInput' placeholder='Enter your username'/>
                <label htmlFor="" className=''>Email</label>
                <input type="email" className='registerInput' placeholder='please enter your email' />
                <label htmlFor="" className=''>Password</label>
                <input type="password" className='registerInput' placeholder='please enter your password...'/>
                <button className='registerBut'>Register</button>
            </form>
            <button className='loginButton'>Login</button>
        </div>
    )
}

export default Login
