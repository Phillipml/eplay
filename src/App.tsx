import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Theme from './styles/theme'
import { MainContainer, GlobalStyle } from './styles/global'

import Header from './components/Header'
import RoutesApp from './routes'
import Footer from './components/Footer/Footer'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
