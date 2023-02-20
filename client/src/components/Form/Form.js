import React, {useState, useEffect} from 'react'
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import { useSelector } from 'react-redux'
import './form.css'

const Form = ({currentId, setCurrentId}) => {
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId): null);
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '', createdAt: new Date()});
  const dispatch = useDispatch();

  useEffect(()=>{
    if(post) setPostData(post);
  }, [post])

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(currentId){
      dispatch(updatePost(currentId, postData));
    }else{
      setPostData({...postData, createdAt: new Date()})
      dispatch(createPost(postData));
    }
    clear();
  }
  const clear = () =>{
    setCurrentId(null);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '', createdAt: new Date()});
  }

  return (
    <div className='Form'>
      <p>{currentId ? 'Editing' : 'Creating'} a Memory</p>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <div className="inputs">
          <input name='creator' type="text" placeholder='Creator' value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
          <input name='title' type="text" placeholder='Title' value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
          <input name='message' type="text" placeholder='Message' value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
          <input name='tags' type="text" placeholder='Tags' value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(`,`) })} />
        </div>
        <div className="fileInput">
          <FileBase className= 'file' type= 'file' multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})}/>
        </div>
        <div className="buttons">
          <button type='submit'>Submit</button>
          <button onClick={clear}>clear</button>
        </div>
      </form>
    </div>
  )
}

export default Form