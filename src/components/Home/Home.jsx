import { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";



function Home(){
  const history = useHistory();

  const [feedback, setFeedback] = useState ([]);


  useEffect (() => {
    getFeedback();
  }, []);
}

const getFeedback = () => {
  axios ({
    method: 'GET',
    url: '/api/feedback' 
  }).then((response) => {
    console.log('In GET route', response.data);
    setFeedback(response.data);
  }).catch((error) => {
    console.log('In GET route and could not process the request ERROR');
  });
}