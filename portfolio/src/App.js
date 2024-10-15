
import './App.css';
import NavBar from './Component/NavBar';
import Routing from './Component/Routing';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      
      <Router>
        <NavBar /> 
        <Routing />
      </Router>
 
 </div>
  );
}

export default App;
