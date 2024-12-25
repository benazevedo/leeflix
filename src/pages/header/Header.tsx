import React, { useState } from 'react';
import './header.css';
import Search from '../../components/search/Search';
import NavListItem from '../../components/navListItem/NavListItem';
import Button from '../../components/button/Button';
import navListData from '../../data/navListData';

interface IHeader {
  activeNav: any;
  setActiveNav: (nav: any) => void;
  scroll: number;
  onSearch: (query: string) => void; // Pass the query to App
}

function Header({ activeNav, setActiveNav, scroll, onSearch }: IHeader) {
  const [navList, setNavList] = useState(navListData);
  const [open, setOpen] = useState(false);

  const handleNavOnClick = (id: number) => {
    const newNavList = navList.map((nav) => {
      nav.active = false;
      if (nav._id === id) nav.active = true;
      return nav;
    });

    setNavList(newNavList);
  };

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className={`${scroll > 100 ? 'scrolled' : undefined}`}>
      <a href="/" className="logo">
        LEEFLIX
      </a>
      {open ? (
        <a className="menu" onClick={handleToggleMenu}>
          <ion-icon name="close-outline"></ion-icon>
        </a>
      ) : (
        <a className="menu" onClick={handleToggleMenu}>
          <ion-icon name="menu-outline"></ion-icon>
        </a>
      )}
      <ul className="nav">
        {navList.map((nav) => (
          <NavListItem
            key={nav._id}
            nav={nav}
            navOnClick={() => {
              handleNavOnClick(nav._id);
              setActiveNav(nav.name);
            }}
          />
        ))}
      </ul>
      <Search onSearch={onSearch} /> {/* Pass search input to App */}
    </header>
  );
}

export default Header;
