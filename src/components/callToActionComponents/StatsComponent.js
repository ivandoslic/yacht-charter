import React from 'react'
import { BanknotesIcon, CursorArrowRaysIcon, StarIcon } from '@heroicons/react/20/solid'
import StatCard from './StatCard'

export default function StatsComponent() {
  return (
    <div className='flex flex-col flex-wrap w-full text-white md:gap-10 my-3 justify-around md:flex-row md:h-32'>
        <StatCard
            icon={<BanknotesIcon height={'25%'} color='green' />}
            headerText='Best price guarantee'
            descriptionText='We offer the best price guarantee on all of our yachts!'
        />

        <StatCard
            icon={<CursorArrowRaysIcon height={'25%'}/>}
            headerText='Easy and quick booking'
            descriptionText='Booking with us is so simple you can do it in justa few clicks!'
        />

        <StatCard
            icon={<StarIcon height={'25%'} color='orange' />}
            headerText='Best yacht selection'
            descriptionText='We offer you a selection of yachts you will not find anywhere else!'
        />
    </div>
  )
}
