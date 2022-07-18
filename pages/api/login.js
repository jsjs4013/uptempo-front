import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '/lib/session'

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
    console.log('This')
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
      await fetch(xsrftokenJSON?.redirect);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({name: error.name, message: (error).message });
    }
    //////////////////////////////////

    res.setHeader('Set-Cookie', ["ssid=eyJqd3QiOnsiZW1haWwiOiJhQGEuY29tIiwibmFtZSI6ImEifX0=", "ssid.sig=srHjCVHrrzEpeQ1Qm4DpOB4qUjo"]);
    await req.session.save();
    
    res.json(xsrftokenBody);
  } catch (error) {
    res.status(500).json({ message: (error).message })
  }
}