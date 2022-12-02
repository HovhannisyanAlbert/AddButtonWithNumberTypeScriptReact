import React from "react";
import styled from "styled-components";
import AboutInstruction from "./AboutInstruction";

const StyledInstruction = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  width: 11%;
  height: 100%;
`;
const Instruction = () => {
  return (
    <StyledInstruction>
      <AboutInstruction>
        Press the "add card" button to add the new Card. Use the "sort cards"
        button to sort the Cards by the increase. Press an X icon on the top
        right to delete them.
      </AboutInstruction>
    </StyledInstruction>
  );
};

export default Instruction;
