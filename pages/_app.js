import { SWRConfig } from "swr";
import fetchJson from "/lib/fetchJson";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig>
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp;