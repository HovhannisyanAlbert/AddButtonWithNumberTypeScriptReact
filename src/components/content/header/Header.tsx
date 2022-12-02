import React, { FC } from "react";
import styled from "styled-components";
import AddCardButton from "./AddCardButton";
import SortCardButoon from "./SortCardButton";

const StyledHeader = styled.div`
  width: 100%;
  border-bottom: 2px solid gray;
`;
interface IHeader {
  handleAdd: () => void;
  handleSort: () => void;
}
const Header: FC<IHeader> = (props) => {
  const { handleAdd, handleSort } = props;
  return (
    <StyledHeader>
      <AddCardButton handleAdd={handleAdd}>add card</AddCardButton>
      <SortCardButoon handleSort={handleSort}>sort cards</SortCardButoon>
    </StyledHeader>
  );
};

export default Header;
