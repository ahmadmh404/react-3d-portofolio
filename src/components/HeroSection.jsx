import React from "react";
import styled from "styled-components";
import { Bio } from "../data/constants";

import TypewriterComponent from "typewriter-effect";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;

  @media screen and (max-width: 969px) {
    padding: 66px 24px;
  }

  @media screen and (max-width: 768px) {
    padding: 32px 24px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HerInnerContainr = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 860px) {
    flex-direction: column;
  }
`;

const HerLeftInnerContainer = styled.div`
  width: 100%;
  order: 1;

  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: cneter;
  }
`;

const HerRightInnerContainer = styled.div`
  width: 100%;
  order: 2;

  @media screen and (max-width: 960px) {
    order: 1;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: cneter;
    align-items: cneter;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  line-height: 68px;
  color: ${({ theme }) => theme.text_primary};

  @media screen and (max-width: 960px) {
    justify-content: center;
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

const SubTitle = styled.div`
  color: ${({ theme }) => theme.text_primary + 95};
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 42px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }
`;

const ResumeButton = styled.div``;

export const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HerInnerContainr>
          <HerLeftInnerContainer>
            <Title>
              Hi, I am <br />
              {Bio.name}
            </Title>

            <TextLoop>
              I am a
              <Span>
                <TypewriterComponent
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>

            <SubTitle>{Bio.description}</SubTitle>

            <ResumeButton></ResumeButton>
          </HerLeftInnerContainer>
          <HerRightInnerContainer>Right</HerRightInnerContainer>
        </HerInnerContainr>
      </HeroContainer>
    </div>
  );
};
