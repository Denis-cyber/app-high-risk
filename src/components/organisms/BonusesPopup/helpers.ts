import { Dispatch, SetStateAction, useState } from "react";

export const useToggleBonuses = (): [
  number,
  boolean,
  (event: React.MouseEvent<HTMLElement>) => void,
  Dispatch<SetStateAction<boolean>>
] => {
  const [activeBonus, setActiveBonus] = useState<number>(0);
  const [showAllBonuses, setShowAllBonuses] = useState<boolean>(false);

  const activeBonusHandler = (event: React.MouseEvent<HTMLElement>) => {
    if (!event.currentTarget.dataset.id) {
      return;
    }

    const id = +event.currentTarget.dataset.id;

    if (id === activeBonus) {
      setShowAllBonuses(false);
      return;
    }

    setActiveBonus(id);
    setShowAllBonuses(false);
  };

  return [activeBonus, showAllBonuses, activeBonusHandler, setShowAllBonuses];
};
