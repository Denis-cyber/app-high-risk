import { FC } from "react";

import "./BonusPopup.scss";

export const BonusPopup: FC = () => (
  <div className='bonus'>
    <span className='bonus__title'>Deposit and play</span>

    <button className='bonus__start'>
      <span className='bonus__start__bg'></span>
      <span className='bonus__start__text'>Start with your 100% bonus</span>
    </button>
  </div>
);
