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

export const Head = () => (
  <>
    <title>Contact Us - Plan Your Journey</title>
    <meta name="description" content="Get in touch with Plan Your Journey for any questions or inquiries about our yacht and gulet charters. Fill out our contact form and we'll get back to you as soon as possible." />
    <meta name="keywords" content="Contact Plan Your Journey, yacht charter inquiries, gulet charter questions, sailing vacation questions" />
    <meta property="og:title" content="Contact Us - Plan Your Journey" />
    <meta property="og:description" content="Have a question or want to get in touch with Plan Your Journey? Fill out our contact form and we'll respond promptly." />
    {/*<meta property="og:url" content="https://yourwebsite.com/contact" />*/}
    <meta name="twitter:card" content="summary_large_image" />
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "http://schema.org",
        "@type": "ContactPage",
        "name": "Contact Us - Plan Your Journey",
        "description": "Get in touch with Plan Your Journey for any questions or inquiries about our yacht and gulet charters.",
        // TODO: "url": "https://yourwebsite.com/contact",
        "contactOption": {
          "@type": "ContactOption",
          "contactType": "Customer Service",
          "availableLanguage": ["English"]
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+385-91-333-3831",
          "contactType": "Customer Service"
        }
      })}
    </script>
  </>
)

