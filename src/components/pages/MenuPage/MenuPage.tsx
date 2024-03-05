import { FC } from "react";
import { MenuItemsContainer } from "components/molecules/MenuItemsContainer";

import "./MenuPage.scss";

export const MenuPage: FC = () => (
  <div className='menu-page-container'>
    <MenuItemsContainer />
  </div>
);
