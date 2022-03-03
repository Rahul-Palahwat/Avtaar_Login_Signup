import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';

import Signup from './components/Signup';
import User from './components/User';

function App() {
  return (
    <>
    <Router>
      
      <Routes>

      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/login" element={<Login />}></Route>
      <Route exact path="/signup" element={<Signup />}></Route>
      <Route exact path="/user" element={<User/>}></Route>

      </Routes>
      {/* <Signup/> */}
      {/* <Login/> */}
      {/* <Home/> */}
      <Footer/>
      </Router>
    </>
  );
}

export default App;
