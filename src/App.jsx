import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div>It works</div>
      </ThemeProvider>
    </>
  );
}

export default App;
