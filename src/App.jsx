import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/sections/hero";

import "./index.css";
import Skills from "./components/sections/skills";
import { Experiences } from "./components/sections/experiences";

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

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Container>
          <Navbar />
          <Body>
            <Hero />
            <Skills />
            <Experiences />
          </Body>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
