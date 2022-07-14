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
import Footer from './components/footer/Footer';
import About from './components/pages/About';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/about" element = {<About/>} />
          <Route path="/works" element = {<Works/>} />
          <Route path="/contact" element = {<Contact/>} />
          <Route path="/resume" element = {<Resume/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
