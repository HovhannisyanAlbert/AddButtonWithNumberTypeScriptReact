import React, { FC, PropsWithChildren } from "react";
import { StyledButton } from "../../../storybook/Button/StyledButton";

interface ISortCard {
  handleSort: () => void;
}

const SortCardButoon: FC<PropsWithChildren<ISortCard>> = (props) => {
  const { children, handleSort } = props;
  return <StyledButton onClick={handleSort}>{children}</StyledButton>;
};

export default SortCardButoon;
