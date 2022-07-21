import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "/lib/session";

export default withIronSessionApiRoute(userGetDevice, sessionOptions);

async function userGetDevice(req, res) {
    const cookieSSID = await req.cookies['ssid'];
    const cookieSSIDSIG = await req.cookies['ssid.sig'];
    const device = await req.session.xsrf.device;

    const swrHeader = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Cookie': `ssid=${cookieSSID}; ssid.sig=${cookieSSIDSIG}`
        }
    };

    if (req.session.xsrf) {

        // 여기서 유저의 디바이스 개수가 1개에서 0개로 바뀐 경우 비정상 종료됐다고 판단하고 값을 false로 반환함
        try {
            const devicesInfo = await fetch(`http://61.74.187.4:7100/api/v1/user/devices`, swrHeader);
            const deviceInfoJSON = await devicesInfo.json();

            if (deviceInfoJSON.devices.length === 0) {
                if (device) {
                    req.session.xsrf.device = false;

                    await req.session.save();
                }

                res.json({
                    success: true,
                    isChangeDevice: true
                });
            } else {
                res.json({
                    success: true,
                    isChangeDevice: false
                });
            }
        } catch (error) {
            res.status(500).json({ message: (error).message })
        }
    } else {
        res.json({
            success: false,
        });
    }
}