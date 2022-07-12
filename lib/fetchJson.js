import axios from 'axios';

export default async function fetchJson(input, init) {
  const response = await fetch(input, init);

  // const redirectHeader = {
  //   method: "GET",
  // };
  
  // const response = await axios('http://61.74.187.4:7100/?jwt=eyJhbGciOiJIUzI1NiIsImV4cCI6MTY1NzYyNTM3NjIwOX0.eyJlbWFpbCI6ImFAYS5jb20iLCJuYW1lIjoiYSJ9.8K7MA9StGsq8PFubJgnKG8K7poft-cLRvL1bRhVDCI0', redirectHeader);
  
  const data = await response.json();
  console.log(data)

  if (data.success) {
    return data;
  } else {
    console.log('fetch error')
    throw new Error(JSON.stringify(data));
  }
}