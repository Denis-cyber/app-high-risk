import { FC } from "react";
import classNames from "classnames";
import { IMode } from "types";

import "./Mode.scss";

interface IModeProps extends IMode {}

export const Mode: FC<IModeProps> = ({ imgName, text, extraClassName, icon }) => (
  <div className={classNames("mode", extraClassName)}>
    <div className='mode__img'>
      <img src={`./assets/images/modes/${imgName}.svg`} alt={imgName} />
      {icon}
    </div>
    <span>{text}</span>
  </div>
);
