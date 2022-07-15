import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "/lib/session";

export default withIronSessionApiRoute(userRoute, sessionOptions);

async function userRoute(req, res) {
  if (req.session.xsrf) {
    res.json({
      ...req.session.xsrf
    });
  } else {
    res.json({
      success: true,
      isLoggedIn: false,
    });
  }
}