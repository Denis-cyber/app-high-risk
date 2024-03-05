import { Routes, Route, Navigate } from "react-router-dom";
import { StartPage } from "components/pages/StartPage";
import { MenuPage } from "components/pages/MenuPage";
import { LayoutApp } from "components/templates/LayoutApp";
import { PATHS } from "consts";

export const App = () => (
  <Routes>
    <Route path={PATHS.HOME} element={<LayoutApp />}>
      <Route index element={<StartPage />} />
      <Route path={PATHS.MENU} element={<MenuPage />} />
    </Route>
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
);
