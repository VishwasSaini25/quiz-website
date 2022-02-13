import React, {useState , useEffect} from "react";
import Quizproblem from './Quizproblem';
import Button from 'react-bootstrap/Button'
import "./QuizApi.css";
import { useHistory } from "react-router-dom";


import Axios from "axios";
function Quizapi(props){
    var comp =0 ;
    const History = useHistory();
    const API_URL = "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple";
    const [questions,setquestions] = useState([]);
    const [currentIndex,setCurrentIndex] = useState(0);
    const [Score,Setscore] = useState(0);
    useEffect(() => {
        Axios.get(API_URL)
        .then(res => res.data)
        .then(data =>{
            if(data.results){
            const problem = data.results.map((question) => ({
                ...question,
                answers:[question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5)
            }))

            setquestions(problem);
        }
        })
    },[])
   
    const handleAnswer = (answer) => {
            if(answer === questions[currentIndex].correct_answer){
                Setscore(Score+1);
            }
           
    }
    function handlePrev(){
        if(currentIndex === 0){
            alert("are u an idiot....You want to go at 0th question");
        } else
             setCurrentIndex(currentIndex-1);
    }
    function handleNext(){
        
        setCurrentIndex(currentIndex+1);
      
    }
return <>   
            <div className="quiz-api-body">
               {(questions.length > 0) ? (
                
               (currentIndex >= questions.length) ? ( <div>
                <h1>Quiz Ended, Your Score is {Score}/10</h1>
                <Button onClick={() => History.push("/quiz")} className="button-rtn1" variant="outline-primary">go back to homepage</Button>
                <Button onClick={() => History.push("/certificates")} className="button-rtn2" variant="outline-primary">go back to certificate page </Button>
               </div>

               ) : 
               (<div className="quiz-api-questionBlock">
               <Quizproblem comp={comp}  handlePrev={handlePrev}  handleNext={handleNext} handleAnswer={handleAnswer} currentIndex={currentIndex+1} data={questions[currentIndex]} />
               </div> )
                )  : "Loading...." }  
            </div>
    </>
}

   

export default Quizapi;