import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '/lib/session'

export default withIronSessionApiRoute(logout, sessionOptions)

function logout(req, res) {
    req.session.destroy();
    res.json({ success: true, isLoggedIn: false });
}