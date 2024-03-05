import { FC } from "react";
import { IMenuItem } from "types";

import "./MenuItem.scss";

interface IMenuItemProps extends IMenuItem {}

export const MenuItem: FC<IMenuItemProps> = ({ imgName, text, icon }) => (
  <div className='menu-item'>
    <div className='menu-item__img'>
      <img src={`./assets/images/menu/${imgName}.svg`} alt={imgName} />
      {icon}
    </div>
    <span>{text}</span>
  </div>
);
