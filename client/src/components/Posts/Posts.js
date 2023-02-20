import React from 'react'
import { useSelector } from 'react-redux'
import './posts.css'

import Post from './Post/Post'

const Posts = ({setCurrentId}) => {
const posts = useSelector((state) => state.posts);

  return (
    !posts.length ? <p>Loading</p> : (
      <section className='postM'>
        {posts.map((post) =>(
          <div key={post._id}>
            <Post post={post} setCurrentId={setCurrentId}/>
          </div>
        ))}
      </section>
    )
  )
}

export default Posts