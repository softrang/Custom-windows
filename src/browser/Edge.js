import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";

const Edge = () => {
const apiKey = "AIzaSyBHfmT7Mu3E_N9dycL6JvCy55NW5XryvlQ"
const searchEngineId="b0e595cc844b341d0"
const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${encodeURIComponent(query)}`
      );
      const data = await response.json();
      setResults(data.items || []);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="edge w-8/12 h-[80vh] bg-zinc-700 absolute bottom-12 left-1/2 transform -translate-x-1/2">
  


<div className='w-full h-full'>
    <div className='w-full flex items-center justify-center py-2 text-zinc-200 relative '> 
      <h1 className='mr-10'>Google CSE</h1>
      <input className='border border-zinc-50 bg-zinc-600 rounded-xl px-2 text-white outline-0 w-1/2'
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter search google cse"
      />
      <button className='ml-2' onClick={handleSearch}>Search</button>

      <button className='absolute  right-0 w-[3vw] h-[3vw] text-2xl close'><IoClose /></button>
      </div>

      {loading && <p className='w-full bg-zinc-200 text-black'>Loading...</p>}

      <div className='w-full h-full bg-zinc-200 text-black overflow-y-auto p-5'>
        {results.map((item, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h2 className='text-sky-700'>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </h2>
            <p>{item.snippet}</p>
            <a className='text-sky-800' href={item.link} target="_blank" rel="noopener noreferrer">
              {item.link}
            </a>
          </div>
        ))}
      </div>
    </div>
</div>

  )
}

export default Edge
