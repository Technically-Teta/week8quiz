  import {useEffect,useState } from 'react'
  import './App.css'


  function App() {

  
  const [message, setMessage] = useState('');
  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [incorrectAnswer, setIncorrectAnswer] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerStatus, setAnswerStatus] = useState('');   


      const callForQuestion = async () => {
      const response = await fetch('http://localhost:8080/getinfo/');
      const rawData = await response.text(); // Get the response as a text
      const data = JSON.parse(rawData); // Parse the text as JSON

      

      const ansToQuestions = [data.results[0].correct_answer, ...data.results[0].incorrect_answers];
      console.log(ansToQuestions);
      
      //const randomNumber = Math.floor(Math.random() * ansToQuestions.length); //DOUBLE CHECK
      setQuestion(data.results[0].question);  
      setCorrectAnswer(data.results[0].correct_answer);
      setIncorrectAnswer(data.results[0].incorrect_answers);
       
    
    };

    const handleAnswerButtonClick = (answerOption) => {
      // Check if the clicked answer matches the correct answer
      const isCorrectAnswer = answerOption === correctAnswer;
    
      // Update state to indicate whether the answer is correct or not
      setAnswerStatus(isCorrectAnswer ? 'correct' : 'incorrect');
    
      // You can also update a score here or perform other actions based on the answer
    
      // Move to the next question
      const nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion);
    };




    
    
    const callForMessage = () => {
      fetch('/api')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMessage(data.message);
      })
      .catch(err => console.log(err));
      }


  useEffect(() => {
    callForMessage();
    callForQuestion()
    handleAnswerButtonClick();
  //WHY IS THE ARRAY EMPTY HERE?
  },[]);

  //NEED A MAXIMUM OF 10 QUESTIONS
 // WHAT EVENT CAN TRACK THE CORRECT/INCORRECT ANSWERS?    
 // HOW TO MOVE FROM ONE QUESTION TO THE NEXT QUESTION?
  return (
    <div className='App'>

      <div className='App-header'>
        <h1>Quiz time!</h1>
      </div>

      <div className='question-section'>
        <div className='question-container'>
        <div className='question-text'>
        <h2>Question: <span dangerouslySetInnerHTML={{__html: question}}/></h2>
          </div>
           </div>
            </div>


            <div className="answer-section">
        {incorrectAnswer.map((answer, index) => (
          <button className='btn' key={index} onClick={() => handleAnswerButtonClick(answer)}>
            {answer}
          </button>
        ))}
        <button className='btn' onClick={() => handleAnswerButtonClick(correctAnswer)}>
          {correctAnswer}
        </button>
      </div>

      <div className="answer-status">
        {answerStatus === 'correct' && <p>Correct!</p>}
        {answerStatus === 'incorrect' && <p>Incorrect!</p>}
    </div>
 



            <div className='answers'>
                <h1> The Answer is: {correctAnswer}</h1>  
  
                </div>   


        

      
            <div> 
            
            
            
            
            </div>     

          

           <div className='closing message'>  
             {message}  

                <p> 
              <span className='totalquestions'>Total Questions:  {question.length}</span>
              </p>
           </div>
       
      </div>
   
  );
}

export default App;