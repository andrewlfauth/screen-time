import {Link} from '@remix-run/react'
import { getUserSession } from '~/services/users.server'

export async function loader({request}) {
  return getUserSession(request)
}

export default function Index() {
  return (
    <div className='bg-blue-100 h-screen dark:bg-gray-800 duration-300'>
      <div className='px-4 sm:px-6 font-poppins lg:px-8 max-w-7xl mx-auto py-32'>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl md:text-6xl font-semibold text-center tracking-tight lg:leading-[1.1] mx-auto max-w-3xl dark:text-white'>Make The Most Of Your Child's Screen Time</h1>
          <p className='max-w-xl text-xs md:text-[16px] mx-auto text-center mt-2 lg:mt-4 dark:text-gray-300 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit numquam libero sapiente eius deleniti aspernatur cumque eaque?</p>
          <div className='mt-8 md:mt-12 flex space-y-4 w-full lg:w-auto lg:space-y-0 lg:space-x-4 flex-col lg:flex-row'>
            <Link 
              to='/get-started'
              className='block bg-yellow-500 rounded-md font-medium text-center py-2 lg:w-52 text-lg border-4 border-yellow-500 w-full md:w-2/3 mx-auto lg:mx-0'
            >
              Get Started
            </Link>
            <Link 
              to='/dashboard'
              className='block border-4 border-blue-900 rounded-md md:w-2/3 mx-auto lg:mx-0 font-medium text-center py-2 w-full lg:w-44 text-lg'
            >
              Guest
            </Link>
          </div>
          <span className="mt-4 text-[14px]">
            Already have an account? 
            <Link to="/login" className="text-blue-600 font-medium hover:underline">
              {" Login"}
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}
