import './App.css';
import Navbar from './components/Navbar/Navbar';
import Routing from './Routing';
import { BrowserRouter as Router } from 'react-router-dom' 

function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />
        <Routing />
      </Router >
    </div>
  );
}

export default App;
