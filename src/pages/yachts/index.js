import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import { graphql, useStaticQuery } from 'gatsby'
import YachtCard from '../../components/YachtCard'
import Search from '../../components/Search'
import queryString from 'query-string'

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
            details
            guests
            slug
            length
            price
            title
            thumbnail {
              absolutePath
              size
              publicURL
              relativePath
            }
          }
        }
      }
    }
  `)

  const categories = [
    { value: 'gulet', label: 'Gulet' },
    { value: 'luxuryMotorSail', label: 'Luxury motor sail' },
    { value: 'miniCruiser', label: 'Mini cruiser' },
    { value: 'sailingSuperyacht', label: 'Sailing superyacht' },
    { value: 'motorYacht', label: 'Motor yacht' },
  ];

  const [queryParams, setQueryParams] = useState({});
  const [activeCategory, setActiveCategory] = useState(null);
  const [numberOfGuests, setNumberOfGuests] = useState(null);
  const [numberOfCabins, setNumberOfCabins] = useState(null);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  }

  const resetSelection = () => {
    console.log(JSON.stringify(activeCategory));
    setActiveCategory("");
    setNumberOfGuests(0);
    setNumberOfCabins(0);
  }

  useEffect(() => {
    const parsedQueryParams = queryString.parse(window.location.search);
    setQueryParams(parsedQueryParams);

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
  }, [window.location]);

  return (
    <Layout alwaysDark={true}>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8 mt-8">
            {data.allMarkdownRemark.nodes.filter(
              node => (node.frontmatter.category.localeCompare(activeCategory) == 0 || !activeCategory) && node.frontmatter.cabins >= numberOfCabins && node.frontmatter.guests >= numberOfGuests
            ).map(node => (
                <YachtCard key={node.frontmatter.name} node={node} />
            ))}
        </div>
    </Layout>
  )
}
