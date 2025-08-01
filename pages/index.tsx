import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Programs from '../components/Programs'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen">

      <Head>
        <title>NNMKC - Welcome Home</title>
        <meta name="description" content="Join our loving community at NNMKC. Experience faith, fellowship, and spiritual growth." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/MKC-Logo.png" />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Contact />
      <Footer />
    </div>
  )
}