import { FC } from "react";

import "./BonusPopup.scss";

export const BonusPopup: FC = () => (
  <div className='bonus'>
    <div className='bonus__title'>
      <img src='./assets/images/bonus/title.png' alt='bonus-title' />
    </div>

    <button className='bonus__start'>
      <span className='bonus__start__bg'></span>
      <span className='bonus__start__text'>Start with your 100% bonus</span>
    </button>
  </div>
);
