import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "/lib/session";

export default withIronSessionApiRoute(deviceRoute, sessionOptions);

async function deviceRoute(req, res) {
    const swrHeader = {
        method: "GET",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cookie': 'ssid=eyJqd3QiOnsiZW1haWwiOiJhQGEuY29tIiwibmFtZSI6ImFzZCJ9fQ==; ssid.sig=bwZRrkAr__D3lG9Nidlunb9KHZM'
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