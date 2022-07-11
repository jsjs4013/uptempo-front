import Head from 'next/head'
import Navbar from './Navbar'
import useUser from '/lib/useUser'

export default function Layout({currentPage, children}) {
    return (
        <div>
            <Head>
                <title>Up-tempo</title>
                <meta name="description" content="Up-tempo device farm" />
                <link rel="icon" href="/uptempo.png" />
            </Head>
            <main>
                {currentPage && <Navbar currentPage={currentPage} />}
                {children}
            </main>
        </div>
  )
}