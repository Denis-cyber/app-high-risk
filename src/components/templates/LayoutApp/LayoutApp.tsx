import { FC, useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import classNames from "classnames";
import { Footer } from "components/organisms/Footer";
import { Header } from "components/organisms/Header";

import "./LayoutApp.scss";
import { PATHS } from "consts";

export const LayoutApp: FC = () => {
  const location = useLocation();

  const isMenuPath = useMemo(() => location.pathname === PATHS.MENU, [location.pathname]);

  return (
    <div className={classNames("layout", isMenuPath && "menu-page")}>
      <Header showExtraIcons={isMenuPath} />
      <Outlet />
      <Footer />
    </div>
  );
};
