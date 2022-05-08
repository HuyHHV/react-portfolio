import './Reset.css'
import './App.css';
import Navbar  from './components/navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/pages/home'


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element = {<Home/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
