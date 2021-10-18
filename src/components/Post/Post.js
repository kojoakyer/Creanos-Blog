import React from 'react'
import './Post.css'
import {Link} from 'react-router-dom'

function Post() {

  return (
    <div className='post'>
      <img className='postImg' src="images/img5.jpg" alt="" />
      <div className="postInfo">
          <div className="postCats">
              <span className="postcat">Music</span>
              <span className="postcat">Sports</span>
          </div>
          <span className="postTitle"><Link to='Post/:postId'>lorem ipsium dollor sit amet</Link> </span>
          <hr />
          <span className="postDate">1 hour ago</span>
      </div>
      <p className='postDesc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
           quia quaerat. Accusantium nulla fuga cupiditate 
          velit vel, harum modi? Quas earum rerum ab nesciunt
           placeat optio est unde deleniti 
          possimus.quia quaerat. Accusantium nulla fuga cupiditate 
          velit vel, harum modi? Quas earum rerum ab nesciunt
           placeat optio est unde deleniti 
          possimus.quia quaerat. Accusantium nulla fuga cupiditate 
          velit vel, harum modi? Quas earum rerum ab nesciunt
           placeat optio est unde deleniti 
          possimus.
        </p>
    </div>
  )
}

export default Post


