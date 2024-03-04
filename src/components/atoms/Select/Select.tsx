import { FC } from "react";
import { ISelectItem } from "types";

import "./Select.scss";

interface ISelectProps {
  selectItems: Array<ISelectItem>;
  name: string;
}

export const Select: FC<ISelectProps> = ({ selectItems, name }) => (
  <div className='select-box'>
    <div className='select-box__current' tabIndex={1}>
      {selectItems.map((selectItem, index) => (
        <div key={selectItem.id} className='select-box__value'>
          <input
            className='select-box__input'
            type='radio'
            id={selectItem.id}
            value={selectItem.value}
            name={name}
            defaultChecked={index === 0}
          />
          <p className='select-box__input-text'>{selectItem.text}</p>
        </div>
      ))}

      <img
        className='select-box__icon'
        src='./assets/images/bonus/arrow-down.png'
        alt='arrow-down'
        aria-hidden='true'
      />
    </div>
    <ul className='select-box__list'>
      {selectItems.map((selectItem) => (
        <li key={selectItem.id}>
          <label className='select-box__option' htmlFor={selectItem.id} aria-hidden>
            {selectItem.text}
          </label>
        </li>
      ))}
    </ul>
  </div>
);
