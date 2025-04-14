import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";

import HeroBgAnimation from "../HeroBgAnimation";
import {
  fadeAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import TypewriterComponent from "typewriter-effect";
import { StarsCanvas } from "../canvas/stars";

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
    align-items: center;
  }
`;

const HerRightInnerContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  order: 2;

  @media screen and (max-width: 960px) {
    justify-content: center;
    order: 1;
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
  font-size: 22px;
  line-height: 32px;
  margin-bottom: 42px;

  @media screen and (max-width: 960px) {
    text-align: center;
    font-size: 16px;
    line-height: 32px;
    margin-bottom: 42px;
  }
`;

const ResumeButton = styled.a`
  text-decoration: none;
  color: white;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 13px 20px;

  background: hasla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: --moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: --webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );

  box-shadow: -20px -20px 60px #1f2634, 20px 20px 60px #1f2634;
  border-radius: 10px;
  font-weight: 600;
  font-size: 20px;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s; ease-in-out
  }
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;

  @media screen and (max-width: 640px) {
    max-width: 300px;
  }
`;

const Herobg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const Hero = () => {
  return (
    <div id="about">
      <HeroContainer>
        <Herobg>
          <StarsCanvas />
          <HeroBgAnimation />
        </Herobg>

        <motion.div {...fadeAnimation}>
          <HerInnerContainr>
            <HerLeftInnerContainer>
              <motion.div {...{ ...headTextAnimation }}>
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
              </motion.div>

              <motion.div {...headContentAnimation}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>

              <ResumeButton href="#">Check resume</ResumeButton>
            </HerLeftInnerContainer>
            <HerRightInnerContainer>
              <motion.div {...headContentAnimation}>
                <Tilt>
                  <Img src="/assets/HerImage.png" alt="hero_image" />
                </Tilt>
              </motion.div>
            </HerRightInnerContainer>
          </HerInnerContainr>
        </motion.div>
      </HeroContainer>
    </div>
  );
};
