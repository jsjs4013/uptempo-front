import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '/lib/session'

import axios from 'axios';

export default withIronSessionApiRoute(login, sessionOptions)

async function login(req, res) {
  const { name, email } = await req.body;

  const swrHeader = {
    method: "POST",
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      "name": name,
      "email": email
    })
  };
  const redirectHeader = {
    method: "GET",
    withCredentials: true,
    cookie: req.headers.cookie,
  };
  
  try {
    const xsrftoken = await fetch('http://61.74.187.4:7100/auth/api/v1/mock', swrHeader);
    const xsrftokenJSON = await xsrftoken.json();
    const xsrftokenBody = {
      success: xsrftokenJSON.success,
      jwt: xsrftokenJSON.redirect.substring(xsrftokenJSON.redirect.indexOf('jwt=') + 4),
      isLoggedIn: true
    }
    req.session.xsrf = xsrftokenBody;
    await req.session.save();

    // Try redrict to regist jwt token
    try {
      const temp = await axios('http://61.74.187.4:7100/?jwt=eyJhbGciOiJIUzI1NiIsImV4cCI6MTY1NzYyNTM3NjIwOX0.eyJlbWFpbCI6ImFAYS5jb20iLCJuYW1lIjoiYSJ9.8K7MA9StGsq8PFubJgnKG8K7poft-cLRvL1bRhVDCI0', redirectHeader);
      const data = temp;
    } catch (error) {
      console.log(error.message)
      res.status(500).json({name: error.name, message: (error).message });
    }
    //////////////////////////////////

    res.json(xsrftokenBody);
  } catch (error) {
    res.status(500).json({ message: (error).message })
  }
}