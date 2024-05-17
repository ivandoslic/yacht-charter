import React, { useState } from 'react';
import { Listbox } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Dropdown({ icon, placeholder, options, onSelect }) {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Listbox value={selectedOption} onChange={setSelectedOption}>
      {({ open }) => (
        <div className="relative mt-2 mx-1 rounded-md shadow-sm md:h-24 md:w-1/4 bg-white">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">
            { /*FIXME: Adjust image size for larger screens */ }
            <ChevronDownIcon className="absolute left-0 inset-y-0 right-0 flex items-center pl-2 h-full w-8 text-gray-400 pointer-events-none" aria-hidden="true" />
            </span>
          </div>
          <Listbox.Button
            className="block w-full md:h-24 text-left md:text-xl rounded-md border-0 py-1.5 pl-10 md:pl-14 pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#121212]-600 sm:leading-6"
          >
            {selectedOption ? selectedOption.label : placeholder}
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((option) => (
              <Listbox.Option
                key={option.value}
                value={option}
                className={({ active }) =>
                  `${active ? 'bg-[#121212] text-white' : 'text-gray-900'}
                    cursor-default select-none relative py-2 pl-3 pr-9`
                }
                onClick={() => onSelect(option)}
              >
                {({ selected, active }) => (
                  <>
                    <div className="flex items-center">
                      <span className={`${selected ? 'font-semibold' : 'font-normal'} ml-3 block truncate`}>
                        {option.label}
                      </span>
                    </div>
                    {selected ? (
                      <span className={`${active ? 'text-white' : 'text-[#121212]'} absolute inset-y-0 right-0 flex items-center pr-4`}>
                        
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      )}
    </Listbox>
  );
};