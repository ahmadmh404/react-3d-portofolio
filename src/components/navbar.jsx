import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

const NavbarContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  positoin: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

const NavbarLogo = styled(LinkR)`
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
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  padding: 10px 20px;
  font-weight: 700;

  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLogo to={"/"}>
        <a>Logo</a>
      </NavbarLogo>

      <NavItems>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#projects">Project</NavLink>
        <NavLink href="#education">Education</NavLink>
      </NavItems>

      <ButtonContiner>
        <GithubButton>Github</GithubButton>
      </ButtonContiner>
    </NavbarContainer>
  );
};
