export const defaultSettings = {
    theme: "light",
    maxVideos: 10,
    autoplay: true,
  }
  
  export function getUserSettings() {
    const stored = localStorage.getItem("userSettings")
    return stored ? { ...defaultSettings, ...JSON.parse(stored) } : defaultSettings
  }
  const handleSave = () => {
    localStorage.setItem("userSettings", JSON.stringify(settings))
    document.body.classList.toggle("dark", settings.theme === "dark")
    alert("Settings saved successfully!")
  }
    