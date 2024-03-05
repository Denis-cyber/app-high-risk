import { FC } from "react";

import "./MenuPage.scss";

export const MenuPage: FC = () => (
  <div className='menu-page-container'>
    <div className='menu-item'>
      <div className='menu-item__img'>
        <img src={`./assets/images/menu/games.svg`} alt={"games"} />
      </div>
      <span>Games</span>
    </div>
  </div>
);
