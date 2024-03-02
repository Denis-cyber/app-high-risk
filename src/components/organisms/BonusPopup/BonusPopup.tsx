import { FC } from "react";

import "./BonusPopup.scss";

export const BonusPopup: FC = () => (
  <div className='bonus'>
    <span className='bonus__title'>Deposit and play</span>

    <button className='bonus__item'>
      <span className='bonus__item__bg' onClick={() => console.log("tut")}></span>
      <div className='bonus__item__content'>
        <p className='bonus__item__content__title'>Welcome bonus</p>
        <p className='bonus__item__content__desc'>
          100% up to €500 <br />
          +120 FreeSpins
        </p>
      </div>
    </button>

    <button className='bonus__start'>
      <span className='bonus__start__bg'></span>
      <span className='bonus__start__text'>Start with your 100% bonus</span>
    </button>
  </div>
);
