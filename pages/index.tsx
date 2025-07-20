import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Programs from '../components/Programs'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Contact />
      <Footer />
    </div>
  )
}