import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "components/organisms/Footer";

import "./LayoutApp.scss";

export const LayoutApp: FC = () => (
  <div className='layout'>
    <header className='header'>
      <img src='/assets/images/header/logo.png' alt='logo' />
      <img className='icon-label' src='/assets/images/header/label.png' alt='label' />
      <img src='/assets/images/header/search.png' alt='search' />
    </header>
    <Outlet />
    <Footer />
  </div>
);
