export default function ResultsList({ results }) {
  if (results.length === 0) return <p>No results</p>;

  return (
    <ul className="mt-4">
      {results.map((r, i) => (
        <li key={i} className="mb-4 border-b pb-2">
          <h2 className="font-bold">{r.title}</h2>
          <p className="text-sm text-gray-600">{r.date}</p>
          <p>{r.snippet}</p>
          <a href={r.url} className="text-blue-500 underline" target="_blank">
            View PDF
          </a>
        </li>
      ))}
    </ul>
  );
}
