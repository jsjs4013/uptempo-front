export default async function fetchJson(input, init) {
  const response = await fetch(input, init);
  
  const data = await response.json();
  console.log(data.success)

  if (data.success) {
    return data;
  }
}