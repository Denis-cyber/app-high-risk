import { FC } from "react";
import { Link } from "react-router-dom";
import { AuthButton } from "components/atoms/AuthButton";
import { MenuButton } from "components/atoms/MenuButton";
import { PATHS } from "consts";
import { AuthButtonsType } from "types";

import "./Footer.scss";

export const Footer: FC = () => (
  <footer className='footer'>
    <AuthButton btnType={AuthButtonsType.FOOTER_SIGN_IN} />
    <Link to={PATHS.MENU}>
      <MenuButton />
    </Link>
    <AuthButton btnType={AuthButtonsType.FOOTER_SIGN_UP} />
  </footer>
);
