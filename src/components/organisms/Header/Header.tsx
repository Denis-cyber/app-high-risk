import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { SearchButton } from "components/atoms/SearchButton";
import { PATHS } from "consts";

import "./Header.scss";

export const Header: FC<{ showExtraIcons: boolean }> = memo(({ showExtraIcons }) => (
  <header className='header'>
    <div className='header__part'>
      <Link to={PATHS.HOME}>
        <img src='./assets/images/header/logo.png' alt='logo' />
      </Link>
      <SearchButton />
    </div>

    {showExtraIcons && (
      <div className='header__part'>
        <img className='header__part__letter' src='./assets/images/header/letter.svg' alt='letter' />
        <img className='header__part__letter__icon' src='./assets/images/header/letter-icon.svg' alt='letter-icon' />
        <img className='header__part__flag' src='./assets/images/header/flag.png' alt='flag' />
      </div>
    )}
  </header>
));
