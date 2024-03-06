import { FC } from "react";

import "./MenuButton.scss";

export const MenuButton: FC = () => (
  <button className='menu-btn'>
    <div className='menu-btn__lines'>
      <span className='menu-btn__lines__item'></span>
      <span className='menu-btn__lines__item'></span>
      <span className='menu-btn__lines__item'></span>
    </div>
  </button>
);
