import React from "react";
import axios from 'axios';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function Supported(){
  console.log('in Supported');
  const [supported, setSupported] = useState('');


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
        <button>Next</button>
      </header>
     </div>
)

}

export default Supported;