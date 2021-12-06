import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function Understanding(){
  console.log('in Understanding');
  const [understanding, setUnderstanding] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleUnderstanding = (event) => {
    event.preventDefault();
    if (understanding >= 1 && understanding <= 5){
      dispatch({
          type: 'SET_UNDERSTANDING',
          payload: understanding
        })
        history.push('/support');
       }
       else {
        alert('Please enter a value between 1 and 5!')
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
        value={understanding}
        onChange={(event) => setUnderstanding(event.target.value)}>
        </input>
        <button onClick={handleUnderstanding}>Next</button>
      </header>
     </div>
)

}

export default Understanding;