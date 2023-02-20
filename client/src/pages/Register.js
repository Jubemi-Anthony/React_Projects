import { Link } from "react-router-dom";
import { useState } from "react";

function Register(){
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(firstname === "" || lastname === "" || email === "" || password === ""){
            return;
        }
        console.log(firstname, lastname, email, password);
        fetch("http://localhost:5000/register", {
            method: "POST",
            crossDomain: true,
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                firstname,
                lastname,
                email,
                password
            })
        }).then((res) => res.json())
          .then((data) =>{
                if(data.status === "ok"){
                window.location.href= "./Login";
            }
          });
    }

    return(        
        <div className="Register">
            <form onSubmit={submit}>
                <div>
                    <label>Firstname:</label>
                    <input type="text" placeholder="Enter First Name" onChange={(e) => {setFirstname(e.target.value);}}/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" placeholder="Enter Last Name" onChange={(e) => {setLastname(e.target.value);}}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" placeholder="Enter email" onChange={(e) => {setEmail(e.target.value);}}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" placeholder="Enter Password" onChange={(e) => {setPassword(e.target.value);}}/>
                </div>
                {/* <div>
                    <label>Confirm Password:</label>
                    <input type="password" placeholder="Confirm Password"/>
                </div> */}
                <button type="submit">Sign Up</button>
            </form>
            <p>Have an account?</p>
            <Link to="/Login">
                Login    
            </Link>
        </div>
    )
}
export default Register;