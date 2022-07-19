import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "/lib/session";

export default withIronSessionApiRoute(stopUsing, sessionOptions);

async function stopUsing(req, res) {
    const { serial } = await req.body;
    const useremail = req.session.xsrf.useremail;

    const cookieSSID = await req.cookies['ssid'];
    const cookieSSIDSIG = await req.cookies['ssid.sig'];
    console.log(cookieSSID);
    console.log(cookieSSIDSIG);
    const swrHeader = {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Cookie': `ssid=${cookieSSID}; ssid.sig=${cookieSSIDSIG}`
        }
    };
    
    if (req.session.xsrf) {
        try {
            const devicesInfo = await fetch(`http://61.74.187.4:7100/api/v1/user/devices/${serial}`, swrHeader);

            const deviceInfoJSON = await devicesInfo.json();

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