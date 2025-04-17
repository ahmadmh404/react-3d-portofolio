import React, { useState } from "react";

import { styled } from "styled-components";
import { projects } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  postion: relative;
  padding: 50px 20px;
  z-index: 1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  postion: relative;
  width: 100%;
  max-width: 1100px;
  gap: 12px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 52px;
  color: ${({ theme }) => theme.text_primary};
  margin-top: 20px;
  text-align: center;

  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  color: ${({ theme }) => theme.text_primary + 95};
  font-size: 22px;
  line-height: 32px;
  margin-bottom: 20px;

  @media screen and (max-width: 960px) {
    text-align: center;
    font-size: 16px;
    line-height: 32px;
  }
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 2px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;

  @media screen and (max-width: 786px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.button`
  color: inherit;
  background: inherit;
  padding: 12px 18px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.primary + 20};
  }

  @media screen and (max-width: 768px) {
    padding: 8px 12px;
    border-radius: 4px;
  }

  ${({ active, theme }) =>
    active &&
    `
        background: ${theme.primary + 20}
    `}
`;

const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const CardsContainer = styled.div``;

export const Projects = () => {
  const [toggle, setToggle] = useState("ALL");

  const onCLick = (filter) => {
    if (toggle === filter) setToggle("ALL");
    else setToggle(filter);
  };

  return (
    <div id="projects">
      <Container>
        <Wrapper>
          <Title>Projects</Title>
          <Desc>
            I have wokred on a wide range of projects. from small scale to
            large-scale app. Here are some of my projects:
          </Desc>

          <ToggleButtonGroup>
            <ToggleButton
              active={toggle === "ALL"}
              onClick={() => onCLick("ALL")}
            >
              All
            </ToggleButton>
            <Divider />
            <ToggleButton
              active={toggle === "WEB"}
              onClick={() => onCLick("WEB")}
            >
              Web Apps
            </ToggleButton>
            <Divider />

            <ToggleButton
              active={toggle === "SASS"}
              onClick={() => onCLick("SASS")}
            >
              SASS Apps
            </ToggleButton>
          </ToggleButtonGroup>

          <CardsContainer>
            {toggle === "ALL" && projects.map((project) => <>hi</>)}
          </CardsContainer>
        </Wrapper>
      </Container>
    </div>
  );
};
