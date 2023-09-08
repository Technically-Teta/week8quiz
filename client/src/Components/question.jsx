import React,{useState} from "react";

const questionChoice = (props) => {

   let quiz = props.data.result;
   const answersArray= [props.quiz.correct_answer, ...quiz.incorrect_answers];
   


    return (
      <div>
        <p>{props.question}</p>
     
      </div>
    );
  };










  
  export default questionChoice;
  