import useSWR from 'swr'
import fetchJson from './fetchJson';
import Router from 'next/router';

import { useEffect } from 'react';

export default function useDevices({
    user,
    redirectTo='',
    redirectDevice=false
}={}) {
    const { data: userDevice } = useSWR(
        user?.isLoggedIn ? '/api/userGetDevice' : null,
        fetchJson,
        {refreshInterval: 1}
    );

    useEffect(() => {
        console.log(userDevice?.isChangeDevice)
        if (userDevice?.isChangeDevice && redirectDevice) {
            Router.push(redirectTo);
        }
    }, [userDevice, redirectTo, redirectDevice]);

    return { userDevice };
}