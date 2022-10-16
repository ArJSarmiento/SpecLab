import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/';
import Home from './components/Home/';
import Predict from './components/Predict/';
import Contact from './components/Contact/';

function App() {
  return (
    <Router>  
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={< Home />}></Route>
          <Route path='/predict' element={< Predict />}></Route>
          <Route path='/contact' element={< Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
