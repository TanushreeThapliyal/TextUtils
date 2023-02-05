import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";





function App() {
  const[mode,setMode]=useState('light'); // Weather dark mode is enabled or not 
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>
  {
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const toggleMode=()=>
  {
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#1B3660";
      showAlert("Dark mode has been enabled","success");
    }
    else{
    setMode('light')
    document.body.style.backgroundColor="white";
    showAlert("Light mode has been enabled","success");
    }

  }
  return (
    <>

<Router>
    
    
    
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/> 
<Alert alert={alert}/>
<Routes>
            <Route exact path="/About" element={<About mode={mode}/>}>
            </Route>
            
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
            </Routes>
        
        
        </Router>
    </>
    
  );
}

export default App;
