import { useState } from "react";

function Welcome(){
    const [userData, setUserData] = useState({});
    function componentDidMount(){
        fetch("http://localhost:5000/userData", {
            method: "POST",
            crossDomain: true,
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token")
            })
        }).then((res) => res.json())
          .then((data) =>{
            setUserData(data.data);
            if(data.data === "Token Expired"){
                logOut();
            }
          });
    }
    componentDidMount();

    const logOut = () =>{
        window.localStorage.clear();
        window.location.href = "./Login";
    }
    return(
        <section className="Welcome">
            <div className="display">
                <h1>Welcome !</h1>
                <div className="name">
                    <p>Name</p>
                    <h2>{userData.firstname}</h2>
                </div>
                <div className="email">
                    <p>Email</p>
                    <h2>{userData.email}</h2>
                </div>
                <button onClick={logOut}>Log Out</button>
            </div>
        </section>
    )
}
export default Welcome;