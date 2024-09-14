import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/headers/Header';
import Pages from './components/mainPages/Pages';

function App() {
  return (
    <Router>
    <div className='App'>
      <Header/>
      <Pages/>
    </div>
    </Router>
  );
}

export default App;
