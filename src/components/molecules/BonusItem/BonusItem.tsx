import { FC } from "react";
import classNames from "classnames";
import { IBonusItem } from "types";
import { Checkbox } from "components/atoms/Checkbox";

import "./BonusItem.scss";

interface IBonusItemProps extends IBonusItem {
  checked?: boolean;
  isCheckboxVisible?: boolean;
  onClickHandler: (event: React.MouseEvent<HTMLElement>) => void;
  bonusId?: number;
}

export const BonusItem: FC<IBonusItemProps> = ({
  imgName,
  title,
  description,
  extraClassName,
  checked = false,
  isCheckboxVisible = false,
  onClickHandler,
  bonusId,
}) => (
  <button className='bonus'>
    <span className={classNames("bonus__bg", extraClassName)}></span>
    <div className='bonus__content' onClick={onClickHandler} data-id={bonusId}>
      <div className='bonus__content__image'>
        <img src={`./assets/images/bonus/${imgName}.png`} alt={imgName} />
      </div>

      <div className='bonus__content__text'>
        <p className='bonus__content__text__title'>{title}</p>
        <p className='bonus__content__text__description'>{description}</p>
      </div>

      <div className='bonus__content__toggle'>
        {isCheckboxVisible ? (
          <Checkbox checked={checked} />
        ) : (
          <>
            <img
              className='bonus__content__toggle__line'
              src='./assets/images/bonus/vertical-line.png'
              alt='vertical-line'
            />
            <div className='bonus__content__toggle__vector'>
              <img src='./assets/images/bonus/vector.png' alt='vector' />
            </div>
          </>
        )}
      </div>
    </div>
  </button>
);
