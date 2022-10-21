import { useState, useEffect } from 'react'
import { IoArrowBackCircleOutline } from 'react-icons/io5'

function Index() {
  const [goBack, setGoBack] = useState(false)

  useEffect(() => {
    if (goBack) {
      window.history.back()
    }
  }, [goBack])

  return (
    <div className='py-10'>
      <div className='flex items-center pl-4'>
        <button onClick={() => setGoBack(true)}>
          <IoArrowBackCircleOutline className='text-3xl text-blue-500' />
        </button>
        <span className='ml-2 tracking-tight text-gray-400 f'>Go Back</span>
      </div>
      <div className='pl-10 mt-10 md:pl-32'>
        <h1 className='px-4 text-lg font-semibold lg:text-2xl'>Info</h1>
        <p className='mt-10 w-fit'>
          <span className='text-sm'>Created by: </span>
          <a
            href='https://www.github.com/andrewlfauth'
            target='_blank'
            rel='noreferrer'
            className='block ml-2 font-semibold text-blue-900 underline'
          >
            Andrew Fauth
          </a>
        </p>
        <p className='mt-4 lg:mt-6'>
          <span className='text-sm'>Assets by: </span>
          <a
            href='https://www.figma.com/@andreykrivenko'
            target='_blank'
            rel='noreferrer'
            className='block ml-2 font-semibold text-blue-900 underline w-fit'
          >
            Andrey Krivenko
          </a>
          <span className='ml-4 text-sm'>Little Book for Kidgarden</span>
          <a
            href='https://www.figma.com/@Sujan_khadka'
            target='_blank'
            rel='noreferrer'
            className='block mt-2 ml-2 font-semibold text-blue-900 underline w-fit'
          >
            Sujan Khadka
          </a>
          <span className='ml-4 text-sm'>
            Vector Cute Animal Set Collection
          </span>
          <a
            href='https://www.pbskids.org'
            target='_blank'
            rel='noreferrer'
            className='block mt-2 ml-2 font-semibold text-blue-900 underline w-fit'
          >
            PBS Kids
          </a>
          <span className='ml-4 text-sm'>Show Card Images</span>
        </p>
        <p className='mt-4 lg:mt-6'>
          <span className='text-sm'>Source Code: </span>
          <a
            href='https://github.com/andrewlfauth/screen-time'
            target='_blank'
            rel='noreferrer'
            className='block ml-2 font-semibold text-blue-900 underline w-fit'
          >
            Github
          </a>
        </p>
      </div>
    </div>
  )
}

export default Index
