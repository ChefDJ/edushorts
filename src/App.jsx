import { useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import SubmitPage from './pages/SubmitPage'
import Home from "./pages/Home"
import Settings from "./pages/Settings"
import { getUserSettings } from "./utils/settings"

function App() {
  // react useEffect hook 
  useEffect(() => {
    const settings = getUserSettings()
    document.body.classList.toggle("dark", settings.theme === "dark")
  }, [])
  
  return (
    // react routes to define the main pages
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/submit" element={<SubmitPage />} />
      </Routes>
    </Router>
  )
}


export default App


