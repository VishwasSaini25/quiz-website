import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
function QuizHomepage(){
  const History = useHistory();
    return <>
        <div className="div-home-page">
            <div className="title">
            <h1 className="title-dashboard">Dashboard</h1>
           <input type="search" name="" id="search" placeholder="Search"    />
            </div>
            <div className="dashboard-content">
             <div className='your-prep-block'>
                <h5 className="your-prep-title">Your Preparation</h5>
                <Container>
                <Row className="your-prep-row">
                    <Col className="your-prep-col"  lg={5} md={6} sm={12}>
                    <h6 className="your-prep-h6">NEW SKILLS</h6>
                    <h1 className="your-prep-subhead">Get More Skilled</h1>
                    <p className="your-prep-para">Explore and add your first skill to get started. We offers a variety of skills, tracks and tutorials for you to learn and improve.</p>
                      <Button className="your-prep-btn your-prep-skills-btn" variant="outline-success">Explore Skills</Button>
                    </Col>
                    <Col className="your-prep-col" lg={5} md={6} sm={12}>
                    <h6 className="your-prep-h6">NEW CERTIFICATES</h6>
                    <h1 className="your-prep-subhead">Add Certificates To your Resume</h1>
                    <p className="your-prep-para">Take the Certification Test and make your profile stand out</p>
                      <Button className="your-prep-btn your-prep-cert-btn" variant="outline-success" onClick={() => History.push("/certificates")}>View All Skills</Button>
                    </Col>
                </Row>
                </Container>
                </div>
                <div className='prep-block'>
                <h5 className="prep-title">Prepare By Topics</h5>
                <Container>
                <Row className="row">
                    <Col className="col" lg={4} md={6} sm={12}>
                    <li>JAVA</li>
                    <li>ALGO</li>
                    <li>DSA</li>
                    <li>JAVASCRIPT</li>
                    <li>HTML</li>
                    </Col>
                    <Col className="col" lg={4} md={6} sm={12}>
                    <li>CSS</li>
                    <li>BOOTSTRAP</li>
                    <li>JQUERY</li>
                    <li>NODE JS</li>
                    <li>REACT</li>
                    </Col>
                    <Col className="col" lg={4} md={12} sm={12}>
                    <li>MONGO DB</li>
                    <li>ENGLISH</li>
                    <li>MATHS</li>
                    <li>FRENCH</li>
                    <li>PYTHON</li>
                    </Col>
                </Row>
                </Container>
                </div>
                <div className='cert-block'> 
                <h5 className="cert-title">Certification</h5>
                <Container>
                <Row >
                    <Col className="cert-col cert-col-1"  lg={5} md={6} sm={12}>
                    <h1 className="cert-subhead">English</h1>
                      <Button className="cert-btn" variant="outline-success">Get Certified</Button>
                    </Col>
                    <Col className="cert-col cert-col-2" lg={5} md={6} sm={12}>
                    <h1 className="cert-subhead">Python</h1>
                      <Button className="cert-btn" variant="outline-success">Get Certified</Button>
                    </Col>
                </Row>
                </Container>
                </div>
            </div>
        </div>
    </>
}
export default QuizHomepage;