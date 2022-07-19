import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "/lib/session";

export default withIronSessionApiRoute(userRoute, sessionOptions);

async function userRoute(req, res) {
    const { deviceSerial } = await req.body;

    if (deviceSerial != None) {
        res.json({
            success: true,
            serial: deviceSerial
        });
    } else {
        res.json({
            success: true,
            serial: false
        });
    }
}