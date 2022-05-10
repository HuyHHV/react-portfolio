import './Reset.css'
import './App.css';
import Navbar  from './components/navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/pages/Home'
import Works from './components/pages/Works';
import Contact from './components/pages/Contact'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/works" element = {<Works/>} />
          <Route path="/contact" element = {<Contact/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
