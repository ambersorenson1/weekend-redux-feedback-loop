import { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";



function Home(){
   const history = useHistory();
   const dispatch = useDispatch();

   const [feedback, setFeedback] = useState ('');


// function getHomeFeedback() {
//   dispatch({
//     type: 'SURVEY_INFO',
//     payload: survey
//   })
//   function readyToStartSurvey () {
//     history.push('/feeling')
//   }
// }

return (
  <section>
    <h1>Welcome to Prime Reviews!! Please click the button below to start the survey!</h1>
    <button>Start Here</button>
  </section>
)

}
export default Home; 