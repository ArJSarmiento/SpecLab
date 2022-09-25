import './styles.css';
import { useState, useEffect } from 'react';

function Header() {
  const [scroll, setScroll] = useState(false);
  const scrollHandler = () =>{ 
    setScroll(window.pageYOffset > 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
  }, []);

  return (
    <header className={scroll ? "blur" : ""}>
        <h1>
          <img src="icon.png" alt="SpecLab" />
          SpecLab
        </h1>
    </header>
  );
}

export default Header;