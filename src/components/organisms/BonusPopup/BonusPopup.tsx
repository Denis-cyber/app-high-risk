import { FC } from "react";

import "./BonusPopup.scss";

export const BonusPopup: FC = () => (
  <div className='bonus'>
    <span className='bonus__title'>Deposit and play</span>

    <button className='bonus__item'>
      <span className='bonus__item__bg'></span>
      <div className='bonus__item__content'>
        <div className='bonus__item__content__image'>
          <img src='./assets/images/bonus/welcome.png' alt='welcome' />
        </div>

        <div className='bonus__item__content__text'>
          <p className='bonus__item__content__text__title'>Welcome bonus</p>
          <p className='bonus__item__content__text__desc'>100% up to €500 +120 FreeSpins</p>
        </div>

        <div className='bonus__item__content__toggle'>
          <img src='./assets/images/bonus/vertical-line.png' alt='vertical-line' />
          <div className='bonus__item__content__toggle__vector'>
            <img src='./assets/images/bonus/vector.png' alt='vector' />
          </div>
        </div>
      </div>
    </button>

    <button className='bonus__start'>
      <span className='bonus__start__bg'></span>
      <span className='bonus__start__text'>Start with your 100% bonus</span>
    </button>
  </div>
);
