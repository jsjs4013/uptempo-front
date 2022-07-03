export default async function fetchJson(input, init) {
  const response = await fetch(input, init);
  console.log(init);
  // const response = await fetch('http://61.74.187.4:7100/auth/api/v1/mock', {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     name: "a",
  //     email: "a@a.com",
  //   }),
  // });

  // const response = await fetch('http://61.74.187.4:7100/api/v1/devices', init);

  // eyJhbGciOiJIUzI1NiIsImV4cCI6MTY1NjY2MDY2ODEyN30.eyJlbWFpbCI6ImFAYS5jb20iLCJuYW1lIjoiYSJ9.gcCjNUEJEGtPAnnoAmEdHr_AkIjytYq4AruRHuQIB90

  // const response = await fetch('http://61.74.187.4:7100/auth/api/v1/mock');

  // if the server replies, there's always some data in json
  // if there's a network error, it will throw at the previous line
  const data = await response.json();

  // response.ok is true when res.status is 2xx
  // https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
  if (data.ok) {
    return data;
  } else {
    return data;
  }
}