import { FC } from "react";
import { SearchInput } from "components/atoms/SearchInput";
import { MenuItemsContainer } from "components/molecules/MenuItemsContainer";
import { MenuAuthContainer } from "components/molecules/MenuAuthContainer";

import "./MenuPage.scss";

export const MenuPage: FC = () => (
  <div className='menu-page-container'>
    <MenuAuthContainer />
    <SearchInput />
    <MenuItemsContainer />
  </div>
);
