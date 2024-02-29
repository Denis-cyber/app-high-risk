import { FC } from "react";
import { Outlet } from "react-router-dom";

import "./LayoutApp.scss";

export const LayoutApp: FC = () => (
  <div className='layout'>
    <header className='header'>
      <img src='/assets/images/header/logo.png' alt='logo' />
      <img className='icon-label' src='/assets/images/header/label.png' alt='label' />
      <img src='/assets/images/header/search.png' alt='search' />
    </header>
    <Outlet />
    <footer className='footer'>
      <button className='signIn'>
        <span>Sign In</span>
      </button>

      <button className='menu-btn'>
        <div className='menu-lines'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <button className='signUp'>
        <span>Sign Up</span>
      </button>
    </footer>
  </div>
);
