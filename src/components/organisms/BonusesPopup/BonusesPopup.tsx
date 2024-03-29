import { FC } from "react";
import { IBonusItem } from "types";
import { BonusItem } from "components/molecules/BonusItem";
import { SelectsContainer } from "components/molecules/SelectsContainer";
import { useToggleBonuses } from "./helpers";

import "./BonusesPopup.scss";

const bonusesItems: Array<IBonusItem> = [
  {
    imgName: "welcome",
    title: "Welcome bonus",
    description: "100% up to €500 +120 FreeSpins",
    extraClassName: "welcome",
  },
  {
    imgName: "first-deposit",
    title: "First Deposit Bonus",
    description: "100% up to €500 +120 FreeSpins",
    extraClassName: "first-deposit",
  },
  {
    imgName: "no-bonus",
    title: "No Bonus",
    description: "I do not want a Welcome bonus ",
    extraClassName: "no-bonus",
  },
];

export const BonusesPopup: FC = () => {
  const [activeBonus, showAllBonuses, activeBonusHandler, setShowAllBonuses] = useToggleBonuses();

  return (
    <div className='bonuses'>
      <span className='bonuses__title'>Deposit and play</span>

      {!showAllBonuses && (
        <>
          <BonusItem
            imgName={bonusesItems[activeBonus].imgName}
            title={bonusesItems[activeBonus].title}
            description={bonusesItems[activeBonus].description}
            extraClassName={bonusesItems[activeBonus].extraClassName}
            onClickHandler={() => setShowAllBonuses(true)}
          />

          <SelectsContainer />

          <button className='bonuses__start'>
            <span className='bonuses__start__bg'></span>
            <span className='bonuses__start__text'>Start with your 100% bonus</span>
          </button>
        </>
      )}

      {showAllBonuses &&
        bonusesItems.map(({ imgName, title, description, extraClassName }, index) => (
          <BonusItem
            key={imgName}
            imgName={imgName}
            title={title}
            description={description}
            extraClassName={extraClassName}
            isCheckboxVisible={showAllBonuses}
            checked={index === activeBonus}
            onClickHandler={activeBonusHandler}
            bonusId={index}
          />
        ))}
    </div>
  );
};
