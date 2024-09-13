import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Footer from './containers/Footer'
import GlobalStyle from './styles'
import Pages from './routes'

function App() {

  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        <BrowserRouter>
          <Header />
          <Menu />
          {/* <Hero /> */}
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
