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
import Resume from './components/pages/Resume';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/works" element = {<Works/>} />
          <Route path="/contact" element = {<Contact/>} />
          <Route path="/resume" element = {<Resume/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
