import { useMediaQuery } from 'react-responsive'

export default function Desktop({ children }) {
    const isDesktop = useMediaQuery({ minWidth: 1024 })
    return isDesktop ? children : null
}

export default function Phone ({ children }) {
  const isTablet = useMediaQuery({ maxWidth: 1023 })
  return isTablet ? children : null
}