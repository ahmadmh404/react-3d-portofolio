import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/sections/hero";
import { Skills } from "./components/sections/skills";
import { Experiences } from "./components/sections/experiences";
import { Education } from "./components/sections/education";
import { StarsCanvas } from "./components/canvas/stars";

import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import "./index.css";
import { Projects } from "./components/sections/projects";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  flex: 1;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  width: 100%;
  background: linear-gradient(
    30.37deg,
    rgba(204, 0, 137, 0.15) 0%,
    rgba(172, 93, 166, 0) 100%
  );

  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Container>
          <Navbar />
          <Body>
            <StarsCanvas />
            <div>
              <Hero />
              <StarsCanvas />
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
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
