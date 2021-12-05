import React from "react";
import axios from 'axios';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function Comments(){
  console.log('in Comments');
  const [comments, setComments] = useState('');


return (
<div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Are there any comments you would like to add?(If no please put N/A)</h1>
        <input
        required
        placeholder="Additional Comments"
        value={comments}
        onChange={(event) => setComments(event.target.value)}>
        </input>
        <button>Next</button>
      </header>
     </div>
)

}

export default Comments;