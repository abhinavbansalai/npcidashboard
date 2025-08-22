import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        className="border p-2 rounded w-2/3"
        placeholder="Search circulars..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="ml-2 bg-blue-600 text-white p-2 rounded">
        Search
      </button>
    </form>
  );
}
