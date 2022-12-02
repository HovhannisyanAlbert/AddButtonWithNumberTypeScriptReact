import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";
const StyledCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28rem;
  height: 15rem;
  border: 2px solid;
  position: relative;
  font-size: 35px;
  font-weight: bold;
  margin: 15px;
`;
const StyledIcon = styled.img`
  position: absolute;
  right: 13px;
  top: 2px;
  height: 20px;
  cursor: pointer;
`;
interface ICard {
  card: number;
  handleRemove: (id: number) => void;
}
const Card: FC<PropsWithChildren<ICard>> = (props) => {
  const { children, card, handleRemove } = props;

  return (
    <StyledCard>
      <StyledIcon
        src={require("../../../image/icon/close.svg").default}
        onClick={() => handleRemove(card)}
      />
      {children}
    </StyledCard>
  );
};

export default Card;
