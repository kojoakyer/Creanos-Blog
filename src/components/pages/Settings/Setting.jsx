import React from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import './Setting.css'


function Setting() {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete your account</span>
                </div>
                <form className="settingsForm">
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsPP">
                        <img src="images/img3.jpg" alt="" />
                        <label htmlFor="fileInput">
                            <i className='settingsPPIcon far fa-user-circle'/>
                        </label>
                        <input type="file" id='fileInput' style={{display:'none'}}/>
                    </div>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder='Username'/>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Username@gmail.com'/>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='password'/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}

export default Setting
