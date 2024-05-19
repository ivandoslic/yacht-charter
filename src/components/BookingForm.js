import React, { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    startDate: '',
    endDate: '',
    message: '',
    privacyPolicyAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.email || !validateEmail(formData.email)) validationErrors.email = 'Valid email is required';
    if (!formData.guests) validationErrors.guests = 'Number of guests is required';
    if (!formData.startDate) validationErrors.startDate = 'Start date is required';
    if (!formData.endDate) validationErrors.endDate = 'End date is required';
    if (new Date(formData.startDate) <= new Date()) validationErrors.startDate = 'Start date must be in the future';
    if (new Date(formData.endDate) <= new Date(formData.startDate)) validationErrors.endDate = 'End date must be after the start date';
    if (!formData.privacyPolicyAccepted) validationErrors.privacyPolicyAccepted = 'You must accept the Privacy Policy';

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      document.getElementById("booking-form").submit();
    }
  };

  return (
    <div className="flex justify-center">
      <form id="booking-form" name='full-booking' method='post' netlify-honeypot="bot-field" data-netlify="true" onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-3/4">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="full-booking" />
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="text"
            placeholder="Your phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guests">
            Number of Guests <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="guests"
            type="number"
            placeholder="Number of guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
          />
          {errors.guests && <p className="text-red-500 text-xs italic">{errors.guests}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
            Start Date <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="startDate"
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
          {errors.startDate && <p className="text-red-500 text-xs italic">{errors.startDate}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
            End Date <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="endDate"
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
          {errors.endDate && <p className="text-red-500 text-xs italic">{errors.endDate}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="privacyPolicyAccepted">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              id="privacyPolicyAccepted"
              name="privacyPolicyAccepted"
              checked={formData.privacyPolicyAccepted}
              onChange={handleChange}
              required
            />
            <span className="text-sm">I accept the Privacy Policy <span className="text-red-500">*</span></span>
          </label>
          {errors.privacyPolicyAccepted && <p className="text-red-500 text-xs italic">{errors.privacyPolicyAccepted}</p>}
        </div>
        <div className="flex items-center justify-center mt-10">
          <button
            className="bg-[#121212] text-white font-bold py-2 px-4 rounded text-gray-900 ring-1 ring-inset ring-gray-300 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:leading-6 hover:opacity-[96%]"
            type="submit"
          >
            Book Now
          </button>
        </div>
      </form>
    </div>
  );
}
