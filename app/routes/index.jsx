import {Link} from '@remix-run/react'
import { getUserSession } from '~/services/users.server'

export async function loader({request}) {
  return getUserSession(request)
}

export default function Index() {
  return (
    <div className="py-28">
      <div className="flex flex-col items-center px-4 mx-auto lg:flex-row lg:justify-evenly font-inter max-w-7xl sm:px-6 lg:px-8">
        <div className="flex-shrink max-w-3xl text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight">
            Make the Most of Your Child's {" "}
            <span className="text-blue-900">Screen Time</span>
          </h1>
          <p className="max-w-xl mx-auto mt-2 text-sm font-medium leading-6 text-gray-800 md:text-lg lg:mx-0">
            Screen time doesn't have to be a waste of time. Nurture your child's learning by finding the television shows that fit their needs.
          </p>
          <div className="mt-12 space-x-4 lg:flex">
            <Link
              to="/get-started"
              className="px-6 py-3 text-lg font-semibold text-white duration-300 bg-blue-900 border-4 border-blue-900 rounded-md md:px-12 hover:bg-opacity-90 hover:border-opacity-10 hover:ring-4 hover:ring-offset-2 hover:ring-blue-900"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="px-6 py-3 text-lg font-semibold duration-300 border-4 border-black rounded-md md:px-12 hover:ring-4 hover:ring-offset-2 hover:ring-black"
            >
              Login
            </Link>
          </div>
        </div>
        <div className='mt-12 md:mt-20 lg:mt-0'>
          <img 
            src="https://res.cloudinary.com/dpnkrz8c8/image/upload/w_400/v1663359129/Screen%20Time/zebra_df7pjl.png" 
            alt="zebra"
            className='max-w-[300px] md:max-w-none md:min-w-[500px] lg:min-w-[350px] lg:ml-4' 
          />
        </div>
      </div>
    </div>
  )
}
