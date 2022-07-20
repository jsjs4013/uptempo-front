
export default async function ssrBasecode(req, res, status=0) {
    const user = req.session.xsrf;

    const cookieSSID = await req.cookies['ssid'];
    const cookieSSIDSIG = await req.cookies['ssid.sig'];

    if (!user?.isLoggedIn) {
        return commReturn(res, req, 0);
    }

    if (status === 0) {
        return commReturn(res, req, 1);
    } else if (status === 1) {
        if (user.device === false) {
            return commReturn(res, req, 0, '/');
        } else {
            return commReturn(res, req, 1);
        }
    }
}

function commReturn (res, req, set=0, backlocation='/signin') {
    if (set === 0) {
        res.setHeader('location', backlocation);
        res.statusCode = 302;
        res.end();

        return {
            props: {
                user: {
                    success: true,
                    isLoggedIn: false,
                }
            },
        }
    } else if (set === 1) {
        return {
            props: { user: req.session.xsrf },
        }
    }
}