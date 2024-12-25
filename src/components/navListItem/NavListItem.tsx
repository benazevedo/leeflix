import React from 'react';
import './navListItem.css';

export interface INav {
  _id: number;
  link: string;
  name: string;
  active: boolean;
}

interface INavListItem {
  key: number;
  nav: INav;
  navOnClick: (id: number) => void;
}

function NavListItem({ nav, navOnClick }: INavListItem) {
  return (
    <li>
      <a
        href={nav.link}
        onClick={() => navOnClick(nav._id)}
        className={`${nav.active ? 'active' : undefined}`}
      >
        {nav.name === 'home' ? (
          <ion-icon name="home-outline"></ion-icon>
        ) : (
          nav.name
        )}
      </a>
    </li>
  );
}

export default NavListItem;
