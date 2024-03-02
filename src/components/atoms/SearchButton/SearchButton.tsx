import { FC } from "react";

import "./SearchButton.scss";

export const SearchButton: FC = () => (
  <button className='search'>
    <img src='./assets/images/header/search-icon.png' alt='search' />
  </button>
);
