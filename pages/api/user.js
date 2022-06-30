import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "/lib/session";

export default withIronSessionApiRoute(userRoute, sessionOptions);

async function userRoute(req, res) {
  if (req.session.xsrf) {
    res.json({...req.session.xsrf,});
  }
  else {
    res.json({Hi:'HIHIHI'})
  }
  // if (req.session.user) {
  //   res.json({
  //     ...req.session.user,
  //     isLoggedIn: true,
  //   });
  // } else {
  //   res.json({
  //     isLoggedIn: false,
  //     login: "",
  //     avatarUrl: "",
  //   });
  // }
}