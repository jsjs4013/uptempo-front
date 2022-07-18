import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "/lib/session";

export default withIronSessionApiRoute(deviceRoute, sessionOptions);

async function deviceRoute(req, res) {
    const swrHeader = {
        method: "GET",
        headers: {
            'Authorization': 'Bearer 66a01a1156cb43068acf44546fe42ade6e61a2cad3f745c0bf16ca99c19ffa69',
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