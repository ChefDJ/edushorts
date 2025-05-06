import { getUserSettings } from "../utils/settings"

export default function VideoModal({ videoId, onClose }) {
  const settings = getUserSettings()
  if (!videoId) return null

  return (
    <div style={modalOverlay}>
      <div style={modalContent}>
        <button style={closeButton} onClick={onClose}>✖</button>
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=${settings.autoplay ? 1 : 0}`}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
const modalOverlay = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  }
  
  const modalContent = {
    backgroundColor: "var(--video-bg-color)",
    color: "var(--text-color)",
    padding: "1rem",
    borderRadius: "10px",
    width: "90%",
    maxWidth: "700px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
    position: "relative",
  }
  
  const closeButton = {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "transparent",
    border: "none",
    color: "var(--text-color)",
    fontSize: "1.5rem",
    cursor: "pointer",
  }
  