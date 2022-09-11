import {Link} from '@remix-run/react'
import { getUserSession } from '~/services/users.server'

export async function loader({request}) {
  return getUserSession(request)
}

export default function Index() {
  return (
    <div className='h-screen duration-300 bg-neutral-50 dark:bg-gray-800'>
      <div className='px-4 py-32 mx-auto sm:px-6 font-poppins lg:px-8 max-w-7xl'>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl md:text-6xl font-semibold text-center tracking-tight lg:leading-[1.1] mx-auto max-w-3xl dark:text-white'>
              Make The Most Of Your Child's
              <span className='text-blue-900'>{" "}Screen Time</span>
            </h1>
          <p className='max-w-xl text-sm md:text-[16px] mx-auto text-center mt-2 lg:mt-4 dark:text-gray-300 leading-6'>Screen time doesn't have to be a waste of time. Nurture your child's learning by finding the television shows that fit their needs.</p>
          <div className='flex flex-col w-full mt-8 space-y-4 md:mt-12 lg:w-auto lg:space-y-0 lg:space-x-4 lg:flex-row'>
            <Link 
              to='/get-started'
              className='block w-full py-2 mx-auto text-lg font-semibold text-center text-white duration-100 bg-blue-900 border-4 border-blue-900 rounded-md lg:w-52 md:w-2/3 lg:mx-0 hover:bg-opacity-95'
            >
              Get Started
            </Link>
            <Link 
              to='/login'
              className='block w-full py-2 mx-auto text-lg font-semibold text-center text-blue-900 duration-100 border-4 border-blue-800 rounded-md hover:skew-y-1 md:w-2/3 lg:mx-0 lg:w-44'
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
