import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/sections/hero";
import { Skills } from "./components/sections/skills";
import { Experiences } from "./components/sections/experiences";
import { Education } from "./components/sections/education";
import { StyledStarsCanvas } from "./components/canvas/stars";

import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import "./index.css";
import { Projects } from "./components/sections/projects";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <StyledStarsCanvas />
          <div>
            <Hero />
            <Wrapper>
              <Skills />
              <Experiences />
            </Wrapper>
            <Projects />
            <Wrapper>
              <Education />
            </Wrapper>
          </div>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
