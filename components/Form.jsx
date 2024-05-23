/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useState } from 'react';
import { initFlowbite } from 'flowbite';

const Form = ({ getFormData }) => {
  const [sliderValue, setSliderValue] = useState(50);
  const [fields, setFields] = useState({
    prompt: '',
    quality: '',
    style: '',
    guidance: '',
  });

  useEffect(() => {
    initFlowbite();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));

    if (name.includes('guidance')) {
      setSliderValue(value);
    }
  };

  return (
    <>
      <button
        data-drawer-target='default-sidebar'
        data-drawer-toggle='default-sidebar'
        aria-controls='default-sidebar'
        type='button'
        className='inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
      >
        <span className='sr-only'>Open sidebar</span>
        <svg
          className='w-6 h-6'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            clipRule='evenodd'
            fillRule='evenodd'
            d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
          ></path>
        </svg>
      </button>

      <aside
        id='default-sidebar'
        className='fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0'
        aria-label='Sidebar'
      >
        <div className='h-full px-3 py-4 overflow-y-auto sidebarBg dark:bg-gray-800'>
          <form className='mx-auto mt-6'>
            <label
              htmlFor='prompt'
              className='block mb-2 text-sm font-medium text-white dark:text-white'
            >
              PROMPT
            </label>
            <textarea
              id='prompt'
              name='prompt'
              rows='4'
              className='mb-6 h-60 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Specify a text prompt describing the desired image, with a maximum length of 2000 characters.'
              maxLength={2000}
              onChange={handleChange}
            ></textarea>

            <label
              htmlFor='quality'
              className='block mb-2 text-sm font-medium text-white dark:text-white'
            >
              QUALITY
            </label>
            <select
              id='quality'
              name='quality'
              className='mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              onChange={handleChange}
            >
              <option>LOW</option>
              <option>MID</option>
              <option>HIGH</option>
            </select>

            <label
              htmlFor='style'
              className='block mb-2 text-sm font-medium text-white dark:text-white'
            >
              STYLE
            </label>
            <select
              id='style'
              name='style'
              className='mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              onChange={handleChange}
            >
              <option>NONE</option>
              <option>PHOTOREALISTIC</option>
              <option>SCIFI</option>
              <option>LANDSCAPE</option>
            </select>

            <div className='relative mb-6'>
              <label
                htmlFor='guidance'
                className='block mb-2 text-sm font-medium text-white dark:text-white'
              >
                PROMPT GUIDANCE
              </label>
              <input
                id='guidance'
                name='guidance'
                type='range'
                min='0'
                max='100'
                onChange={handleChange}
                className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
              />
              <span className='text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6'>
                0
              </span>
              <span className='text-sm text-gray-500 dark:text-gray-400 absolute start-1/2 -bottom-6'>
                <span style={{ marginLeft: '-8px' }}>{sliderValue}</span>
              </span>
              <span className='text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6'>
                100
              </span>
            </div>
            <div className='mt-20 flex justify-end'>
              <button
                type='button'
                className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900'
                onClick={() => getFormData(fields)}
              >
                GENERATE
              </button>
            </div>
          </form>
        </div>
      </aside>
    </>
  );
};
export default Form;
