import React, { FC, PropsWithChildren } from "react";
import styled, { createGlobalStyle } from "styled-components";

const StyleGlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
`;
const StyledMain = styled.div`
  display:flex;
  width: 100%;
  height: 100vh;
`;
const Main: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return (
    <>
      <StyledMain>{children}</StyledMain>
      <StyleGlobalStyle />
    </>
  );
};

export default Main;
