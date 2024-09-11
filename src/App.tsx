import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Footer from './containers/Footer'
import Home from './containers/Home'
import GlobalStyle from './styles'


function App() {

  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        <Header />
        <Menu />
        <Hero />
        <main className='container'>
          <Home />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
