import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '/lib/session'

export default withIronSessionApiRoute(getxsrftoken, sessionOptions)

async function getxsrftoken(req, res) {
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
    req.session.xsrf = xsrftokenJSON;
    console.log('asdas');
    await req.session.save();

    // Try redrict to regist jwt token
    try {
      await fetch(xsrftokenJSON?.redirect);
    } catch (error) {
      console.log(error.message)
      res.status(500).json({name: error.name, message: (error).message });
    }
    //////////////////////////////////

    res.json(xsrftokenJSON);
  } catch (error) {
    console.log('as')
    res.status(500).json({ message: (error).message })
  }
}