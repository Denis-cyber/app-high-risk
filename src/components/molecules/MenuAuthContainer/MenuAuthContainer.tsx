import { FC } from "react";
import { AuthButton } from "components/atoms/AuthButton";
import { AuthButtonsType } from "types";

import "./MenuAuthContainer.scss";

export const MenuAuthContainer: FC = () => (
  <div className='auth-btns'>
    <AuthButton btnType={AuthButtonsType.MENU_REGISTER} />
    <AuthButton btnType={AuthButtonsType.MENU_LOG_IN} />
  </div>
);
