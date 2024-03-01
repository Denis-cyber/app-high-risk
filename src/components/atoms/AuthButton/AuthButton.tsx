import { FC } from "react";

import "./AuthButton.scss";
import { AuthButtonsType } from "types";

interface IAuthButtonProps {
  btnType: AuthButtonsType;
}

export const AuthButton: FC<IAuthButtonProps> = ({ btnType }) => {
  switch (btnType) {
    case AuthButtonsType.FOOTER_SIGN_IN:
      return (
        <button className='signIn'>
          <span className='signIn__bg'></span>
          <span className='signIn__text'>Sign Up</span>
        </button>
      );
    case AuthButtonsType.FOOTER_SIGN_UP:
      return (
        <button className='signUp'>
          <span className='signUp__bg'></span>
          <span className='signUp__text'>Sign Up</span>
        </button>
      );

    default:
      return null;
  }
};
