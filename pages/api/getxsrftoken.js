import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '/lib/session'

import axios from 'axios';
import { useEffect } from 'react';

export default withIronSessionApiRoute(getxsrftoken, sessionOptions)

async function getxsrftoken(req, res) {
  const { Authorization } = await req.body;

  const swrHeader = {
    method: "POST",
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      "name":"a",
      "email":"a@a.com"
    })
  };
  
  try {
    const xsrftoken = await fetch('http://61.74.187.4:7100/auth/api/v1/mock', swrHeader);
    
    const xsrftokenJSON = await xsrftoken.json();
    req.session.xsrf = xsrftokenJSON;
    await req.session.save();
    res.json(xsrftokenJSON);
  } catch (error) {
    res.status(500).json({ message: (error).message })
  }
}