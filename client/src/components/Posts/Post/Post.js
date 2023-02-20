import React from 'react'
import moment from 'moment';
import {useDispatch} from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';
import './post.css'

const Post = ({post, setCurrentId}) => {
  const dispatch = useDispatch();
  return (
    <div className='card'>
      <img className='media' src={post.selectedFile} alt={post.title} />
      <div className="overlay">
        <h6>{post.creator}</h6>
        <p>{moment(post.createdAt).fromNow()}</p>
      </div>
      <div className="overlay2">
        <button onClick={()=>{setCurrentId(post._id)}}> <img src="https://cdn1.iconfinder.com/data/icons/chunk/16/More-64.png" alt="dots" className="icon-1" /></button>
      </div>
      <div className="details">
        <p>{post.tags.map((tag) => `#${tag} `)}</p>
      </div>
      <p className="title">{post.title}</p>
      <p className='message'>{post.message}</p>
      <div className="actions">
        <button onClick={() => {dispatch(likePost(post._id))}}> <img src="https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/Facebook-Like-Good-64.png" alt="like" className="icon" /> &nbsp; Like &nbsp; {post.likeCount}</button>
        <button onClick={() =>{dispatch(deletePost(post._id))}}> <img src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_delete_48px-64.png" alt="delete" className="icon" /> Delete</button>
      </div>
    </div>
  )
}

export default Post