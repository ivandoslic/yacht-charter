import * as React from "react"
import Layout from "../components/layout"
import Search from "../components/Search"
import backgroundImage from "../images/home-background.jpg"
import { ArrowDownCircleIcon } from "@heroicons/react/20/solid"

const IndexPage = () => {
  const scrollToNextSection = () => {
    // Calculate the next scroll position by adding the current scroll position and the viewport height
    const nextScrollPosition = window.pageYOffset + window.innerHeight
    // Scroll the page to the calculated position
    window.scrollTo({
      top: nextScrollPosition,
      behavior: "smooth" // Add smooth scrolling behavior
    })
  }

  return (
    <Layout>
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
      <div class="w-full -mt-24" style={{height: "100vh"}}>
        <div class="w-full flex justify-center items-center flex-col">
          <h2 class="text-2xl lg:text-5xl font-extrabold my-5">What do you need?</h2>
          <Search />
          <h2 class="text-l lg:text-3xl font-extrabold my-5">Not sure? Take a look:</h2>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
