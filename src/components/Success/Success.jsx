import { useHistory } from "react-router";


function Success () {
  console.log('in Success');
  const history = useHistory();


  function returnHome (){
    history.push('/');
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'> Your Survey has been submitted!!</h1>
        <p>Please click on the button below to return to the homepage</p>
        <button onClick={returnHome}>Return</button>
      </header>
    </div>
  )
}

export default Success;