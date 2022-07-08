import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '/lib/session'

export default withIronSessionApiRoute(login, sessionOptions)

function logout(req, res) {
    req.session.destroy();
    res.json({ isLoggedIn: false });
}