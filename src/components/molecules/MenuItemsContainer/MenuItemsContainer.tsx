import { FC } from "react";
import { MenuItem } from "components/atoms/MenuItem";
import { menuItems } from "./items";

import "./MenuItemsContainer.scss";

export const MenuItemsContainer: FC = () => (
  <div className='menu-items'>
    {menuItems.map((item) => (
      <MenuItem key={item.imgName} text={item.text} imgName={item.imgName} icon={item.icon} />
    ))}
  </div>
);
