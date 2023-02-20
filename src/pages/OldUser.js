import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import Button from "../components/Button";

function OldUser(){
    return(
        <div className="OldUser OldRelative">
           <div className="container">
                <div className="top">
                    <Logo/>
                    <h2>JD Fragrance</h2>
                    <p>Best Scent</p>
                </div>
                <div className="down">
                    <Link to="/Sign">
                        <Button text= 'Login'/>
                    </Link>
                    <p>OR</p>
                    <Link to="/Sign">
                        <Button text= 'Sign Up'/>
                    </Link>
                </div>
           </div>
        </div>
    )
}
export default OldUser;