import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'

const BibleStudy = () => {
  return (
    <section className='min-h-screen'>
      <Navbar />
      <Header />
      <main className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 text-black'>
        <div className='text-4xl font-bold text-center mt-25'>
          Bible Study Program
        </div>
        <div className='text-center mt-10'>
          <p className='text-lg mb-6'>
            Join us for our weekly Bible study sessions where we delve into the Word of God, 
            explore its teachings, and grow together in faith. Everyone is welcome!
          </p>
        </div>
      </main>
      <Footer />
    </section>
  )
}

export default BibleStudy