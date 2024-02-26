import React from 'react'

export default function TextInput({icon, placeholder}) {
    return (
      <div>
        <div className="relative mt-2 mx-1 rounded-md shadow-sm md:h-24">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">
                {icon}
            </span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="block md:h-24 md:text-xl rounded-md border-0 py-1.5 pl-10 md:pl-14 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
            placeholder={placeholder}
          />
        </div>
      </div>
    )
  }