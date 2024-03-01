import { FC } from "react";

import "./Header.scss";

export const Header: FC = () => (
  <header className='header'>
    <img src='./assets/images/header/logo.png' alt='logo' />
    <button className='search'>
      <img src='./assets/images/header/search-icon.png' alt='search' />
    </button>
  </header>
);
