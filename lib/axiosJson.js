import axios from 'axios';

export default async function axiosJson(input, init) {
    const swrHeader = {
        url: input,
        method: init.method,
        headers: init.headers,
        data: init.body,
        withCredentials: true,
      };
    const response = await axios(swrHeader);
    const data = response;
    console.log(data.headers);

    // console.log(data);
    if (data.data.success) {
        return data.data;
    } else {
        console.log('fetch error')
        throw new Error(JSON.stringify(data));
    }
}