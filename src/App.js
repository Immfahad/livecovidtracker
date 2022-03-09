import { useState } from 'react';
import './App.css';
import About from './component/About';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
// import Paragraph from './component/Paragraph'
import TextForm from './component/TextForm'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App (){
  const[mode, setMode]=useState('light');
  
  const[alert, setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)

  }
  

  const  toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='grey';
      document.title="Textutils-Dark Mode";
      showAlert("Dark mode has been enabled","success");
      
    }
   else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.title="Textutils-Light Mode";
      showAlert("Light mode has been enabled","success");
      
    }}
    const  toggleMode1=()=>{
      if(mode==="light"){
        setMode("dark");
        document.body.style.backgroundColor='#57522d';
        
        
      }
     else{
        setMode('light');
        document.body.style.backgroundColor='white';
        
        
      }

  }
    return (
      <>
      <Router>    
      <Navbar title="TextUtils" About=" About" mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1}/>
      {/* <Navbar/> */}
      {/* <Paragraph/> */}
      <Alert alert={alert}/>
      <div className="container my-3">
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm showAlert={showAlert} heading="Write text below" mode={mode}/>
            
          </Route>
      </Switch>
      </div>
      </Router>
      </>
 )
}
export default App;
