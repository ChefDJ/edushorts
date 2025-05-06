export default function SubmitVideoForm() {
  return (
    <form
      action="https://formspree.io/f/xqaqpbdk"
      method="POST"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '400px',
        margin: '2rem auto',
      }}
    >
      <label>
        Your Name:
        <input type="text" name="name" required />
      </label>

      <label>
        Video URL:
        <input type="url" name="videoUrl" required placeholder="https://youtube.com/..." />
      </label>

      <label>
        Optional Message:
        <textarea name="message" rows="4" />
      </label>

      <button type="submit">Submit Video</button>
    </form>
  )
}
  