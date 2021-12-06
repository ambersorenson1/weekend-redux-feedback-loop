import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function Comments(){
  console.log('in Comments');
  const [comments, setComments] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  
    const handleComments = (event) => {
      event.preventDefault();
      if(comments === ''){
        alert('Please choose a number from 1-5 to continue')
      }else if (comments >5){
        alert('Please choose a number from 1-5 to continue')
      }else {
        dispatch({
          type: 'SET_COMMENTS',
          payload: comments
        })
        history.push('/review');
       }
    }



 
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
        <button onClick={handleComments}>Next</button>
      </header>
     </div>
)

}

export default Comments;