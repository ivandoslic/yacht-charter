import React, { useState } from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';


export default function YachtSite({ data, children }) {
  const yacht = data.markdownRemark.frontmatter;

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
        <section className="relative overflow-hidden" style={{minHeight: "75vh"}}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${yacht.thumbnail.publicURL})` }}
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
        </div>
      </section>
        <section className="bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow-xl sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">{yacht.title}</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">{yacht.length} M / {yacht.category}</p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                      <div className="sm:flex sm:items-center sm:justify-between px-4 py-5">
                        <dt className="text-sm font-medium text-gray-500">Guests</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{yacht.guests}</dd>
                      </div>
                      <div className="sm:flex sm:items-center sm:justify-between px-4 py-5">
                        <dt className="text-sm font-medium text-gray-500">Cabins</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{yacht.cabins}</dd>
                      </div>
                      <div className="sm:flex sm:items-center sm:justify-between px-4 py-5">
                        <dt className="text-sm font-medium text-gray-500">Crew</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{yacht.crew}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
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
        details
        guests
        price
        thumbnail {
          publicURL
        }
      }
    }
  }
`
