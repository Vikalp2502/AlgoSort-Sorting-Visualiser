import React from "react";
import styled from "styled-components";

import ArrayInput from "../ArrayInput";
import LengthInput from "../LengthInput";
import SortInput from "../SortInput";
import SpeedInput from "../SpeedInput";
import StartButton from "../StartButton";

const Wrapper = styled.div`
  width: 100%;
  height: 19.5vh;
  background: var(--sidebar);
  display: flex;
`;
const TitleWrapper = styled.div`
  width: 20%;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto 3% auto 3%;
`;
const Title = styled.p`
  font-size: 2vw;
  letter-spacing: 2px;
  color: var(--bar);
  font-weight: bold;
  font-family: Open Sans;
`;

const Sidebar: React.FC<{}> = () => (
  <Wrapper>
    <TitleWrapper>
      <Title>AlgoSort - Sorting Visualiser</Title>
    </TitleWrapper>
    <LengthInput />
    <ArrayInput />
    <SortInput />
    <SpeedInput />
    <StartButton />
  </Wrapper>
);
export default Sidebar;
