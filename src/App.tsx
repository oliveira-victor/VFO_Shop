import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './containers/Footer'
import GlobalStyle from './styles'
import Pages from './routes'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        <BrowserRouter>
        <ScrollToTop />
          <Header />
          <Menu />
          <main>
            <Pages />
          </main>
        </BrowserRouter>
        <Footer />
      </div >
    </>
  )
}

export default App
