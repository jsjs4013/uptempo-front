import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '/lib/session'
import axios from 'axios';

export default withIronSessionApiRoute(loginRoute, sessionOptions)

async function loginRoute(req, res) {
  const { name, email } = await req.body;

  const swrHeader = {
    url: 'http://61.74.187.4:7100/auth/api/v1/mock',
    method: "POST",
    headers: {
      'Content-type': 'application/json',
    },
    data: {
      "name": name,
      "email": email
    }
  };
  
  try {
    const xsrftoken = await axios(swrHeader);
    const xsrftokenJSON = xsrftoken;
    const xsrftokenBody = {
      success: xsrftokenJSON.data.success,
      jwt: xsrftokenJSON.data.redirect.substring(xsrftokenJSON.data.redirect.indexOf('jwt=') + 4),
      isLoggedIn: true,
      useremail: email,
      device: false
    }
    req.session.xsrf = xsrftokenBody;
    // console.log(xsrftokenBody);
    await req.session.save();
    
    res.json(xsrftokenBody);
  } catch (error) {
    res.status(500).json({ message: (error).message })
  }
}