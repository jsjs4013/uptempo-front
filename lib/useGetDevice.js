import useSWR from 'swr'
import fetchJson from './fetchJson';

export default function useGetDevice(user) {
  const swrHeader = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: {
      deviceSerial: device.serial
    }
  }
  
  const { data: device, mutate: mutateGetDev } = useSWR(
    user?.isLoggedIn ? ['/api/userGetDevice', swrHeader] : null,  
    fetchJson
  );

  return { device, mutateGetDev };
}