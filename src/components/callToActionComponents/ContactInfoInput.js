import React, { useState } from 'react'

export default function ContactInfoInput() {
  const [textInput, setTextInput] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!textInput || textInput === "") return;

    document.getElementById('email-left-form').submit();
    document.getElementById('email-left-form').reset();
  }

  return (
    <div className='flex flex-row'>
        <form id='email-left-form' name='email-left' method='post' netlify-honeypot="bot-field" data-netlify="true" action='/thanks/' onSubmit={handleSubmit} className='flex flex-row'>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="email-left" />
          <input type="text" className='block w-full h-14 sm:pl-12 md:text-md rounded-l-md border-0 py-1 text-gray-900 placeholder:text-gray-400 focus:bg-[#F3F3F3]' name='email/phone' placeholder='email/phone' onChange={e => setTextInput(e.target.value)} required/>
          <button className='block h-14 px-4 sm:px-8 rounded-r-md py-1 bg-[#404040] text-center text-white md:text-md hover:opacity-[92%] active:opacity-[98%]'>
              Submit
          </button>
        </form>
    </div>
  )
}
