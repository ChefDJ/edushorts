import { useState } from "react"

export default function SearchForm({ onSearch,onDelete }) {
    const [query, setQuery] = useState("")
  
    const handleSubmit = (e) => {
      e.preventDefault()
      onSearch(query)
    }
  
    return (
      // form element 
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
        {/* input for user's query  */}
        <input
          type="search"
          value={query}
          // event to handle user's query 
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search videos...🎭"
          style={{
            padding: '0.5rem',
            width: '250px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <div style={{display: "flex", alignItems: "center", gap: "10px"}}> 
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
        { query.length > 0 &&<button
          type="button"

          onClick={(e)=>(setQuery(""), onDelete(e))}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          🔎 Clear
        </button>}</div>
      </form>
    )
  }
  