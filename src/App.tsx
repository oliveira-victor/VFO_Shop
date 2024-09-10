import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import GlobalStyle from './styles'


function App() {

  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        <Header />
        <Menu />
        <Hero />
      </div>
    </>
  )
}

export default App
