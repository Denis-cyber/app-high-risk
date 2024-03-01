import { FC } from "react";

import "./MenuButton.scss";

export const MenuButton: FC = () => (
  <button className='menu'>
    <div className='menu__lines'>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </button>
);
