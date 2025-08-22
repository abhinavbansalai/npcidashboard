const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export async function searchCirculars(query) {
  const res = await fetch(`${API_URL}/search?q=${query}`);
  return await res.json();
}
