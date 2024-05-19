import React from 'react'
import Layout from '../components/layout'
import BookingForm from '../components/BookingForm'

export default function contact() {
  return (
    <Layout alwaysDark={true}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl lg:text-5xl font-bold text-[#121212] mb-8 text-center">Contact Us</h1>
        <div className="flex justify-center">
          <div className="w-full lg:w-1/2">
            <p className="text-lg text-[#121212] mb-4">
              Have a question or want to get in touch? Fill out the form below and we'll get back to you as soon as possible.
            </p>
            <BookingForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}
