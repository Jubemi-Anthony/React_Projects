import Logo from "../components/Logo";

function Register(){
    return(
        <div className="Register">
           <div className="container">
                <Logo/>
                <form className="form">
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email Address"/>
                    <div>
                        <input type="text" placeholder="Phone Number"/>
                        <input type="text" placeholder="Sex"/>
                    </div>
                    <input type="text" placeholder="Password"/>
                    <input type="text" placeholder="Confirm Password"/>
                    <button>Sign Up</button>
                </form>
           </div>
        </div>
    )
}
export default Register;