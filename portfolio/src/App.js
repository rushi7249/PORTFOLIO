
import './App.css';
import NavBar from './Component/NavBar';
import Routing from './Component/Routing';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Component/Footer';
import ScrollToTop from './Component/ScrollToTop';

function App() {
 
  return (
    <div className="App">
      
      <Router>
      <ScrollToTop />
        <NavBar /> 
        <Routing />
        <Footer/>
      </Router>
 
 </div>
  );
}

export default App;
