import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Settings() {
  const [settings, setSettings] = useState({
    theme: "light",
    maxVideos: 10,
    autoplay: true,
  })
  const navigate = useNavigate()

  useEffect(() => {
    const saved = localStorage.getItem("userSettings")
    if (saved) {
      setSettings(JSON.parse(saved))
    }
  }, [])

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target
    setSettings(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSave = () => {
    localStorage.setItem("userSettings", JSON.stringify(settings))
    document.body.classList.toggle("dark", settings.theme === "dark")
    alert("Settings saved successfully!")
    navigate("/") // Redirect to Home page
  }
  

  return (
    <div style={{ maxWidth: "600px",paddingTop: "40px", margin: "2rem auto" }}>
      <h2 style={{fontSize: "30px"}}>Settings</h2>

      <form onSubmit={(e) => { e.preventDefault(); handleSave() }}>
        {/* Theme */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Theme: </label>
          <select name="theme" value={settings.theme} onChange={handleChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        {/* Max videos */}
        <div style={{ marginBottom: "1rem" }}>
          <label>Max Videos to Display: </label>
          <input
            type="number"
            name="maxVideos"
            min="1"
            max="50"
            value={settings.maxVideos}
            onChange={handleChange}
          />
        </div>

        {/* Autoplay */}
        <div style={{ marginBottom: "1rem" }}>
          <label>
            <input
              type="checkbox"
              name="autoplay"
              checked={settings.autoplay}
              onChange={handleChange}
            />
            Enable Autoplay
          </label>
        </div>

        <button type="submit">Save Settings</button>
      </form>
    </div>
  )
}
