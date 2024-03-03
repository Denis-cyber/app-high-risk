import { FC } from "react";
import { ModesContainer } from "components/molecules/ModesContainer";
import { BonusesPopup } from "components/organisms/BonusesPopup";

import "./StartPage.scss";

export const StartPage: FC = () => (
  <div className='container'>
    <BonusesPopup />
    <ModesContainer />
  </div>
);
