import { FC } from "react";
import { AuthButton } from "components/atoms/AuthButton";
import { MenuButton } from "components/atoms/MenuButton";
import { AuthButtonsType } from "types";

import "./Footer.scss";

export const Footer: FC = () => (
  <footer className='footer'>
    <AuthButton btnType={AuthButtonsType.FOOTER_SIGN_IN} />
    <MenuButton />
    <AuthButton btnType={AuthButtonsType.FOOTER_SIGN_UP} />
  </footer>
);
