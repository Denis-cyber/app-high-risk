import { FC } from "react";
import { ModesContainer } from "components/molecules/ModesContainer";
import { BonusPopup } from "components/organisms/BonusPopup";

import "./StartPage.scss";

export const StartPage: FC = () => (
  <div className='container'>
    <BonusPopup />
    <ModesContainer />
  </div>
);
