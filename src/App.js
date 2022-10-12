import { ThemeProvider } from "styled-components";
import { theme } from "./main-styles/theme";
import { GLobalStyle } from "./main-styles/GlobalStyle";
import Header from "./components/header/Header/Header";
import Intro from "./components/intro/Intro";
import Works from "./components/works/Works/Works";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GLobalStyle />
      <BrowserRouter>
        <Header />
        <Intro />
        <Works />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
