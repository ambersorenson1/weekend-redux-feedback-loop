import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";



function Home(){
   const history = useHistory();
   const dispatch = useDispatch();

   const [feedback, setFeedback] = useState ('');

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
    history.push('/feeling')
  }


return (
  <section>
    <h1>Welcome to Prime Reviews!! Please click the button below to start the survey!</h1>
    <button onClick={getFeedback}>Start Here</button>
  </section>
)

}
export default Home; 