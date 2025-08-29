import './App.css'
import Home from './components/home';
import React, {useState} from 'react';
import Main from './ctrl.jsx'
    const [isRendered, setisRendered] = useState(false)

const toggle = () => {
    // Check if all credentials are provided
    if (email && username && password && uniqueId) {
      setisRendered(true);  // If credentials are present, show the Main component
    } else {
      alert('Please fill all the fields.');  // If not, show an alert
      window.location.reload();  // Reload the page to reset the form
    }
  };

function App() {

  return (
    <>
      
    <button  type ="submit" onclick = {toggle}>Login to go to school website  </button>
            {isRendered ? <Main /> : <Home/>}
            </>
  )
}

export default App;
