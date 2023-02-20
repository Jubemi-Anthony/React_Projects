import Logo from "../components/Logo";
import SignButton from "../components/SignButton";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Sign(){
    return(
        <div className="Sign relative">
            <div className="container SignAlign">
                <Logo/>
                <div className="form">
                    <SignButton
                        text= 'Continue with Google'
                        icon= 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-128.png'
                    />
                    <Link to= "/Register">
                        <SignButton
                            text= 'Sign up with Email'
                            icon= 'https://cdn1.iconfinder.com/data/icons/document-edit-line/64/Document-doc-file-email-message-order-paper-128.png'
                        />
                    </Link>
                    <div className="talk">
                        <p>By continuing you agree to our</p>
                        <p><span>Terms & Conditions</span> and <span>Privacy Policy</span></p>
                    </div>
                    <p>App Version 1.0</p>
                </div>
                <Button text='Skip for now'/>
            </div>
        </div>
    )
}
export default Sign;