import React from "react";
import "../Quiz/Quiz.css";
import "./cert.css";
import QuizNavbar from "../Quiz/quizNavbar";
import QuizContact from "../Quiz/quizContact";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";


function Certificates(props){
  
  const History = useHistory();

    return <>
    <QuizNavbar email={props.user.Email}/>
    <div className="certific-title">
            <h2 className="certific-title-dashboard">Dashboard</h2>
            <h4>Get Your Skills Certified</h4>
    </div>
    <div className='certific-block'>
                <h5 className="certification-title">Certification</h5>
                <Container>
                <Row>
                    <Col className="certific-col certific-col-1"  lg={3} md={6} sm={12}>
                    <h1 className="certific-subhead">English</h1>
                      <Button onClick={() => History.push("/quizapi")} className="certific-btn" variant="outline-success">Get Certified</Button>
                    </Col>
                    <Col className="certific-col certific-col-2" lg={4} md={6} sm={12}>
                    <h1 className="certific-subhead">Python</h1>
                      <Button onClick={() => History.push("/quizapi")} className="certific-btn" variant="outline-success">Get Certified</Button>
                    </Col>
                    <Col className="certific-col certific-col-3" lg={3} md={6} sm={12}>
                    <h1 className="certific-subhead">DS ALGO</h1>
                      <Button onClick={() => History.push("/quizapi")} className="certific-btn" variant="outline-success">Get Certified</Button>
                    </Col>
                    <Col className="certific-col certific-col-1"  lg={3} md={6} sm={12}>
                    <h1 className="certific-subhead">Angular</h1>
                      <Button onClick={() => History.push("/quizapi")} className="certific-btn" variant="outline-success">Get Certified</Button>
                    </Col>
                    <Col className="certific-col certific-col-2" lg={4} md={6} sm={12}>
                    <h1 className="certific-subhead">C#</h1>
                      <Button onClick={() => History.push("/quizapi")} className="certific-btn" variant="outline-success">Get Certified</Button>
                    </Col>
                    <Col className="certific-col certific-col-3" lg={3} md={6} sm={12}>
                    <h1 className="certific-subhead">C++</h1>
                      <Button onClick={() => History.push("/quizapi")} className="certific-btn" variant="outline-success">Get Certified</Button>
                    </Col>
                    <Col className="certific-col certific-col-1"  lg={3} md={6} sm={12}>
                    <h1 className="certific-subhead">Java</h1>
                      <Button onClick={() => History.push("/quizapi")} className="certific-btn" variant="outline-success">Get Certified</Button>
                    </Col>
                    <Col className="certific-col certific-col-2" lg={4} md={6} sm={12}>
                    <h1 className="certific-subhead">Scala</h1>
                      <Button onClick={() => History.push("/quizapi")} className="certific-btn" variant="outline-success">Get Certified</Button>
                    </Col>
                    <Col className="certific-col certific-col-3" lg={3} md={6} sm={12}>
                    <h1 className="certific-subhead">Python</h1>
                      <Button onClick={() => History.push("/quizapi")} className="certific-btn" variant="outline-success">Get Certified</Button>
                    </Col>
                </Row>
                </Container>
                </div>
                <QuizContact />
    </>
}
export default Certificates;