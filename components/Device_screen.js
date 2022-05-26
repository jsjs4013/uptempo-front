import { useMediaQuery } from 'react-responsive'

export function Desktop({ children }) {
    const isDesktop = useMediaQuery({ minWidth: 1024 })
    return isDesktop ? children : null
}

export function Phone ({ children }) {
  const isTablet = useMediaQuery({ maxWidth: 1023 })
  return isTablet ? children : null
}