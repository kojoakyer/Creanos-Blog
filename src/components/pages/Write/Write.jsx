import React from 'react'
import './Write.css'

function Write() {
    return (
        <div className='write'>
            <img className='writeImg' src="images/img6.jpg" alt="" />
            <div className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className=" writeIcon fa fa-plus"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display:'none'}}  />
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea name="" typeof='text' placeholder='write your story...' className='writeInput writeText'></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </div>
            
        </div>
    )
}

export default Write
