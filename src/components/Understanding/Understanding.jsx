import React from "react";
import axios from 'axios';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function Understanding(){
  console.log('in Understanding');
  const [understand, setUnderstand] = useState('');


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
        <button>Next</button>
      </header>
     </div>
)

}

export default Understanding;