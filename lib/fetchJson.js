export default async function fetchJson(input, init) {
  console.log('Hi')
  const response = await fetch(input, init);
  console.log('Hi2')

  // if the server replies, there's always some data in json
  // if there's a network error, it will throw at the previous line
  const data = await response.json();
  console.log('Hi3')

  // response.ok is true when res.status is 2xx
  // https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
  if (response.ok) {
    return data;
  }
}