import * as React from "react"
import Layout from "../components/layout"
import Search from "../components/Search"
import YachtCard from "../components/YachtCard"
import backgroundImage from "../images/home-background.jpg"
import { ArrowDownCircleIcon } from "@heroicons/react/20/solid"
import { graphql } from "gatsby"
import { shuffle } from 'lodash'

const IndexPage = ({ data }) => {
  const scrollToNextSection = () => {
    // Calculate the next scroll position by adding the current scroll position and the viewport height
    const nextScrollPosition = window.pageYOffset + window.innerHeight
    // Scroll the page to the calculated position
    window.scrollTo({
      top: nextScrollPosition,
      behavior: "smooth" // Add smooth scrolling behavior
    })
  }

  const shuffledNodes = shuffle(data.allMarkdownRemark.nodes);

  return (
    <Layout alwaysDark={false}>
      <div class="w-full top-0" style={{height: "100vh", top: 0}}>
        <img 
          src={backgroundImage}
          alt="Photo by Zhanzat Mamytova: https://www.pexels.com/photo/white-speedboat-on-body-of-water-3071018/"
          style={{position: "absolute", top: 0, left: 0, zIndex: -1, width: "100%", height: "100%", objectFit: "cover"}}
          />
        <div class="w-full">
          <div class="w-full flex" style={{height: "70vh"}}>
            <div class="container mx-auto py-12 h-full flex-col" style={{width: "55%"}}>
              <h1 class="text-5xl mx-3 lg:text-8xl font-extrabold text-left text-white lg:mx-8 shadow-outline">Enjoy Croatia in the best yachts</h1>
            </div>
            <div class="h-full flex-col" style={{width: "45%"}}>
            </div>
          </div>
          <div class="w-full flex content-center items-center justify-center flex-col">
            <ArrowDownCircleIcon 
              class="w-12 h-12 arrow-down"
              onClick={scrollToNextSection}
              />
          </div>
        </div>
      </div>
      <div className="w-full h-full -mt-24 bg-gray-100">
        <div className="container mx-auto py-10 px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-center mb-10 lg:mb-16">Find Your Yacht</h2>
          <div className="flex flex-col items-center">
            <Search />
            <h2 className="text-xl lg:text-3xl font-semibold mt-10 lg:mt-16 mb-5 lg:mb-10">Not Sure? Take a Look</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8 mt-8">
            {shuffledNodes.slice(0, 6).map(node => (
              <YachtCard key={node.frontmatter.name} node={node} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
    <>
      <title>Yacht and Gulet Charter Agency</title>
      <meta name="description" content="Plan Your Journey, established in 2018, is a premier charter agency specializing in yacht and gulet cruising. With over 20 meticulously maintained yachts, 120 stunning destinations, and a team of 55 experienced crew members, we offer unparalleled luxury and safety. Book your unforgettable sailing vacation with us today!" />
      <meta name="keywords" content="Plan Your Journey, yacht charter, gulet charter, sailing vacation, luxury yacht, yacht cruise, charter agency, Greece, Turkey" />
    </>
  )

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          name
          cabins
          category
          crew
          details
          guests
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
`


