import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function YachtCard({ node }) {
  const { frontmatter } = node
  const image = getImage(frontmatter.thumbnail.childImageSharp.gatsbyImageData)
  
  return (
    <Link to={`/yachts/${frontmatter.slug}`} className="max-w-sm md:max-w-md lg:max-w-lg rounded overflow-hidden shadow-lg mx-auto my-4">
      <div className="relative">
      <GatsbyImage
          className="w-full h-48 md:h-56 lg:h-64 object-cover transition-transform duration-300 transform hover:scale-105"
          image={image}
          alt={frontmatter.name}
        />
        <div className="absolute bottom-0 left-0 bg-gray-900 bg-opacity-75 text-white p-4">
          <h2 className="text-lg font-bold">{frontmatter.name}</h2>
          <p className="text-sm">Category: {frontmatter.category}</p>
          <p className="text-sm">Cabins: {frontmatter.cabins}</p>
          <p className="text-sm">Crew: {frontmatter.crew}</p>
          <p className="text-sm">Guests: {frontmatter.guests}</p>
          <p className="text-sm">Length: {frontmatter.length}</p>
        </div>
      </div>
    </Link>
  )
}
