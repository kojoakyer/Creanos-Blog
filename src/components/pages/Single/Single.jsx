import React from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import SinglePost from '../../SinglePost/SinglePost'
import './Single.css'

function Single() {
    return (
        <div className='single'>
            <SinglePost/>
            <Sidebar/>
        </div>
    )
}

export default Single
