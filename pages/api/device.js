import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "/lib/session";

export default withIronSessionApiRoute(deviceRoute, sessionOptions);

async function deviceRoute(req, res) {
    const swrHeader = {
        method: "GET",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'jwt': 'eyJhbGciOiJIUzI1NiIsImV4cCI6MTY1NzYxNDI4OTIwNn0.eyJlbWFpbCI6InNhZGFzQGEuY29tIiwibmFtZSI6InNhZGphc2xkIn0.gxj_6yWn130RvD0FU4XMgaJNxMafGSeoEdtpcBWpg50',
            'Cookie': 'ssid=eyJqd3QiOnsiZW1haWwiOiJhQGEuY29tIiwibmFtZSI6ImEifSwiY3NyZlNlY3JldCI6InZ6MWZuTk05SW5CaE1pcFo0SXpiN2dMMyJ9; ssid.sig=uQKHNuuGhC6R_XOcDhcWUSevl-Q'
        }
    };
    
    if (req.session.xsrf) {
        try {
            const devicesInfo = await fetch('http://61.74.187.4:7100/api/v1/devices', swrHeader);
            const deviceInfoJSON = await devicesInfo.json();

            res.json(deviceInfoJSON);
        } catch (error) {
            res.status(500).json({ message: (error).message })
        }
    } else {
        res.json({
            success: false,
        });
    }
}