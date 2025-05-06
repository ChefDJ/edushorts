import { useState } from "react"

export default function SearchForm({ onSearch }) {
    const [query, setQuery] = useState("")
  
    const handleSubmit = (e) => {
      e.preventDefault()
      onSearch(query)
    }
  
    return (
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          marginTop: '1rem',
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search videos...🎭"
          style={{
            padding: '0.5rem',
            width: '250px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          🔎 Search
        </button>
      </form>
    )
  }
  