const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const PLAYLIST_ID = 'PLNSx3wqy4NxC2EQb_NlcsNyHQNbLF85Jc';
const MAX_RESULTS = 20

export async function fetchPlaylistVideos() {
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${MAX_RESULTS}&playlistId=${PLAYLIST_ID}&key=${API_KEY}`

  try {
    const response = await fetch(url)
    const data = await response.json()

    if (data.error) {
      throw new Error(data.error.message)
    }

    return data.items.map(item => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url
    }))
  } catch (err) {
    console.error("YouTube API error:", err)
    throw err
  }
}
