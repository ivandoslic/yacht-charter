import React from 'react'

export default function StatCard({ icon, headerText, descriptionText }) {
  return (
    <div className='flex flex-col justify-center items-center text-center md:text-left md:items-start w-full md:w-1/4 h-[10rem] md:h-full'>
        { icon }
        <p className='font-semibold text-base'>{headerText}</p>
        <p>{descriptionText}</p>
    </div>
  )
}
