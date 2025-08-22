import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import ResultsList from "./components/ResultsList";
import { searchCirculars } from "./api";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (q) => {
    setQuery(q);
    if (q.length > 0) {
      const data = await searchCirculars(q);
      setResults(data.results);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">NPCI Circulars Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      <ResultsList results={results} />
    </div>
  );
}
