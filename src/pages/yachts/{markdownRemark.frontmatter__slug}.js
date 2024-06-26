import React, { useState } from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { ChevronLeftIcon, ChevronRightIcon, TagIcon, HomeIcon, UsersIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import BookingForm from '../../components/BookingForm';


export default function YachtSite({ data, children }) {
  const yacht = data.markdownRemark.frontmatter;
  const description = data.markdownRemark.html;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? yacht.gallery.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === yacht.gallery.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    (
      <Layout alwaysDark={true}>
        <section className="relative overflow-hidden min-h-[75vh]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${yacht.gallery[currentImageIndex].publicURL})` }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-x-0 bottom-0 flex justify-between px-4 py-2 bg-black bg-opacity-50 text-white">
              <button
                onClick={handlePrevImage}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
              <button
                onClick={handleNextImage}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="absolute top-0 left-0 p-4 text-white">
              <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl lg:text-4xl font-bold mb-4">{yacht.name}</h1>
                <div className="flex items-center mb-4">
                  <TagIcon className="h-6 w-6 lg:h-8 lg:w-8 mr-2" />
                  <p className="text-lg lg:text-xl">{yacht.category}</p>
                </div>
                <div className="flex items-center mb-4">
                  <UsersIcon className="h-6 w-6 lg:h-8 lg:w-8 mr-2" />
                  <p className="text-lg lg:text-xl">{yacht.guests} Guests</p>
                </div>
                <div className="flex items-center mb-4">
                  <HomeIcon className="h-6 w-6 lg:h-8 lg:w-8 mr-2" />
                  <p className="text-lg lg:text-xl">{yacht.cabins} Cabins</p>
                </div>
                <div className="flex items-center mb-4">
                  <UsersIcon className="h-6 w-6 lg:h-8 lg:w-8 mr-2" />
                  <p className="text-lg lg:text-xl">{yacht.crew} Crew</p>
                </div>
                <div className="flex items-center">
                  <ChevronUpDownIcon className="h-6 w-6 lg:h-8 lg:w-8 mr-2 rotate-90" />
                  <p className="text-lg lg:text-xl">{yacht.length} M</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="py-5 flex flex-col lg:flex-row w-full">
          <div className="w-full lg:w-[60%] px-4 lg:px-8">
            <div className="markdown-content" dangerouslySetInnerHTML={{ __html: description }} />
          </div>
          <div className="w-full lg:w-[40%] text-center mt-8 lg:mt-0">
            <h2 className="text-xl lg:text-2xl font-bold mb-4">Book this Yacht</h2>
            <BookingForm selectedYacht={ yacht.name } />
          </div>
        </div>
      </Layout> 
    )
  )
}

export const Head = ({ data }) => {
  const yacht = data.markdownRemark.frontmatter;
  return (
    <>
      <title>{yacht.name} - Yacht Charter</title>
      <meta name="description" content={`Explore the luxurious ${yacht.name}, a ${yacht.length}m ${yacht.category} accommodating ${yacht.guests} guests with ${yacht.cabins} cabins and a crew of ${yacht.crew}.`} />
      <meta property="og:title" content={`${yacht.name} - Yacht Charter`} />
      <meta property="og:description" content={`Discover the luxurious ${yacht.name}, a perfect choice for your next yacht charter.`} />
      <meta property="og:image" content={"https://croatiayachtvacation.com" + yacht.gallery[0].publicURL} />
      <meta property="og:url" content={`https://croatiayachtvacation.com/yachts/${yacht.slug}`} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Product",
          "name": yacht.name,
          "description": `Explore the luxurious ${yacht.name}, a ${yacht.length}m ${yacht.category} accommodating ${yacht.guests} guests with ${yacht.cabins} cabins and a crew of ${yacht.crew}.`,
          "image": yacht.gallery.map(image => image.publicURL),
          "brand": {
            "@type": "Brand",
            "name": "Plan Your Journey"
          },
          "offers": {
            "@type": "AggregateOffer",
            "url": `https://croatiayachtvacation.com/yachts/${yacht.slug}`,
            "priceCurrency": "EUR",
            "lowPrice": "15000.00",
            "highPrice": "30000.00",
            "itemCondition": "http://schema.org/NewCondition",
            "availability": "http://schema.org/InStock",
            "priceValidUntil": `${new Date().getFullYear()}-12-31`
          }
        })}
      </script>
    </>
  )
}

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        cabins
        title
        slug
        name
        length
        crew
        category
        guests
        thumbnail {
          publicURL
        }
        gallery {
          publicURL
        }
      }
      html
    }
  }
`
