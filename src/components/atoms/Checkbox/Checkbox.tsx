import { FC } from "react";

import "./Checkbox.scss";

export const Checkbox: FC<{ checked: boolean }> = ({ checked }) => (
  <input className='checkbox' type='checkbox' checked={checked} readOnly />
);
