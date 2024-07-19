import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Cv from "./pages/Cv"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/cv" element={ <Cv /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  )
}

export default App
