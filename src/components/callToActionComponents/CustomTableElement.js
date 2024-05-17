import React from 'react'

export default function CustomTableElement({ icon, text }) {
  return (
    <div className='w-3/12 flex-1 sm:h-12 flex flex-col sm:flex-row justify-start items-center'>
        { icon }
        <p className='pl-3 text-center sm:text-left font-bold'>{ text }</p>
    </div>
  )
}
