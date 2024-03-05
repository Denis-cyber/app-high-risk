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
          <span className='signIn__text'>Sign in</span>
        </button>
      );
    case AuthButtonsType.FOOTER_SIGN_UP:
      return (
        <button className='signUp'>
          <span className='signUp__bg'></span>
          <span className='signUp__text'>Sign up</span>
        </button>
      );
    case AuthButtonsType.MENU_REGISTER:
      return (
        <button className='register'>
          <span className='register__bg'></span>
          <span className='register__text'>Register</span>
        </button>
      );
    case AuthButtonsType.MENU_LOG_IN:
      return (
        <button className='logIn'>
          <span className='logIn__bg'></span>
          <span className='logIn__text'>Log in</span>
        </button>
      );
    default:
      return null;
  }
};
