import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/navbar";

import "./index.css";
import { HeroSection } from "./components/HeroSection.jsx";

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
            <HeroSection />
          </Body>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
