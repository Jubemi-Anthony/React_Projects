import './App.css';
import { Routes, Route } from "react-router-dom"
import Register from './pages/Register';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Forgot from './pages/Forgot';

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn")
  return (
    <Routes>
        <Route path= "/" element = {isLoggedIn === "true" ? <Welcome/> : <Login/>}/>
        <Route path="Register" element={ <Register/> } />
        <Route path="Login" element={ <Login/> } />
        <Route path="Welcome" element={ <Welcome/> } />
        <Route path="Forgot" element={ <Forgot/> } />
    </Routes>
  );
}

export default App;
