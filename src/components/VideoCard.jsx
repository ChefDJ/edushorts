export default function VideoCard({ video, onClick }) {
    return (
      <div
        onClick={() => onClick(video.id)}
        style={{
          cursor: "pointer",
          backgroundColor: "var(--card-bg, #f0f0f0)",
          color: "var(--text-color)",
          padding: "1rem",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          transition: "transform 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <img
          src={video.thumbnail}
          alt={video.title}
          style={{
            width: "100%",
            borderRadius: "8px",
            marginBottom: "0.5rem"
          }}
        />
        <h3 style={{ fontSize: "1rem" }}>{video.title}</h3>
      </div>
    )
  }
  