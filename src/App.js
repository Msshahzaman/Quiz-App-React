import './App.css';
import { useState,useEffect } from 'react';

function App() {
//   const [questions,setQuestions] = useState([])
//   const [CurrentIndex, setCurrentIndex] = useState(0)
// const [Options, setOptions] = useState([])

useEffect(function(){
   getQuestionsFromAPI()
},[])


  function getQuestionsFromAPI(){
    fetch('https://the-trivia-api.com/v2/questions')
    .then(res=>res.json())
    .then(res=>console.log(res))
    // .then(res=>setQuestions(res))
  // }
  // if(!questions.length){
  //   return <div>

  //   <img src="https://media0.giphy.com/media/uIJBFZoOaifHf52MER/200w.gif?cid=6c09b952wwt2lsu74cfaqr3ykkjs0chbubhn16ozkgaiblel&ep=v1_gifs_search&rid=200w.gif&ct=g" alt="" />
  //   </div>
  // }
// const arr1 = questions[CurrentIndex].correctAnswers
// const arr2 = questions[CurrentIndex].incorrectAnswers
// // const arr3 = arr1.concat(arr2)
// const merge = [...arr1, ...arr2]
// // console.log(arr3)

  }


  return (
    <div className="App">
      <header className="App-header">

  {/* <h2>{questions[CurrentIndex].question.text}</h2>    */}

   
  <div>

{/* <h3>{questions[CurrentIndex].correctAnswers}</h3>  */}

{/* <h3>{questions[CurrentIndex].incorrectAnswers}</h3> */}

{/* <h3>{questions[CurrentIndex].incorrectAnswers.map(function(item){
    return <li>{item}</li>
  })}</h3> */}


{/* 
<h3>{merge.map(function(item){
     <li>{item}</li>
  })}</h3>
 */}


  </div>











      </header>
    </div>
  );
}

export default App;
