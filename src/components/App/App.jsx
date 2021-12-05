import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


//importing the components I will need to access 
import Comments from '../Comments/Comments';
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling'
import Supported from '../Supported/Supported';
import Understanding from '../Understanding/Understanding';



function App() {

const  getFeedback = () => {
  axios.get('/api/feedback')
  .then ((response) => {
    const action = {
      type: 'SET_FEEDBACK',
      payload: response.data
    }
    dispatchEvent(action);
  }).catch( err => {
      alert('error in GET feedback');
      console.error(err)
    })
}


return (
  <div className='App'>
    <header className='App-header'>
      <h1 className='App-title'>Feedback!</h1>
      <h4>Don't forget it!</h4>
    </header>
    <Home />
    <Feeling />
    <Understanding />
    <Supported />
    <Comments />
  </div>
);
}

export default App;
