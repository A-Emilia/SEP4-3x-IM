import { HashRouter, Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import ComfortZone from "./pages/ComfortZone"
import ViewData from "./pages/ViewData"

function App() {
  return (
    <HashRouter>
        <Routes>
          <Route path="" element={<Main />} />
          <Route path="comfort-zone" element={<ComfortZone />} />
          <Route path="view-data" element={<ViewData />} />
        </Routes>
      </HashRouter>
  )
}

export default App;