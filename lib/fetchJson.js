import axios from 'axios';

export default async function fetchJson(input, init) {
  const response = await fetch(input, init);
  const data = await response.json();

  const redirectHeader = {
    method: "GET",
  };

  console.log(data);
  if (data.success) {
    console.log(input);
    // Try redrict to regist jwt token
    if (input == '/api/login') {
      try {
        console.log('hi');
        console.log(`http://61.74.187.4:7100/?jwt=${JSON.stringify(data?.jwt)}`);
        const temp = await axios(`http://61.74.187.4:7100/?jwt=eyJhbGciOiJIUzI1NiIsImV4cCI6MTY1NzgyMTg0NDUxMn0.eyJlbWFpbCI6ImFAYS5jb20iLCJuYW1lIjoiYSJ9.xsgC5TgkiPSKOPE_Mq59HjDqPwebcHF3XM_OL1wL5AA`, redirectHeader);
        const data2 = temp.headers;
        console.log(data2);
      } catch (error) {
        console.log(error.message)
        throw new Error({name: error.name, message: (error).message });
      }
    }

    return data;
  } else {
    console.log('fetch error')
    throw new Error(JSON.stringify(data));
  }
}