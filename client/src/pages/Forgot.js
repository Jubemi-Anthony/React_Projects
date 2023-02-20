import { useState } from "react";

function Forgot(){
    const [email, setEmail] = useState("");
    return(
        <div className="Forgot">
            <form>
                <div>
                    <label>Email:</label>
                    <input type="email" placeholder="Enter email" onChange={(e) => {setEmail(e.target.value);}}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Forgot;