import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '/lib/session'

import axios from 'axios';

export default withIronSessionApiRoute(login, sessionOptions)

async function login(req, res) {
  const { name, email } = await req.body;

  const swrHeader = {
    method: "POST",
    url: 'http://61.74.187.4:7100/auth/api/v1/mock',
    headers: {
      'Content-type': 'application/json',
    },
    data: JSON.stringify({
      "name": name,
      "email": email
    })
  };
  const redirectHeader = {
    method: "GET",
  };
  
  try {
    const xsrftoken = await axios(swrHeader);
    const xsrftokenJSON = xsrftoken.data;
    const xsrftokenBody = {
      success: xsrftokenJSON.success,
      jwt: xsrftokenJSON.redirect.substring(xsrftokenJSON.redirect.indexOf('jwt=') + 4),
      isLoggedIn: true
    }
    req.session.xsrf = xsrftokenBody;

    // Try redrict to regist jwt token
    try {
      const temp = await axios('http://61.74.187.4:7100/?jwt=' + xsrftokenBody.jwt);
    } catch (error) {
      res.status(500).json({name: error.name, message: (error).message });
    }
    ////////////////////////////////

    // res.setHeader('Set-Cookie', ["ssid=eyJqd3QiOnsiZW1haWwiOiJhQGEuY29tIiwibmFtZSI6ImFzZCJ9LCJjc3JmU2VjcmV0IjoiWXp6THIxT2FzZHdBZkowdVhqU25oTGstIn0%3D", "ssid.sig=AlmNw8wzfRoPdyfTpj1TqZxxJag"]);
    await req.session.save();
    res.json(xsrftokenBody);
  } catch (error) {
    res.status(500).json({ message: (error).message })
  }
}