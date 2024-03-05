import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";
import classNames from "classnames";
import { Footer } from "components/organisms/Footer";
import { Header } from "components/organisms/Header";

import "./LayoutApp.scss";
import { PATHS } from "consts";

export const LayoutApp: FC = () => {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <div className={classNames("layout", pathname === PATHS.MENU && "menu-page")}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
