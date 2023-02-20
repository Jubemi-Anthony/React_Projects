function SignButton(props){
    return(
        <div className="SignButton">
            <p><span><img src={props.icon} alt="Google" /></span>{props.text}</p>
        </div>
    )
}
export default SignButton;