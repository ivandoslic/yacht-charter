import React from 'react'
import Dropdown from './DropDown'
import TextInput from './TextInput'
import { UserIcon, InboxIcon } from '@heroicons/react/24/outline'

export default function Search() {
  return (
    <div className='mx-8 flex flex-col md:flex-row h-50 md:justify-center'>
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
  )
}
