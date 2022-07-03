import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '/lib/session'

export default withIronSessionApiRoute(getxsrftoken, sessionOptions)

async function getxsrftoken(req, res) {
  const { Authorization } = await req.body;

  const swrHeader = {
    method: "GET",
    headers: {
      'Content-type': 'application/json',
      'Authorization' : Authorization
    }
  };
  
  try {
    const xsrftoken = await fetch('61.74.187.4:7100/api/v1/devices', swrHeader);

    req.session.xsrf = xsrftoken;
    await req.session.save();
    res.json(xsrftoken);
  } catch (error) {
    res.status(500).json({ message: (error).message })
  }
}