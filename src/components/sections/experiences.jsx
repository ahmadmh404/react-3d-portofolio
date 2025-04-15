import React from "react";

import { experiences } from "../../data/constants";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { styled } from "styled-components";
import { ExperienceCard } from "./experience-card";

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
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 20px;
  text-align: center;

  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  color: ${({ theme }) => theme.text_secondary + 95};
  font-size: 22px;
  line-height: 32px;
  margin-bottom: 20px;

  @media screen and (max-width: 960px) {
    text-align: center;
    font-size: 16px;
    line-height: 32px;
  }
`;

export const Experiences = () => {
  return (
    <Container id="experiences">
      <Wrapper>
        <Title>Experiences</Title>
        <Desc>
          Currently leading frontend development for a social media platform,
          where I combine academic knowledge with hands-on project experience to
          deliver modern web solutions.
        </Desc>

        <VerticalTimeline>
          {experiences.map((experience, idx) => (
            <ExperienceCard experience={experience} key={idx} />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};
