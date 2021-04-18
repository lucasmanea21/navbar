import './App.css';
import {useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router} from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
   <>
   <Router>
    <Navbar toggle={toggle} isOpen={isOpen}/>
    <Sidebar toggle={toggle} isOpen={isOpen}/>
    </Router>
    </>
  );
}

export default App;
