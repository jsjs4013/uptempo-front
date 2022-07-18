import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '/lib/session'

export default withIronSessionApiRoute(logoutRoute, sessionOptions)

function logoutRoute(req, res) {
    res.setHeader('Set-Cookie', `ssid=; path=/; expires=-1`)
    req.session.destroy();
    res.json({ success: true, isLoggedIn: false });
}