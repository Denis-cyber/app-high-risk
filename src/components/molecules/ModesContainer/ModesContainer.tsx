import { FC } from "react";
import { IMode } from "types";
import { Mode } from "components/atoms/Mode";

import "./ModesContainer.scss";

const modes: Array<IMode> = [
  {
    imgName: "game-slots",
    text: "Game slots",
    extraClassName: "game-slots",
  },
  {
    imgName: "live-casino",
    text: "Live casino",
    extraClassName: "live-casino",
  },
  {
    imgName: "promotions",
    text: "Promotions",
    extraClassName: "promotions",
    icon: <img className='mode__img__icon' src='./assets/images/modes/promotion-icon.svg' alt='prmtn-icon' />,
  },
  {
    imgName: "tournaments",
    text: "Tournaments",
    extraClassName: "tournaments",
  },
];

export const ModesContainer: FC = () => (
  <div className='modes'>
    {modes.map(({ imgName, text, extraClassName, icon }) => (
      <Mode key={imgName} imgName={imgName} text={text} extraClassName={extraClassName} icon={icon} />
    ))}
  </div>
);
