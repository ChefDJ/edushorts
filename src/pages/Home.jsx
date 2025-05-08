// react import components and modules 
import { getUserSettings } from "../utils/settings"
import { useEffect, useState } from "react"
import { fetchPlaylistVideos } from "../api/youtube"
import VideoCard from "../components/VideoCard"
import SearchForm from "../components/SearchForm"
import VideoModal from "../components/VideoModal"
import { Link } from "react-router-dom"

// react component 
export default function Home() {
  //arrays for State management
  const settings = getUserSettings()
  // state hooks 
  const [videos, setVideos] = useState([])
  const [filteredVideos, setFilteredVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedVideoId, setSelectedVideoId] = useState(null)

  function clearSearch(e)
 {
  e.preventDefault();
  setFilteredVideos(videos)
 }
  useEffect(() => {
    async function loadVideos() {
      setLoading(true)
      try {
        const max = settings.maxVideos || 10
        // function to access API 
        const data = await fetchPlaylistVideos(max)
        setVideos(data.slice(0, max))
        setFilteredVideos(data.slice(0, max))
      } catch (err) {
        console.error("Error loading videos", err)
      } finally {
        setLoading(false)
      }
    }
    loadVideos()
  }, [settings.maxVideos])

  const handleSearch = (query) => {
    const filtered = videos.filter(v => v.title.toLowerCase().includes(query.toLowerCase()))
    setFilteredVideos(filtered)
  }

  return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
          <h1>"15 Minutes of Fame"</h1>
          <h2>15 minutes or less Short Films</h2>
          <h3>EduShorts - Video Site. Film Student's Video Archive!</h3>
          <SearchForm onDelete={clearSearch} onSearch={handleSearch} />
   {/* jsx syntax       */}
<Link
  to="/submit"
  style={{
    display: 'inline-block',
    padding: '0.5rem 1rem',
    backgroundColor: 'green',
    color: 'white',
    borderRadius: '5px',
    textDecoration: 'none',
    marginTop: '1rem'
  }}
>
🎬 Submit a Student Video 🎥
</Link>

<Link to="/settings" style={{
  display: "inline-block",
  marginBottom: "1rem",
  marginTop: "1rem",
  textDecoration: "none",
  color: "var(--text-color)",
  backgroundColor: "#007BFF",
  padding: "0.5rem 1rem",
  borderRadius: "8px"
}}>
  🎞️ Settings  
</Link>

      {loading ? <p>Loading...</p> : (
        <div style={{ display: "grid", width:"100%", marginTop: "20px", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
          {filteredVideos.map(video => (
            <VideoCard key={video.id} video={video} onClick={setSelectedVideoId} />
          ))}
        </div>
      )}
      <VideoModal videoId={selectedVideoId} onClose={() => setSelectedVideoId(null)} />
    </div>
  )
}

 