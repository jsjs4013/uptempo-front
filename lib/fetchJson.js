export default async function fetchJson(input, init) {
  const response = await fetch(input, init);
  
  const data = await response.json();

  if (data.success) {
    return data;
  } else {
    throw new Error(JSON.stringify(data));
  }
}