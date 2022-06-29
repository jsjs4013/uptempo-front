import Head from 'next/head'
import Navbar from './Navbar'
import useUser from '/lib/useUser'

export default function Layout({currentPage, children}) {
    const {user, mutateUser} = useUser()

    return (
        <div>
            <Head>
                <title>Up-tempo</title>
                <meta name="description" content="Up-tempo device farm" />
                <link rel="icon" href="/uptempo.png" />
            </Head>
            <main>
                {/* {user && Hi} */}
                {/* {console.log(user)} */}
                {currentPage && <Navbar currentPage={currentPage} />}
                {children}
            </main>
        </div>
  )
}