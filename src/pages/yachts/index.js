import React from 'react'
import Layout from '../../components/layout'
import { graphql, useStaticQuery } from 'gatsby'
import YachtCard from '../../components/YachtCard'
import Dropdown from '../../components/Dropdown'
import TextInput from '../../components/TextInput'
import { UserIcon, InboxIcon } from '@heroicons/react/24/outline'

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


  return (
    <Layout alwaysDark={true}>
        <div className="flex flex-col md:flex-row items-center w-full justify-center">
            <div className="flex flex-col md:flex-row items-center">
            <Dropdown
                placeholder="Select Category"
                options={[
                    { value: 'gulet', label: 'Gulet' },
                    { value: 'luxuryMotorSail', label: 'Luxury motor sail' },
                    { value: 'miniCruiser', label: 'Mini cruiser' },
                    { value: 'sailingSuperyacht', label: 'Sailing superyacht' },
                    { value: 'motorYacht', label: 'Motor yacht' },
                ]}
                onSelect={(option) => console.log('Selected option:', option)}
            />
            <TextInput
                className="mx-8 md:mx-0 mt-2 md:mt-0"
                placeholder="Number of guests"
                icon={<UserIcon class="h-4 w-4 md:h-10 md:w-10"/>}
            />
            </div>
            <div className="flex flex-col md:flex-row items-center mt-2 md:mt-0">
                <TextInput
                    className="pl-2 md:pl-0"
                    placeholder="Number of cabins"
                    icon={<InboxIcon class="h-4 w-4 md:h-10 md:w-10"/>}
                />
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8 mt-8">
            {data.allMarkdownRemark.nodes.map(node => (
                <YachtCard key={node.frontmatter.name} node={node} />
            ))}
        </div>
    </Layout>
  )
}
