import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";



function Home(){
   const history = useHistory();
   const dispatch = useDispatch();

   const [feedback, setFeedback] = useState ('');
   const [home, setHome] = useState ('');

   useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = () =>{
    axios.get('/api/feedback')
    .then((response) =>{
      console.log(response.data);
      setFeedback(response.data);
    }).catch((error) => {
      alert('error in getting Feedback from server');
      console.log(error);
    });
  }
  function readyToStartSurvey () {
    dispatch ({
      type: "SET_HOME",
      payload: home
    })
    history.push('/feeling')
  }


return (
  <div className='App'>
    <header className='App-header'>
      <h1 className='App-title'>Welcome to Prime Reviews!! Please click the button below to start the survey!</h1>
    </header>
    <button 
    value={feedback}
    onClick={readyToStartSurvey}
    onChange={(event) => setFeedback(event.target.value)}>Start Here</button>
  </div>
)

}
export default Home; 