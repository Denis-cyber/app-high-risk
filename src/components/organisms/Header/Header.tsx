import { FC } from "react";
import { SearchButton } from "components/atoms/SearchButton";

import "./Header.scss";

export const Header: FC = () => (
  <header className='header'>
    <img src='./assets/images/header/logo.png' alt='logo' />
    <SearchButton />
  </header>
);
