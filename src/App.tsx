import {Routes, Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import { Store } from "./pages/Store"
import { Navbar } from "./components/Navbar"
import { ShoppingBagProvider } from "./context/ShoppingBasketContext"

function App() {
  return(
  <ShoppingBagProvider>
    <Navbar/>
    <Container className="mb-4">
      <Routes>
        <Route path = "/" element={<Store />} />
      </Routes>
    </Container>
  </ShoppingBagProvider>
  )
}

export default App
