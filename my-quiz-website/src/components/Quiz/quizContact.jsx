import React from "react";
import CampaignIcon from '@mui/icons-material/Campaign';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function quizContact(){
    return <>
    <div className="quiz-contact">
        <div className="quiz-contact-content">
        <Container>
        <Row className="qContact-row">
            <Col className="qContact-col">
            <div className='qContact'>
            <h1 className="qContact-brand"><CampaignIcon className="speaker" fontSize="60" />Quizz</h1>
            <p className="qContact-no">+91 978234568</p>
            <a className="qContact-mail" style={{textDecoration: "none"}} href="mailto:visherrsaini11@gmail.com">
            <h6 >visherrsaini11@gmail.com</h6>
            </a>
            <div className="qContact-socials">
            {/* <ul className="qContact-socials"> */}
            <li><FacebookIcon /></li>
            <li><TwitterIcon /></li>
            <li><GoogleIcon /></li>
            <li><LinkedInIcon /></li>
            {/* </ul> */}
            </div>
            </div>
            </Col>
            <Col className="qContact-col resources">
                <h1>RESOURCES</h1>
                <li>Help Center</li>
                <li>Community</li>
                <li>Tutorials</li>
                <li>FAQs</li>
                <li>Partner With U</li>
                <li>API</li>
            </Col>
            <Col className="qContact-col company">
            <h1>Company</h1>
            <li>Our Blog</li>
            <li>Careers</li>
            <li>News</li>
            <li>Terms & Conditions</li>
            </Col>
            <Col className="qContact-col create-with-us">
                <h1>Create With Us</h1>
                <li>Create Quiz</li>
                <li>How to Upload a quiz</li>
                <li>Upload a quiz</li>
            </Col>
        </Row>
        </Container>
        </div>
    </div>
    </>
}

export default quizContact;
