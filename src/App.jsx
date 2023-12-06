import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Create } from "./pages/Create"
import { Router } from "./shared/constans/router"

function App() {

  return (
    <>
      <Routes>
        <Route path={Router.HOME} element={<Home />} />
        <Route path={Router.CREATE} element={<Create />} />
      </Routes>
    </>
  )
}

export default App
