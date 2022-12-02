import React, { FC } from "react";
import styled from "styled-components";
import Card from "./Card";

const StyledCards = styled.div<ICards>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => props.oneItem ? "flex-start" : "center"};
  padding: 8px;
  width: 100%;
  height: 100%;
  padding: 0 270px;
  overflow-y: auto;
`;
export interface ICards {
  cards: number[];
  setCards: (cards: number[]) => void;
  oneItem: boolean;
}
const Cards: FC<ICards> = (props) => {
  const { cards, setCards } = props;
  const handleRemove = (id: number) => {
    const filterArray = cards.filter((e) => {
      return e !== id;
    });
    setCards(filterArray);
    const data = JSON.stringify(filterArray);
    localStorage.setItem("cards", data);
  };
 
  return (
    <StyledCards {...props}>
      {cards.map((e) => (
        <Card key={e} card={e} handleRemove={() => handleRemove(e)}>
          {e}
        </Card>
      ))}
    </StyledCards>
  );
};

export default Cards;
