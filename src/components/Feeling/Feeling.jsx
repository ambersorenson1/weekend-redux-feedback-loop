import React from "react";
import axios from 'axios';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";



function Feeling (){
  console.log('in feelings');
 const [feeling, setFeeling] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

//   const handleFeeling = (event) => {
//     event.preventDefault();
//     if(feeling === ''){
//       alert('Please choose a number from 1-5 to continue')
//     }else if (feeling >5){
//       alert('Please choose a number from 1-5 to continue')
//     // }else {
//     //   dispatch({
//     //     type: 'SET_FEELING',
//     //     payload: feeling
//     //   })
//     //   history.push('/understanding')
//      }
//   }
   return (
     <section>
      <header>
        <h1> How are you feeling today?</h1>
        <input
        type="number"
        required
        placeholder="Rate on a scale of 1-5"
        value={feeling}
        onChange={(event) => setFeeling(event.target.value)}>
        </input>
        <button>Next</button>
      </header>
     </section>
   )
 }

export default Feeling;