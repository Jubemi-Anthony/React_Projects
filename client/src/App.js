import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import logo from './images/JD.png';
import './App.css';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import {getPosts} from './actions/posts'

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(getPosts());
  }, [currentId, dispatch]);
  
  return (
    <div className="container">
      <header>
        <h2>Memories</h2>
        <img src={logo} alt="logo"/>
      </header>
      <section className="grow">
        <div className="postContainer">
          <Posts setCurrentId={setCurrentId}/>
        </div>
        <div className="formContainer">
          <Form currentId={currentId} setCurrentId={setCurrentId}/>
        </div>
      </section>
    </div>
  );
}

export default App;
