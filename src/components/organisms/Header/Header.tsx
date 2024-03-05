import { FC } from "react";
import { Link } from "react-router-dom";
import { SearchButton } from "components/atoms/SearchButton";
import { PATHS } from "consts";

import "./Header.scss";

export const Header: FC = () => (
  <header className='header'>
    <Link to={PATHS.HOME}>
      <img src='./assets/images/header/logo.png' alt='logo' />
    </Link>
    <SearchButton />
  </header>
);
