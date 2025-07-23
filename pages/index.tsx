import { useState } from 'react'

export default function Home() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = async () => {
    const res = await fetch('/api/search?q=' + encodeURIComponent(query))
    const data = await res.json()
    setResults(data)
  }

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>故障查修資料庫</h1>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="輸入故障原因關鍵字" />
      <button onClick={handleSearch} style={{ marginLeft: 10 }}>搜尋</button>
      <ul>
        {results.map((item, i) => (
          <li key={i} style={{ marginTop: 20 }}>
            <p><strong>{item['Main Reson  (主要原因)']}</strong></p>
            <p>📍 廠區：{item['Plant Name (廠區)']} | 日期：{item['Date (日期)']}</p>
            <p>⚡ 立即處置：{item['immediate action (立即處置措施)']}</p>
            <p>🛡️ 永久預防：{item['long-term precautions (永久預防措施)']}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}