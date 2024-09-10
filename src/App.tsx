import Header from './components/Header'
import Menu from './components/Menu'
import GlobalStyle from './styles'

function App() {

  return (
    <>
      <GlobalStyle />
      <div className="mainWrapper">
        <Header />
        <Menu />
      </div>
    </>
  )
}

export default App
