import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import Theme from './styles/theme'
import { MainContainer, GlobalStyle } from './styles/global'

import Header from './components/Header'
import RoutesApp from './routes'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <MainContainer>
          <Header />
        </MainContainer>
        <RoutesApp />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
