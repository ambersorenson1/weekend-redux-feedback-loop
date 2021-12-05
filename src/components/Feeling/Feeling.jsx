import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";



function Feeling (){
  console.log('in feelings');
 const [feeling, setFeeling] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const handleFeeling = (event) => {
    event.preventDefault();
    if(feeling === ''){
      alert('Please choose a number from 1-5 to continue')
    }else if (feeling >5){
      alert('Please choose a number from 1-5 to continue')
    }else {
      dispatch({
        type: 'SET_FEELING',
        payload: feeling
      })
      history.push('/understanding')
     }
  }
   return (
     <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'> How are you feeling today?</h1>
        <input
        type="number"
        required
        placeholder="Rate on a scale of 1-5"
        value={feeling}
        onChange={(event) => setFeeling(event.target.value)}>
        </input>
        <button onClick={handleFeeling}>Next</button>
      </header>
     </div>
   )
 }

export default Feeling;