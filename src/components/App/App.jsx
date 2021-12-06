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
import Review from '../../Review/Review';
import Success from '../Success/Success';



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
    <Router>
    <Route path ="/">
      <Home /> 
    </Route>
    <Route exact path ="/feeling">
      <Feeling /> 
    </Route>
    <Route exact path ="/understanding">
      <Understanding /> 
    </Route>
    <Route exact path ="/supported">
      <Supported /> 
    </Route>
    <Route exact path ="/comments">
      <Comments /> 
    </Route>
    <Route exact path ="/review">
      <Review /> 
    </Route>
    <Route exact path ="/success">
       <Success />  
    </Route>
    <p>
      <Link to="/">Home</Link>
    </p>
</Router> 
  </div>
);
}

export default App;
