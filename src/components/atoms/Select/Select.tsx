import { FC } from "react";

import "./Select.scss";

export const Select: FC = () => (
  <div className='select-box'>
    <div className='select-box__current' tabIndex={1}>
      <div className='select-box__value'>
        <input className='select-box__input' type='radio' id='0' value='1' name='Ben' defaultChecked />
        <p className='select-box__input-text'>Currency</p>
      </div>
      <div className='select-box__value'>
        <input className='select-box__input' type='radio' id='1' value='2' name='Ben' />
        <p className='select-box__input-text'>Argentine Peso</p>
      </div>
      <div className='select-box__value'>
        <input className='select-box__input' type='radio' id='2' value='3' name='Ben' />
        <p className='select-box__input-text'>Australian Dollar</p>
      </div>
      <div className='select-box__value'>
        <input className='select-box__input' type='radio' id='3' value='4' name='Ben' />
        <p className='select-box__input-text'>Baht</p>
      </div>
      <div className='select-box__value'>
        <input className='select-box__input' type='radio' id='4' value='5' name='Ben' />
        <p className='select-box__input-text'>Brazillian Real</p>
      </div>
      <div className='select-box__value'>
        <input className='select-box__input' type='radio' id='4' value='5' name='Ben' />
        <p className='select-box__input-text'>Bulgarian Lev</p>
      </div>
      <img
        className='select-box__icon'
        src='./assets/images/bonus/arrow-down.png'
        alt='arrow-down'
        aria-hidden='true'
      />
    </div>
    <ul className='select-box__list'>
      <li>
        <label className='select-box__option' htmlFor='0' aria-hidden>
          Currency
        </label>
      </li>
      <li>
        <label className='select-box__option' htmlFor='1' aria-hidden>
          Argentine Peso
        </label>
      </li>
      <li>
        <label className='select-box__option' htmlFor='2' aria-hidden>
          Australian Dollar
        </label>
      </li>
      <li>
        <label className='select-box__option' htmlFor='3' aria-hidden>
          Baht
        </label>
      </li>
      <li>
        <label className='select-box__option' htmlFor='4' aria-hidden>
          Brazillian Real
        </label>
      </li>
      <li>
        <label className='select-box__option' htmlFor='5' aria-hidden>
          Bulgarian Lev
        </label>
      </li>
    </ul>
  </div>
);
