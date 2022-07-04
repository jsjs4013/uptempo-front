import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '/lib/session'

import axios from 'axios';
import { useEffect } from 'react';

export default withIronSessionApiRoute(getxsrftoken, sessionOptions)

async function getxsrftoken(req, res) {
  const { Authorization } = await req.body;

  const swrHeader = {
    method: "GET",
    headers: {
      'Content-type': 'application/json',
      'Authorization' : 'Bearer 985a2341152b46a09eb2c6afa709dd1748956a2c7afc4478b0dfc19fe502b14e'
    }
  };

  // const swrHeader = {
  //   method: "POST",
  //   headers: {
  //     'Content-type': 'application/json',
  //   },
  //   body: JSON.stringify({name:"a", email:"a@s.com"})
  // };
  
  try {
    // const xsrftoken = await fetch('http://61.74.187.4:7100/api/v1/devices', swrHeader);
    const xsrftoken = await axios.get('http://61.74.187.4:7100/api/v1/devices', swrHeader);
    
    const xsrftokenJSON = xsrftoken.data;
    req.session.xsrf = xsrftokenJSON;
    await req.session.save();
    res.json(xsrftokenJSON);
  } catch (error) {
    res.status(500).json({ message: (error).message })
  }
}