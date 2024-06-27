import React, { useEffect, useMemo, useState } from 'react'
import Layout from '../../components/layout'
import { graphql, useStaticQuery } from 'gatsby'
import YachtCard from '../../components/YachtCard'
import Search from '../../components/Search'
import queryString from 'query-string'
import NoYachtsMessage from '../../components/NoYachtsMessage'

export default function Yachts() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            name
            cabins
            category
            crew
            guests
            slug
            length
            title
            thumbnail {
              absolutePath
              size
              publicURL
              relativePath
              childImageSharp {
                gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO, WEBP])
              }
            }
          }
        }
      }
    }
  `)

  const categories = useMemo(
    () => [
        { value: 'gulet', label: 'Gulet' },
        { value: 'luxuryMotorSail', label: 'Luxury motor sail' },
        { value: 'miniCruiser', label: 'Mini cruiser' },
        { value: 'sailingSuperyacht', label: 'Sailing superyacht' },
        { value: 'motorYacht', label: 'Motor yacht' },
      ],
    []
  );

  const [activeCategory, setActiveCategory] = useState(null);
  const [numberOfGuests, setNumberOfGuests] = useState(null);
  const [numberOfCabins, setNumberOfCabins] = useState(null);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    console.log(activeCategory);
  }

  const resetSelection = () => {
    console.log(JSON.stringify(activeCategory));
    setActiveCategory("");
    setNumberOfGuests(0);
    setNumberOfCabins(0);
  }

  useEffect(() => {
    if(typeof window !== 'undefined') {
      const parsedQueryParams = queryString.parse(window.location.search);

      if (parsedQueryParams.category) {
        categories.forEach(category => {
          if(category.value === parsedQueryParams.category)
            setActiveCategory(category);
        });
      }

      if (parsedQueryParams.guests) {
        setNumberOfGuests(parsedQueryParams.guests);
      }

      if (parsedQueryParams.cabins) {
        setNumberOfCabins(parsedQueryParams.cabins);
      }
    }
  }, [categories]);

  return (
    <Layout alwaysDark={true}>
        <h2 className="text-3xl lg:text-5xl font-extrabold text-center mb-5">What are you looking for?</h2>
        <div className="w-full px-8">
            <Search 
              onCategoryChange={(category) => handleCategoryChange(category)}
              onSearchSubmit={() => resetSelection()}
              searchButtonText='Clear selection'
              categoryState={activeCategory}
              setCategoryState={setActiveCategory}
              guestsState={numberOfGuests}
              setGuestsState={setNumberOfGuests}
              cabinsState={numberOfCabins}
              setCabinsState={setNumberOfCabins}
            />
        </div>
            {(() => {
                const filteredNodes = data.allMarkdownRemark.nodes.filter(
                    node => (!activeCategory || node.frontmatter.category.localeCompare(activeCategory.label) === 0) && node.frontmatter.cabins >= numberOfCabins && node.frontmatter.guests >= numberOfGuests && node.frontmatter.slug !== "sample"
                );
                if (filteredNodes.length === 0) {
                    return <NoYachtsMessage />;
                } else {
                    return (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8 mt-8 px-10">
                      {
                        filteredNodes.map(node => (
                          <YachtCard key={node.frontmatter.name} node={node} />
                        ))
                      }
                      </div>
                    )
                }
            })()}
    </Layout>
  )
}

export const Head = () => {
  const headData = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            name
            cabins
            category
            crew
            guests
            slug
            length
            title
            thumbnail {
              absolutePath
              size
              publicURL
              relativePath
              childImageSharp {
                gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO, WEBP])
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <title>Our Yachts - Yacht and Gulet Charter</title>
      <meta name="description" content="Browse our selection of luxurious yachts and gulets available for charter. Plan Your Journey offers a variety of yachts to meet your needs and provide an unforgettable sailing experience." />
      <meta name="keywords" content="yacht charter, gulet charter, luxury yachts, yacht cruising, Plan Your Journey" />
      <meta property="og:title" content="Our Yachts - Yacht and Gulet Charter" />
      <meta property="og:description" content="Discover the luxurious yachts and gulets available for charter at Plan Your Journey. Book your perfect yacht today." />
      <meta property="og:image" content="https://croatiayachtvacation.com/static/home-background-6e08fa33376ede52c6c2a5108fa76a3d.jpg" />
      <meta property="og:url" content="https://croatiayachtvacation.com/yachts" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "ItemList",
          "name": "Our Yachts",
          "description": "Browse our selection of luxurious yachts and gulets available for charter.",
          "url": "https://croatiayachtvacation.com/yachts",
          "numberOfItems": headData.allMarkdownRemark.nodes.length,
          "itemListElement": headData.allMarkdownRemark.nodes.map((node, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://croatiayachtvacation.com/yachts/${node.frontmatter.slug}`,
            "name": node.frontmatter.name
          }))
        })}
      </script>
    </>
  )
}