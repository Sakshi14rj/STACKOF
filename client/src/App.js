import './App.css';
import Navbar from './components/Navbar/Navbar';
import Routing from './Routing';
import { BrowserRouter as Router } from 'react-router-dom' 
import {useEffect} from 'react'
import { fetchAllQuestions } from './actions/question';
import {useDispatch} from 'react-redux'
function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllQuestions())
  }, [dispatch])
  

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
