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
function App() {
  return (
    <>
    <NoteState>
      <BrowserRouter>
       <NavBar name="My Note Book"></NavBar>
      <Routes>
      <Route exact path="/" element={<Home/>}>
      </Route>
      <Route path="/about" element={<About/>}>
      </Route>
      </Routes>
      </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
