import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "/lib/session";

export default withIronSessionApiRoute(deviceRoute, sessionOptions);

async function deviceRoute(req, res) {
    const swrHeader = {
        method: "GET",
        headers: {
            'Authorization': 'Bearer 642e2d33537442efa0cec64de531b3db1514a99d9d834dcd867ea03e22d1428f',
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