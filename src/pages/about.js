import React from 'react'
import Layout from '../components/layout'

export default function about() {
  return (
    <Layout alwaysDark={true}>
        <div className="container mx-auto py-10 px-4 lg:px-8">
            <h1 className="text-3xl lg:text-5xl font-extrabold text-center mb-10 lg:mb-16">About Us</h1>
            <div className="max-w-4xl mx-auto">
            <p className="text-lg lg:text-xl leading-relaxed mb-8">
                Plan Your Journey, established in 2018, is a premier charter agency specializing in yacht and gulet cruising. After working in the same business for many years, we decided to establish Plan Your Journey to offer you quality and safety with an experienced crew to bring you a mesmerizing experience.
            </p>
            <p className="text-lg lg:text-xl leading-relaxed mb-8">
                Yachts and Gulets we work with have to be regularly maintained and upgraded for every season, and have professional crew members. We want to extend this success to other countries, such as Greece and Turkey. In order to make your sailing vacation unforgettable, we are here to take you to beautiful places almost untouched by other people.
            </p>
            <p className="text-lg lg:text-xl leading-relaxed mb-8">
                To extend our knowledge even more, every year we attend yacht shows, boat shows, and similar events all around the world.
            </p>
            <p className="text-lg lg:text-xl leading-relaxed mb-8">
                If you have any specific questions about the operation of the company, please don’t hesitate to contact us by email or call us.
            </p>
            </div>
        </div>
    </Layout>
  )
}

export const Head = () => (
    <>
        <title>About Us - Plan Your Journey</title>
        <meta name="description" content="Learn more about Plan Your Journey, a premier charter agency specializing in yacht and gulet cruising. Established in 2018, we offer quality and safety with an experienced crew." />
        <meta name="keywords" content="About Plan Your Journey, yacht charter, gulet charter, sailing vacations, luxury yachts" />
        <meta property="og:title" content="About Us - Plan Your Journey" />
        <meta property="og:description" content="Discover the story behind Plan Your Journey, our mission, and our dedication to providing unforgettable yacht and gulet cruising experiences." />
        {/*TODO: <meta property="og:url" content="https://yourwebsite.com/about" />*/}
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
        {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Plan Your Journey",
            // TODO: "url": "https://yourwebsite.com",
            // TODO: "logo": "https://yourwebsite.com/logo.png",
            "sameAs": [
                "https://www.facebook.com/LetTheHolidayBegin/",
                "https://www.instagram.com/planyour_journey/",
                "https://linkedin.com/company/plan-your-journey"
            ],
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+385-91-333-3831",
                "contactType": "Customer Service"
            }
        })}
        </script>
    </>
)