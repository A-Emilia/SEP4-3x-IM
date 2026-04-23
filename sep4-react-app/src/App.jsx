import { HashRouter, Routes, Route } from "react-router-dom"
import Main from "./pages/MainPage"
import ComfortZone from "./pages/ComfortZonePage"
import ViewData from "./pages/ViewDataPage"

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