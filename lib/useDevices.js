import useSWR from 'swr'
import fetchJson from './fetchJson';

export default function useDevices(user) {
  const swrHeader = {
    method: 'GET',
    credentials: 'include'
  }

  const { data: devices } = useSWR(
    user?.isLoggedIn ? /*['http://61.74.187.4:7100/api/v1/devices', swrHeader]*/'/api/device' : null,
    fetchJson,
    {refreshInterval: 2}
  );

  return { devices };
}