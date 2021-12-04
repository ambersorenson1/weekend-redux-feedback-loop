import React from 'react';
import axios from 'axios';
import './App.css';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    </div>
  );
}


function refreshPizzas() {
  axios({
    method: "GET",
    url: "/api/pizza",
  })
    .then((response) => {
      console.log("Pizza Get response:", response.data);
      dispatch({
        type: "SET_LIST",
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log("/api/pizza GET error:", error);
    });
};


export default App;
