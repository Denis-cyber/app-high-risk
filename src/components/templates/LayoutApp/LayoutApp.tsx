import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "components/organisms/Footer";
import { Header } from "components/organisms/Header";

import "./LayoutApp.scss";

export const LayoutApp: FC = () => (
  <div className='layout'>
    <Header />
    <Outlet />
    <Footer />
  </div>
);
