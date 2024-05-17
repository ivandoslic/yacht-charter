import React from 'react'
import Dropdown from './Dropdown'
import TextInput from './TextInput'
import { UserIcon, InboxIcon } from '@heroicons/react/24/outline'

export default function Search() {
  return (
    <div className='flex w-full gap-1 md:gap-5 flex-col md:flex-row justify-between'>
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
            placeholder="Number of guests"
            icon={<UserIcon class="h-4 w-4 md:h-10 md:w-8"/>}
        />
        <TextInput
            placeholder="Number of cabins"
            icon={<InboxIcon class="h-4 w-4 md:h-10 md:w-8"/>}
        />
        {/* TODO: Add functionality */}
        <button className='flex justify-center w-full md:w-1/4 items-center bg-[#121212] text-white md:h-24 mt-2 md:text-xl rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:leading-6 hover:opacity-[96%]'>
            Search
        </button>
    </div>
  )
}
