import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


//importing the components I will need to access 
// import Comments from '../Comments/Comments';
// import Feelings from '..Feelings/Feelings';
 import Home from '../Home/Home';
// import Support from '../Supported/Supported';
// import Understanding from '../Understanding/Understanding';



function App() {

const  getFeedback = () => {
  axios({
    method: "GET",
    url: "/api/feedback",
  })
    .then((response) => {
      console.log("Feedback Get response:", response.data);
      dispatch({
        type: "SET_FEEDBACK",
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log("/api/feedback GET error:", error);
    });
};


return (
  <div className='App'>
    <header className='App-header'>
      <h1 className='App-title'>Feedback!</h1>
      <h4>Don't forget it!</h4>
    </header>

  </div>
    // {/* <Router>
    //   <Route exact path ="/">
    //     {/* <Home /> */}
    //   </Route>
    //   <Route exact path ="/">
    //     {/* <Feeling /> */}
    //   </Route>
    //   <Route exact path ="/">
    //     {/* <Understanding /> */}
    //   </Route>
    //   <Route exact path ="/">
    //     {/* <Supported /> */}
    //   </Route>
    //   <Route exact path ="/">
    //     {/* <Comments /> */}
    //   </Route>
    //   <Route exact path ="/">
    //     {/* <Review /> */}
    //   </Route>
    //   <Route exact path ="/">
    //     {/* <Submit /> */}
    //   </Route>
    // </Router> */}
);
}

export default App;
