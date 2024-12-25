// import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// import Swiper styles
import 'swiper/css';

// import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './pages/header/Header';
import Main from './pages/main/Main';
import Footer from './pages/footer/Footer';
import BackToTopBtn from './components/backToTopBtn/BackToTopBtn';

function App() {
  const [scroll, setScroll] = useState(0);
  const [activeNav, setActiveNav] = useState<any>('GENRES');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <>
      <Header
        scroll={scroll}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        onSearch={setSearchQuery} // Handle search input
      />
      <Main
        activeNav={activeNav}
        searchQuery={searchQuery}
        setActiveNav={setActiveNav}
      />
      <Footer />
      <BackToTopBtn scroll={scroll} />
    </>
  );
}

export default App;
