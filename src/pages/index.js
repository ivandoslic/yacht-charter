import * as React from "react"
import Layout from "../components/layout"
import Search from "../components/Search"
import YachtCard from "../components/YachtCard"
import backgroundImage from "../images/home-background.jpg"
import ctaImage from "../images/ctaImage.jpg"
import infoSectionImage from "../images/info-section.jpg"
import { ArrowDownCircleIcon } from "@heroicons/react/20/solid"
import { graphql, Link, navigate } from "gatsby"
import { shuffle } from 'lodash'
import StatsComponent from "../components/callToActionComponents/StatsComponent"
import ContactInfoInput from "../components/callToActionComponents/ContactInfoInput"
import CustomTableElement from "../components/callToActionComponents/CustomTableElement"
import { CheckCircleIcon, FaceSmileIcon, HashtagIcon, KeyIcon, MapPinIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/24/outline"

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

  const [searchCategory, setSearchCategory] = React.useState("");
  const [searchGuestNum, setSearchGuestNum] = React.useState(null);
  const [searchCabinNum, setSearchCabinNum] = React.useState(null);

  const searchForYachts = () => {
    let queryParams = "";
    queryParams += searchCategory !== "" ? `category=${encodeURIComponent(searchCategory.value)}&` : "";
    queryParams += searchGuestNum ? `guests=${encodeURIComponent(searchGuestNum)}&` : "";
    queryParams += searchCabinNum ? `cabins=${encodeURIComponent(searchCabinNum)}&` : "";

    // Remove the last '&' if queryParams is not empty
    if (queryParams.length > 0) {
      queryParams = queryParams.slice(0, -1);
    } else {
      // If queryParams is empty, return without navigating
      return;
    }

    navigate(`/yachts?${queryParams}`);
  }

  return (
    <Layout alwaysDark={false}>
      <div class="w-full top-0 text-[#121212]" style={{height: "100vh", top: 0}}>
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
      <div className="w-full -mt-24 bg-gray-100">
        <div className="px-auto">
          <div className="w-full bg-[#121212] px-8 py-6 pb-11">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-center mt-10 text-white">Why us?</h2>
            <StatsComponent />
          </div>
          <div className="w-full px-8 py-6 mb-5 mt-6">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-center mb-5">What are you looking for?</h2>
            <p className="text-lg text-center mb-5">We provide you with a lot of different categories of yachts and gulets. If you know what you need you can search for it here.</p>
            <Search
              /* TODO: Implement functionality */
              onCategoryChange={(category) => setSearchCategory(category)}
              onSearchSubmit={searchForYachts}
              categoryState={searchCategory}
              setCategoryState={setSearchCategory}
              guestsState={searchGuestNum}
              setGuestsState={setSearchGuestNum}
              cabinsState={searchCabinNum}
              setCabinsState={setSearchCabinNum}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8 mt-8 pb-10">
            {
              shuffledNodes.slice(0, 6).map(node => (
                <YachtCard key={node.frontmatter.name} node={node} />
                )
              )
            }
          </div>
          <div className="w-full bg-[#121212] px-6 py-10 sm:pl-0">
            <div className="flex w-full flex-col sm:flex-row">
              <img 
                src={ctaImage}
                alt="Photo by ben o'bro: https://unsplash.com/@benobro?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                className="w-full p-4 sm:p-0 sm:w-5/12"
              />
              <div className="w-full sm:w-7/12 flex flex-col items-center py-6">
                <h2 className="text-3xl lg:text-5xl font-extrabold text-white text-center mb-5">Not sure? No problem!</h2>
                <p className="text-white px-10 sm:text-lg">If you're feeling uncertain about selecting the right yacht, don't worry! At Plan your journey, we're dedicated to making sure you find the perfect fit.</p>
                <p className="text-white px-10 my-5 sm:text-lg">Feel free to leave your email or a phone number in the input bellow and we'll conact you as soon as possible!</p>
                <div className="w-full flex justify-center items-center flex-1 px-8">
                  <ContactInfoInput />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-100 sm:pl-0 pb-6 pb-11">
            <div className="flex container w-full flex-col sm:flex-row">
              <div className="w-full sm:w-9/12 flex flex-col items-start px-6 sm:pl-12 py-6">
                <h2 className="text-3xl lg:text-5xl font-extrabold text-center mb-5">What do we offer?</h2>
                <p className="w-full sm:w-1/2 sm:text-lg">We assure you that the quality of our yachts is at the highest industry standard, meticulously crafted and maintained to exceed your expectations at every voyage.</p>
                <div className="w-full flex flex-row flex-wrap gap-10 py-10">
                  <CustomTableElement
                    icon={<HashtagIcon className="h-8 sm:h-[60%]"/>}
                    text="20 Yachts"
                  />
                  <CustomTableElement
                    icon={<MapPinIcon className="h-8 sm:h-[60%]"/>}
                    text="120 Destinations"
                  />
                  <CustomTableElement
                    icon={<FaceSmileIcon className="h-8 sm:h-[60%]"/>}
                    text="200+ Happy clients"
                  />
                  <CustomTableElement
                    icon={<UsersIcon className="h-8 sm:h-[60%]"/>}
                    text="55 Crew members"
                  />
                  <CustomTableElement
                    icon={<CheckCircleIcon className="h-8 sm:h-[60%]"/>}
                    text="Best charter agents"
                  />
                </div>
                <Link to="/yachts" className="flex w-full md:w-1/4">
                  <button className='flex justify-center w-full items-center bg-[#121212] text-white md:h-20 py-1.5 mt-2 md:text-xl rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:leading-6 hover:opacity-[96%]'>
                    Take a look
                  </button>
                </Link>
              </div>
              <div className="w-full sm:w-3/12 flex-1 p-6">
                <img 
                  src={infoSectionImage}
                  alt="Photo by ben o'bro: https://unsplash.com/@benobro?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
                  className="h-fit p-4 sm:p-0 rounded-md"
                />
              </div>
            </div>
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
`
