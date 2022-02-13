import './App.css';
import Login from "./components/Login/Login";
import Homepage from "./components/Homepage/Homepage";
import React,{useState} from "react";
import "./App.css";
import Register from "./components/Register/Register";
import Quiz from "./components/Quiz/Quiz";
import Certificates from './components/Certificates/Certificates';
import Quizapi from './components/Quizapi/Quizapi';
import { BrowserRouter as Router, Switch,Route,Link } from "react-router-dom";
function App() {
  const [user,setLoginUser] = useState({});
  return <>
  
 
  <Router>
    <Switch>
      <Route exact path="/">
      <Homepage />
      {/* user && user._id ? <Homepage /> : <Login func = {setLoginUser}/>  */}
      </Route>
      <Route path="/login"><Login func = {setLoginUser}/></Route>
      <Route path="/register"><Register /></Route>
      <Route path="/quiz">
      {  user && user._id ? <Quiz user ={user} /> : <Login func = {setLoginUser}/> } 
      {/* <Quiz user = {user} /> */}
      </Route>
      <Route path="/certificates">
      {  user && user._id ? <Certificates user={user} /> : <Login func = {setLoginUser}/> } 

        {/* <Certificates user={user} /> */}
      </Route>
      <Route path="/quizapi">
        <Quizapi user={user} />
      </Route>
    </Switch>
  </Router>
  </>
  }

export default App;
