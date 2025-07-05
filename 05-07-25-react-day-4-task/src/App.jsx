import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [quotes, setQuotes] = useState([]);
  const url = "https://dummyjson.com/quotes";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuotes(data.quotes.slice(0, 10)))
  }, [])

  return (
    <div>
      {quotes.map((quote) => (
          <h1 key={quote.id}>"{quote.quote}"</h1>
        ))}
    </div>
  )
}

export default App
