import React from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';

export default function NoYachtsMessage() {
  return (
    <div className="flex items-center justify-center flex-col space-y-4 text-center h-64 text-white w-full mt-8">
      <ExclamationCircleIcon className="h-16 w-16 text-black" />
      <p className="text-lg text-black sm:w-[25%] lg:text-xl">Sorry, we don't have any yachts matching your criteria.</p>
    </div>
  );
}
