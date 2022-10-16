import './styles.css';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function Header() {
  const [scroll, setScroll] = useState(false);
  const scrollHandler = () =>{ 
    setScroll(window.scrollY > 15);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
  }, []);

  return (
    <header className={scroll ? "blur" : ""}>
        <h1>
          <img src="icon.png" alt="SpecLab" />
          <Link to="/">Home</Link>
          <Link to="/predict">Predict</Link>
          <Link to="/contact">Contact</Link>
        </h1>
    </header>
  );
}

export default Header;