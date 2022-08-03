import logo from './logo.svg';
import './App.css';
import Header from './components/Navbar/Navbar';
import {Route, Routes} from "react-router-dom"
import Signup from './Pages/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
