import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './components/About'
import NavBar from './components/NavBar';
import Home from './components/Home'
function App() {
  return (
    <>
      <BrowserRouter>
       <NavBar name="My Note Book"></NavBar>
        <Routes>
      <Route exact path="/" element={<Home/>}>
      </Route>
      <Route path="/about" element={<About/>}>
      </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
