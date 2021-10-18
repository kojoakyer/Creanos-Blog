import React from 'react'
import './SinglePost.css'

function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img className='singlePostImg' src="../images/img3.jpg" alt="" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet
                    <div className="singlePostEdit">
                         <i className=' singlePostIcon far fa-edit'/>
                         <i className=' singlePostIcon far fa-trash-alt'/>
                    </div> 
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor' >Author : <b> Kevin</b></span>
                    <span className='singlePostDa' >1 hour ago</span>
                </div>
                <div className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Itaque enim minus excepturi velit nesciunt,
                     culpa nam alias qui consequatur. 
                    Dicta, architecto modi ex rem rerum ab sequi quisquam quibusdam quidem!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Itaque enim minus excepturi velit nesciunt,
                     culpa nam alias qui consequatur. 
                    Dicta, architecto modi ex rem rerum ab sequi quisquam quibusdam quidem!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Itaque enim minus excepturi velit nesciunt,
                     culpa nam alias qui consequatur. 
                    Dicta, architecto modi ex rem rerum ab sequi quisquam quibusdam quidem!
                </div>

            </div>
        </div>
    )
}

export default SinglePost
