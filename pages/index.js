import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Domain For Sale" />
        <p className="description">
          Interested buyers reach out to us at vivekanandambani@gmail.com
        </p>
      </main>

      <Footer />
    </div>
  )
}
