import React, { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

const StyledInstructionText = styled.p`
    text-align: left;
    font-size:18px;
    font-weight:700;
    padding:5px;
`
const AboutInstruction:FC <PropsWithChildren> = (props) => {
    const {children} = props 
  return (
    <StyledInstructionText> {children}</StyledInstructionText>
  )
}

export default AboutInstruction