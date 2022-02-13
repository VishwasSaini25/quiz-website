import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Progressbar from "./Progressbar";
import "./QuizApi.css";

function Quizproblem({comp,handlePrev,handleNext,handleAnswer,currentIndex,data:{question,correct_answer,answers}}){
  
    var val;
    
    if(currentIndex === 1){
          val =10;
     } else if(currentIndex === 2){
          val = 20;
     } else if(currentIndex === 3){
          val = 30;
     } else if(currentIndex === 4){
        val = 40;
     } else if(currentIndex === 5){
         val =50;
     } else if(currentIndex === 6){
         val = 60;
     } else if(currentIndex === 7){
         val =70;
     } else if(currentIndex === 8){
         val = 80;
     } else if(currentIndex === 9){
         val = 90;
     } else if(currentIndex === 10){
         val = 100;
     }
     const testData = [
        { bgcolor: "#f31303d7", 
          completed: val
         }
      ];
      const [value, setValue] = React.useState('');
      const handleChange = (event) => {
        setValue(event.target.value);
      };
         
    return <>
                <h2 className="quiz-api-title">Quiz</h2>
                    <p>
                    {testData.map((item, idx) => (
                    <Progressbar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    ))}
                    </p>
                    {/* dangerouslySetInnerHTML={{currentIndex,__html:question}} */}
                    <h3 className="quiz-api-question">{currentIndex}{" "}{question}</h3>
                    {/* <label className="quiz-api-container">One
                    <input type="checkbox"  />
                    <span class="checkmark"></span>
                    </label>
                    <label class="quiz-api-container">Two
                    <input type="checkbox"   />
                    <span class="checkmark"></span>
                    </label>

                    <label class="quiz-api-container">Three
                    <input type="checkbox"   />
                    <span class="checkmark"></span>
                    </label>

                    <label class="quiz-api-container">Four
                    <input type="checkbox"  />
                    <span class="checkmark"></span>
                    </label> */}            
                    <FormControl component="fieldset">
                    <RadioGroup
                        aria-label="gender"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                    >
                    {answers.map((answers,idx) => {
                        return (
                            <FormControlLabel value={answers} onClick= { () => handleAnswer(answers)} control={<Radio color="success" />} label={answers} />
                        )
                    })}
                    </RadioGroup>
                    </FormControl>
                    <div className="prev-next">
                    <Stack direction="row" spacing={3}>
                    <Button color="error" variant="outlined" onClick={() => handlePrev()}>
                        Prev
                    </Button>
                    <Button onClick={() => handleNext()} color="success" variant="outlined">
                        Next
                    </Button>
                    </Stack>
                    </div>
    </>
}

export default Quizproblem;