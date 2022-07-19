import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "/lib/session";

export default withIronSessionApiRoute(deviceCont, sessionOptions);

async function deviceCont(req, res) {
    const { serial, method } = await req.body;
    const useremail = req.session.xsrf.useremail;

    const cookieSSID = await req.cookies['ssid'];
    const cookieSSIDSIG = await req.cookies['ssid.sig'];

    const swrHeader = {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Cookie': `ssid=${cookieSSID}; ssid.sig=${cookieSSIDSIG}`
        }
    };
    
    if (req.session.xsrf) {
        try {
            const devicesInfo = await fetch(`http://61.74.187.4:7100/api/v1/user/devices/${serial}`, swrHeader);

            const deviceInfoJSON = await devicesInfo.json();
            console.log(deviceInfoJSON);
            res.json({
                success: true,
                ...deviceInfoJSON
            });
        } catch (error) {
            res.status(500).json({ message: (error).message })
        }
    } else {
        res.json({
            success: false,
        });
    }
}