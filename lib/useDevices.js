import useSWR from 'swr'
import fetchJson from './fetchJson';

export default function useDevices(user) {
  // 현재 user의 device 받아오는 커스텀 훅
  
  const swrHeader = {
    method: 'GET',
    credentials: 'include'
  }

  const { data: devices, mutate: mutateDevice } = useSWR(
    user?.isLoggedIn ? /*['http://61.74.187.4:7100/api/v1/devices', swrHeader]*/'/api/device' : null,
    fetchJson,
    {refreshInterval: 1}
  );

  return { devices, mutateDevice };
}