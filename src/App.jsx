import { ThemeProvider } from 'styled-components';
import { variables } from './assets/styles';



function App() {
  return (
    <>
      <ThemeProvider theme={variables}>
        <div>It works</div>
      </ThemeProvider>
    </>
  )
}

export default App
