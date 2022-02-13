import React,{useState} from "react";
import "./Login.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CampaignIcon from '@mui/icons-material/Campaign';
import { useHistory } from "react-router-dom";
import Brand from "../Brand/Brand";
import axios from "axios";
function Login(props){
    const History = useHistory();
    const[user,setUser] = useState({
        Email:"",
        Password:""
    })
    
    function handleChange(event){
        const {name,value} = event.target;
        setUser({
            ...user,
            [name] : value
        })
    }
    function login(){
                 axios.post("http://localhost:4000/login",user)
                 .then(res => {
                    // const json = JSON.stringify(res.data.user._id); 
                    // console.log(res.data.user._id);
                    alert(res.data.message);
                    props.func(res.data.user);
                    if(res.data.message === "email incorrect or user not registered"){
                        History.push("/register");
                    } else if(res.data.message === "incorrect password"){
                        History.go(0);
                    } else {
                    History.push("/quiz");
                    }
                 });        
    }
    const url="";
    return <>
     <div className="home-page">
     <div className="sign-up">
        <div className="login-div">
        <h2>WELCOME TO</h2>
        <h1><CampaignIcon className="speaker" fontSize="60" />Quizz</h1>
        <h5>Login to Enter the quizz world And check your knowledge </h5>
        <input onChange={handleChange} className="login-email" type="email" name="Email" value={user.Email} id="" placeholder="Email" />
        <input onChange={handleChange} className="login-pass" type="password" name="Password" value={user.Password} id="" placeholder="Password" /><br />
        <button className="login-button" onClick={login}>Login</button>
        <h6 className="login-register" onClick={() => History.push("/register")}>Don't have an account ? <a href={url}>Register Now </a></h6>
        <hr />
        <h6 className="login-h6">Continue With Social Media</h6>
        <ul className="login-socials">
        <li><FacebookIcon /></li>
        <li><TwitterIcon /></li>
        <li><GoogleIcon /></li>
        <li><LinkedInIcon /></li>
        </ul>
        </div>
        </div>
        <Brand />
        </div>
    </>
}

export default Login;
