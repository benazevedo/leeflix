import React from 'react';
import './footerNavItem.css';

interface IFooterNavItem {
  name: string;
}

function FooterNavItem({ name }: IFooterNavItem) {
  return (
    <li>
      <ion-icon name="chevron-forward-outline"></ion-icon>{' '}
      <a href="#">{name}</a>
    </li>
  );
}

export default FooterNavItem;
