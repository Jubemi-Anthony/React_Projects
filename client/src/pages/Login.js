import { useState } from "react";
import { Link } from "react-router-dom";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = (e) =>{
        e.preventDefault();
        console.log(email, password);
        fetch("http://localhost:5000/login", {
            method: "POST",
            crossDomain: true,
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then((res) => res.json())
          .then((data) =>{
            if(data.status === "ok"){
                window.localStorage.setItem("token", data.data);
                window.localStorage.setItem("loggedIn", true);
                window.location.href= "./Welcome";
            }
          });
    }
    return(
        <div className="Login">
            <form onSubmit={submit}>
                <div>
                    <label>Email:</label>
                    <input type="email" placeholder="Enter email" onChange={(e) => {setEmail(e.target.value);}}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" placeholder="Enter Password" onChange={(e) => {setPassword(e.target.value);}}/>
                </div>
                <button type="submit">Login</button>
            </form>
            <div className="other">
                <div>
                    <p>Don't have an account?</p>
                    <Link to="/Register">
                        Register    
                    </Link>
                </div>
                <div>
                    <p>Forgot Password?</p>
                    <Link to ="/Forgot">
                        Forgot Password
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Login;