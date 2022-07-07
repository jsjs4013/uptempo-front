export default async function fetchJson(input, init) {
  const response = await fetch(input, init);
  
  const data = await response.json();
  console.log(data)

  if (data.success) {
    return data;
  } else {
    console.log('fetch error')
    throw new Error(JSON.stringify(data));
  }
}