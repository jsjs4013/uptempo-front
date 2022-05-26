import Head from 'next/head'

export default function Layout({children}) {
    return (
        <div>
            <Head>
                <title>Up-tempo</title>
                <meta name="description" content="Up-tempo device farm" />
                <link rel="icon" href="/uptempo.png" />
            </Head>
            <main> 
                {children}
            </main>
        </div>
  )
}