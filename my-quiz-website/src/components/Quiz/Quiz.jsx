import React from "react";
import "./Quiz.css";
import QuizHomepage from "./quizHomepage";
import QuizContact from "./quizContact";
import QuizNavbar from "./quizNavbar";
function Quiz(props){
    return <>
        <div className="quiz-page">
        <QuizNavbar email={props.user.Email} />
        <QuizHomepage />
        <QuizContact />      
        </div>
    </>
}

export default Quiz;