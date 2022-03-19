import AppLetras from "./componentes/AppLetras"
import {LetrasProvider} from './context/LetrasProvider'

function App() {

  return (
    <LetrasProvider>
      <AppLetras />
    </LetrasProvider>
  )
}

export default App
