import { FC } from "react";
import { Select } from "components/atoms/Select";
import { countries, currencies } from "./mockDataSelects";

import "./SelectsContainer.scss";

export const SelectsContainer: FC = () => (
  <div className='selects'>
    <Select selectItems={countries} name='Countries' />
    <Select selectItems={currencies} name='Currencies' />
  </div>
);
