import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import {Dropdown,Container,Nav} from "react-bootstrap"
import CampaignIcon from '@mui/icons-material/Campaign';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SettingsIcon from '@mui/icons-material/Settings';
import { useHistory } from "react-router-dom";

function QuizNavbar(props){
  const History = useHistory();
    var email= props.email;
    var userEmail = email.substring(0, email.lastIndexOf("@"));
    userEmail = userEmail.slice(0,7);
 return <>
 <Navbar className="quiz-navbar"  expand="lg">
  <Container>
    <Navbar.Brand href="#home">
    <div className='quiz-brand'>
        <h1 onClick={() => History.push("/quiz")}><CampaignIcon className="speaker" fontSize="60" onClick={() => History.push("/quiz")}/>Quizz</h1>
        </div>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" id="collapse-button" />
    <Navbar.Collapse id="basic-navbar-nav">
    <div className="quiz-navs">
      <Nav className="me-auto">
        <Nav.Link className="h4" href="#home">Practice</Nav.Link>
        <Nav.Link className="h4" href="#link">Compete</Nav.Link>
        <Nav.Link className="h4" href="#link">Jobs</Nav.Link>
        <Nav.Link className="h4" href="#link">Leaderboard</Nav.Link>
        <Nav.Link className="h4" href="#link">Certification</Nav.Link>
      </Nav>
      </div>
        
      <div className="logined-user">
           <NotificationsNoneIcon  sx={{ fontSize: 30 }} className="bell" />
            <PermIdentityIcon sx={{ fontSize: 30 }} className="account-human" />
            <h4 className="account-email">{userEmail}</h4>
            <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Accounts</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Submissions</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Hackathons</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <SettingsIcon  className="settings-icon" />
        </div>
    </Navbar.Collapse>
  </Container>
</Navbar>
         
        </>
}

export default QuizNavbar;