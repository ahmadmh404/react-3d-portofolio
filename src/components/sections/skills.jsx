import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";

import { Tilt } from "react-tilt";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  postion: relative;
  padding: 0 20px;
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

const SkillsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  gap: 50px;
  margin-top: 20px;

  @media screen and (max-width: 869px) {
    grid-template-columns: 1fr;
  }
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0 4px 24px;
  border-radius: 15px;
  padding: 18px 36px;

  @media screen and (max-width: 879px) {
    padding: 10px 36px;
  }

  @media screen and (max-width: 500px) {
    max-width: 350px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.div`
  font-size: 20px;
  font-weght: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media screen and (max-width: 768px) {
    font-size: 14p;
    padding: 8px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.text_primary};
`;

const Skills = () => {
  return (
    <div id="skills">
      <Container>
        <Wrapper>
          <Title>Skills</Title>
          <Desc>
            Here are some of my skills on which I have been working on for the
            last 3 years.
          </Desc>

          <SkillsContainer>
            {skills.map((skill, idx) => (
              <Tilt key={idx}>
                <Skill>
                  <SkillTitle>{skill.title}</SkillTitle>
                  <SkillList>
                    {skill.skills.map((s, idx) => (
                      <SkillItem key={idx}>
                        <SkillImage src={s.image} />
                        {s.name}
                      </SkillItem>
                    ))}
                  </SkillList>
                </Skill>
              </Tilt>
            ))}
          </SkillsContainer>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Skills;
