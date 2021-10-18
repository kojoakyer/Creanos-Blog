import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">
                ABOUT ME
            </span>
                 <img src="../images/img4.jpg" alt="" width='200px' height='200px' />
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Autem debitis porro excepturi at pariatur eum ipsam et, assumenda nulla 
                dolore, corrupti officia 
                rem quam commodi. Ea dolor maiores libero doloremque!
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarlist">
                <li className="sidebar-list-items">Life</li>
                <li className="sidebar-list-items">Music</li>
                <li className="sidebar-list-items">Sports</li>
                <li className="sidebar-list-items">Cinema</li>
                <li className="sidebar-list-items">Tech</li>
                <li className="sidebar-list-items">Tech</li>
            </ul>
        </div>
        <div className="sidebarItem">
             <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarsocials">
                <i className="fab fa-youtube sidebarIcon"/>
                <i className="fab fa-twitter sidebarIcon"/>
                <i className="fab fa-instagram sidebarIcon"/>
                <i className="fab fa-facebook sidebarIcon"/>
            </div> 
        </div>
    </div>

  )
}

export default Sidebar
