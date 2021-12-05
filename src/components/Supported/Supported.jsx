import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function Supported(){
  console.log('in Supported');
  const [supported, setSupported] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();


  const handleSupported = (event) => {
    event.preventDefault();
    if(supported === ''){
      alert('Please choose a number from 1-5 to continue')
    }else if (supported >5){
      alert('Please choose a number from 1-5 to continue')
    }else {
      dispatch({
        type: 'SET_SUPPORTED',
        payload: supported
      })
      history.push('/comments')
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
        value={supported}
        onChange={(event) => setSupported(event.target.value)}>
        </input>
        <button onClick={handleSupported}>Next</button>
      </header>
     </div>
)

}

export default Supported;