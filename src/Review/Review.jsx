import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";


function Review() {
  console.log('in review');
  const feedbackReducer = useSelector (state => state.feedbackReducer);
  const history = useHistory();
 
  



  return(
    <div className='App'>
    <header className='App-header'>
      <h1 className='App-title'> Please review your feedback</h1>
      <p>{feedbackReducer.feeling}</p>
      <p>{feedbackReducer.understanding}</p>
      <p>{feedbackReducer.supported}</p>
      <p>{feedbackReducer.comments}</p>
    </header>
    </div>
  )
}




export default Review;