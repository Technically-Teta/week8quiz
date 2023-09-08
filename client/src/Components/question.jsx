import React,{useState} from "react";

const questionChoice = (props) => {

   let quiz = props.data.result;
   const answersArray= [props.quiz.correct_answer, ...quiz.incorrect_answers];
   
   answersArray.sort()

   const questionController = (item) => {
   let correct = props.quiz.correct_answer;
  
   }


    return (
      <div>
        <p>{props.question}</p>
     
      </div>
    );
  };










  
  export default questionChoice;
  