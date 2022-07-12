import useSWR from 'swr'

export default function useDevices(user) {
  // We do a request to /api/events only if the user is logged in
  const { data: devices } = useSWR(
    user?.isLoggedIn ? `/api/device` : null
  )
  console.log('asdasdsahksjadhsak: ' + user?.isLoggedIn);

  return { devices }
}