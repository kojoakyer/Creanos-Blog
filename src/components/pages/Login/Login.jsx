import React from 'react'
import './Login.css'


function Login() {
    return (
        <div className='login'>
            <form className="loginForm">
                <div className="loginTitle">
                    <span>Login</span>
                </div>
                <label htmlFor="" className=''>Email</label>
                <input type="email" className='loginInput' placeholder='please enter your email' />
                <label htmlFor="" className=''>Password</label>
                <input type="password" className='loginInput' placeholder='please enter your password...'/>
                <button className='loginButto'>Login</button>
            </form>
            <button className='registerButton'>Register</button>
        </div>
    )
}

export default Login
