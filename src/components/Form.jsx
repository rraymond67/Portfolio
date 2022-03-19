import React from 'react'
import { send } from 'emailjs-com'
import { useState } from 'react'

export default function Form() {
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    send(
      'service_5sogr2y',
      'template_yr8j3d7',
      toSend,
      'ZtWSyQt3fuR931JAd'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  
  return (
    <form class="mb-10 grid grid-cols-1 justify-items-center"
      onSubmit={onSubmit}>
      
    <input class="mb-3 shadow-sm bg-white-50 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      type='text'
      name='from_name'
      placeholder='from name'
      value={toSend.from_name}
      onChange={handleChange}
    />
  
    <input class="mb-3 shadow-sm bg-white-50 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
      type='email'
      name='reply_to'
      placeholder='Your email'
      value={toSend.reply_to}
      onChange={handleChange}
      />
    
      <textarea rows="4" class="block p-2.5 w-full text-sm text-white-900 bg-white-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        name='message'
        placeholder="Your message..."
        value={toSend.message}
        onChange={handleChange}
      ></textarea>

      <button class="mt-5 flex flex-row mb-5 hover:text-white pl-4 pr-4 bg-yellow-300 ps-4 py-2 rounded-lg font-bold italic hover:not-italic underline decoration-white"
        type='submit'>Submit</button>
  </form>
  )
}
