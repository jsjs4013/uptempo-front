import useSWR from 'swr'
import fetchJson from './fetchJson';
import Router from 'next/router';

import { useEffect } from 'react';

export default function useDevices(user, redirectTo='', redirectDevice=false) {
    const { data: userDevice } = useSWR(
        user?.isLoggedIn ? '/api/userGetDevice' : null,
        fetchJson
    );

    console.log(userDevice?.isDevice);
    useEffect(() => {
        if (!userDevice?.isDevice && redirectDevice) {
            Router.push(redirectTo);
        }
    }, [userDevice, redirectTo, redirectDevice]);

    return { userDevice };
}