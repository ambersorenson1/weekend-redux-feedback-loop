import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function Understanding(){
  console.log('in Understanding');
  const [understand, setUnderstand] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleUnderstanding = (event) => {
    event.preventDefault();
    if(understand === ''){
      alert('Please choose a number from 1-5 to continue')
    }else if (understand >5){
      alert('Please choose a number from 1-5 to continue')
    }else {
      dispatch({
        type: 'SET_UNDERSTAND',
        payload: understand
      })
      history.push('/supported');
     }
  }
return (
<div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>How well did you understand today's material?</h1>
        <input
        type="number"
        required
        placeholder="Rate on a scale of 1-5"
        value={understand}
        onChange={(event) => setUnderstand(event.target.value)}>
        </input>
        <button onClick={handleUnderstanding}>Next</button>
      </header>
     </div>
)

}

export default Understanding;