import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Cards from "./cards/Cards";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const StyledContent = styled.div`
  width: 89%;
  height: 100%;
  border-right: 2px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledFooterText = styled.p`
  margin: 10px;
`;
const Content = () => {
  const [oneItem, setOneItem] = useState(false);
  const [cards, setCards] = useState<number[]>([]);
  let getCards = localStorage.getItem("cards");
  let getCardsParse = getCards === null ? "" : JSON.parse(getCards);
  useEffect(() => {
    if (getCardsParse !== "") {
      setCards(getCardsParse);
    }
  }, [getCardsParse]);
  useEffect(() => {
    if (cards.length > 1) {
      setOneItem(false);
    } else {
      setOneItem(true);
    }
  }, [cards]);
  const handleAdd = () => {
    const number = Math.floor(Math.random() * 999);
    if (cards.includes(number)) {
      return null;
    }
    const newArr = [...cards, number];

    setCards(newArr);
    const data = JSON.stringify(newArr);
    localStorage.setItem("cards", data);
  };
  const handleSort = () => {
    const sort = cards.sort(function (a, b) {
      return a - b;
    });
    setCards([...sort]);
    const data = JSON.stringify(sort);
    localStorage.setItem("cards", data);
  };

  return (
    <StyledContent>
      <Header handleSort={handleSort} handleAdd={handleAdd} />
      <Cards cards={cards} setCards={setCards} oneItem={oneItem} />
      <Footer>
        <StyledFooterText> footer </StyledFooterText>
      </Footer>
    </StyledContent>
  );
};

export default Content;
