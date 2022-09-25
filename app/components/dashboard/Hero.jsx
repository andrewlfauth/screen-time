import { AiOutlinePlusCircle } from 'react-icons/ai'
import { Link } from '@remix-run/react'

function Hero() {
  return (
    <div className='flex justify-between w-full px-4 py-6 bg-white rounded-md shadow sm:py-8'>
      <div className='max-w-md'>
        <h2 className='mb-2 text-2xl font-semibold tracking-tighter sm:text-4xl'>
          Focused learning through the shows they watch
        </h2>
        <p className='max-w-xs mb-6 text-sm tracking-tight text-gray-600'>
          Find the shows that focus on the learning goals that are important to
          you.
        </p>
        <Link
          to='/dashboard/plans'
          className='flex items-center justify-center px-4 py-2 font-medium tracking-tight text-white duration-100 bg-blue-900 rounded w-fit hover:bg-opacity-95'
        >
          Create a plan
          <AiOutlinePlusCircle className='ml-4 text-xl' />
        </Link>
      </div>
      <div className='select-none items-end h-[107%] hidden sm:flex'>
        <img
          src='https://res.cloudinary.com/dpnkrz8c8/image/upload/w_200/v1663288276/Screen%20Time/leopard_3_v13rcl.png'
          alt='leopard'
        />
      </div>
    </div>
  )
}

export default Hero
