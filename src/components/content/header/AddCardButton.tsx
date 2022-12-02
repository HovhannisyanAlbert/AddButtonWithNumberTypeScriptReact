import React, { FC, PropsWithChildren } from "react";
import { StyledButton } from "../../../storybook/Button/StyledButton";

interface IAddCard {
  handleAdd: () => void;
}

const AddCardButton: FC<PropsWithChildren<IAddCard>> = (props) => {
  const { children, handleAdd} = props;
  return <StyledButton onClick={handleAdd}>{children}</StyledButton>;
};

export default AddCardButton;
