import styled from "styled-components";
import { Bio } from "../data/constants";

import { Link as LinkR } from "react-router-dom";
import { MenuRounded } from "@mui/icons-material";
import { useState } from "react";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

const NavbarContainer = styled.div`
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavbarLogo = styled(LinkR)`
  width: 80%;
  weight: 800;
  display: flex;
  align-items: center;
  padding: 0 10px;
  text-decoration: none;
  color: white;
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  font-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  list-style: none;
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContiner = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  padding: 10px 20px;
  font-weight: 700;
  text-decoration: none;
`;

const MobileICon = styled.button`
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.bg};
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  padding: 12px 40px 24px;
  background: ${({ theme }) => theme.card_light + 99};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 16px;
  list-style: none;
  position: absolute;
  top: 80px;
  right: 0;
  transition: all 0.4s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
  transform: ${({ isOpen }) => {
    return isOpen ? "translateY(0)" : "translateY(-1000px)";
  }};
`;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavbarContainer>
        <NavbarLogo to={"/"}>
          <img src="/assets/github.png" width={40} alt="" />
        </NavbarLogo>

        <MobileICon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileICon>

        <MobileMenu isOpen={isOpen}>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Project</NavLink>
          <NavLink href="#education">Education</NavLink>
          <GithubButton
            style={{ padding: "0px" }}
            href={Bio.github}
            target="_blank"
          >
            <img src="/assets/github.png" width={26} alt="" />
          </GithubButton>
        </MobileMenu>

        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Project</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>

        <ButtonContiner>
          <GithubButton href={Bio.github} target="_blank">
            <img src="/assets/github.png" width={26} alt="" />
          </GithubButton>
        </ButtonContiner>
      </NavbarContainer>
    </Nav>
  );
};
