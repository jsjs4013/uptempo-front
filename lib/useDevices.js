import useSWR from 'swr'
import fetchJson from './fetchJson';

export default function useDevices(user) {
  // We do a request to /api/events only if the user is logged in
  const { data: devices } = useSWR(
    user?.isLoggedIn ? `/api/device` : null,
    fetchJson,
    {refreshInterval: 2}
  );
  console.log('asdasdsahksjadhsak: ' + user?.isLoggedIn);

  return { devices };
}