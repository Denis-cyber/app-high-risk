import { FC } from "react";

import "./MenuButton.scss";

export const MenuButton: FC = () => (
  <button className='menu-btn'>
    <div className='menu-btn__lines'>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </button>
);
