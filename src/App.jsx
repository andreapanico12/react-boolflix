import { GlobalStateProvider } from "./context/GlobalContext"
import Header from "./components/Header";
import Main from "./components/Main";

function App() {

  return (
    <GlobalStateProvider>
      <Header/>
      <Main/>

    </GlobalStateProvider>
  )
}

export default App
