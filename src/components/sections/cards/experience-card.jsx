import React from "react";

import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  border-radius; 10px;
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    height: 40px
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 99};

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Company = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 90};

  @media svreen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 300;
  color: ${({ theme }) => theme.text_secondary + 80};

  @media svreen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 90};
  margin-bottom: 10px;

  @media svreen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.span`
  display: --webkit-box;
  max-width: 100%;
`;

const Skills = styled.div`
  width: 100$;
  display: flex;
  gap: 12px;
  margin-top: 10px;
`;

const Skill = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};

  @media svreen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ItemsWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          src={experience.company_logo}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
          }}
          alt="experience_img"
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(32, 92, 230, 0.15) 0px 3px 24px",
        backgroundColor: "rgba(17, 25, 40, 0.84)",
        border: "1px solid rgba(25, 255, 255, 0.125)",
        borderRadius: "5px",
      }}
      contentArrowStyle={{
        borderRight: "1px solid rgba(255, 255, 255, 0.3)",
      }}
      date={experience.date}
    >
      <Top>
        <Image
          src={experience?.image}
          width={40}
          height={40}
          style={{ borderRadius: "5px", objectFit: "cover" }}
        />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{experience.date}</Date>
        </Body>
      </Top>

      <Description>
        {experience?.desc && <Span>{experience.desc}</Span>}

        {experience?.skills && (
          <>
            <br />
            <Skills>
              <b>Skills</b>
              <ItemsWrapper>{experience.skills.join(` - `)}</ItemsWrapper>
            </Skills>
          </>
        )}
      </Description>
    </VerticalTimelineElement>
  );
};
