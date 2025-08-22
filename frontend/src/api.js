import API_BASE_URL from "./config";

export async function fetchResults(query) {
  const response = await fetch(`${API_BASE_URL}/search?query=${query}`);
  return response.json();
}
