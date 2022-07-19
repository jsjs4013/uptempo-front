import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '/lib/session'
import axios from 'axios';

export default withIronSessionApiRoute(loginRoute, sessionOptions)

async function loginRoute(req, res) {
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
    
    res.json(xsrftokenBody);
  } catch (error) {
    res.status(500).json({ message: (error).message })
  }
}