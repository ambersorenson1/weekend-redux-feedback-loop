import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";


function Review() {
  console.log('in review');
  const feedbackReducer = useSelector ((store) => store.feedbackReducer);
  const history = useHistory();
    const handleReducerPost = () => {
      console.log('in handleReducerPost');
      axios.post('api/feedback', feedbackReducer
      ).then((response) =>{
        console.log('storing the data', response);
        history.push('/success')
      }).catch(function (error) {
        console.log('error posting the information', error);
      });
    }
 
  



  return(
    <div className='App'>
    <header className='App-header'>
      <h1 className='App-title'> Please review your feedback</h1>
      <p>{feedbackReducer.feeling}</p>
      <p>{feedbackReducer.understanding}</p>
      <p>{feedbackReducer.supported}</p>
      <p>{feedbackReducer.comments}</p>
      <button onClick={handleReducerPost}>Submit</button>
    </header>
    </div>
  )
}




export default Review;