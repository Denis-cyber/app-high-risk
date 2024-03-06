import { FC } from "react";

import "./SearchInput.scss";

export const SearchInput: FC = () => (
  <div className='search-field'>
    <input placeholder='Game name or provider' className='search-field__input' />
    <button className='search-field__button'>
      <img src={"./assets/images/menu/search-input.svg"} alt='search-input' />
    </button>
  </div>
);
