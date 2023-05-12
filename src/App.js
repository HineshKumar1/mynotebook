import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import About from './components/About'
import NavBar from './components/NavBar';
import Home from './components/Home'
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert'
import Login from './components/login';
import Registration from './components/Registration';
import { useState } from 'react';



function App(props) {
  const [alert, setalert] = useState(null)
  const showAlert = (message,type)=>{
      setalert({
        msg : message,
        type: type
      })
      setTimeout(()=>{
        setalert(null)
      },1500)
  }

  return (
    <>
    <NoteState>
      <BrowserRouter>
       <NavBar name="My Note Book"></NavBar>
      <Alert alert={alert}/>
       <div className="container">
      <Routes>
      <Route exact path="/" element={<Home showAlert={showAlert} />}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/login" element={<Login showAlert={showAlert} />}></Route>
      <Route path="/Registration" element={<Registration showAlert={showAlert} />}></Route>
      </Routes>
      </div> 
      </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
