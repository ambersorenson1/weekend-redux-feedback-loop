import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function Support(){
  console.log('in Support');
  const [support, setSupport] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();


  const handleSupport = (event) => {
    event.preventDefault();
    if (support >= 1 && support <= 5){
      dispatch({
          type: 'SET_SUPPORT',
          payload: support
        })
        history.push('/comments');
       }
       else {
        alert('Please enter a value between 1 and 5!')
       }
    }


return (
<div className='App'>
      <header className='App-header'>
        <h1 className='App-title'> Did you feel supported today?</h1>
        <input
        type="number"
        required
        placeholder="Rate on a scale of 1-5"
        value={support}
        onChange={(event) => setSupport(event.target.value)}>
        </input>
        <button onClick={handleSupport}>Next</button>
      </header>
     </div>
)

}

export default Support;