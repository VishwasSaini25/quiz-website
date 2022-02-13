import React from "react";
import "./Homepage.css";
import { useHistory } from "react-router-dom";
function Homepage(){
const History = useHistory();
    return <>
        <div className="homepage">
            <h2>Welcome To</h2>
            <h1>Quizzz</h1>
            <button className="homepage-loginbtn"  onClick={() => History.push("/login")}>Login</button>
            <button className="homepage-regbtn"  onClick={() => History.push("/register")}>Register</button>
        </div>
    </>
}

export default Homepage;