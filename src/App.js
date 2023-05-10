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




function App() {
  return (
    <>
    <NoteState>
      <BrowserRouter>
       <NavBar name="My Note Book"></NavBar>
      <Alert message="Hello World"/>
       <div className="container">
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/Registration" element={<Registration />}></Route>
      </Routes>
      </div> 
      </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
