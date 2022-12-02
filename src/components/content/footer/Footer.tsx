import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  width: 100%;
  height: 50px;
  border-top: 2px solid gray;
`;
const Footer: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return <StyledFooter>{children}</StyledFooter>;
};

export default Footer;
