import {Link, useLocation} from '@remix-run/react'
import {AiOutlinePoweroff} from 'react-icons/ai'
import {RiPlantLine} from 'react-icons/ri'
import {FiGrid} from 'react-icons/fi'
import {GiFilmSpool} from 'react-icons/gi'
import {FaRegHeart} from 'react-icons/fa'

function Sidebar() {
  const path = useLocation().pathname

  return (
    <div className='w-12 lg:w-[225px] flex flex-col justify-between items-center h-screen fixed pt-32 pb-6 bg-white z-10'>
      <div className='lg:w-full lg:px-4 space-y-1'>
        <Link 
          to='/dashboard'
          className={`${path === '/dashboard' ? "bg-blue-50 text-gray-900" : "text-gray-400"} rounded-md hover:bg-blue-50 hover:bg-opacity-40 p-2 flex lg:justify-between`}
        >
          <div className='flex'>
            <FiGrid className='text-2xl lg:mr-4' />
            <span className='hidden lg:block'>Dashboard</span>
          </div>
        </Link>
        <Link 
          to='/dashboard/plans'
          className={`${path === '/dashboard/plans' ? "bg-blue-50 text-gray-900" : "text-gray-400"} rounded-md hover:bg-blue-50 hover:bg-opacity-40 p-2 flex lg:justify-between`}
        >
          <div className='flex'>
            <RiPlantLine className='text-2xl lg:mr-4' />
            <span className='hidden lg:block'>Plans</span>
          </div>
        </Link>
        <Link 
          to='/dashboard/shows'
          className={`${path === '/dashboard/shows' ? "bg-blue-50 text-gray-900" : "text-gray-400"} rounded-md hover:bg-blue-50 hover:bg-opacity-40 p-2 flex`}
        >
          <div className='flex'>
            <GiFilmSpool className='text-2xl lg:mr-4' />
            <span className='hidden lg:block'>Shows</span>
          </div>
        </Link>
        <Link 
          to='/dashboard/favorites'
          className={`${path === '/dashboard/favorites' ? "bg-blue-50 text-gray-900" : "text-gray-400"} rounded-md hover:bg-blue-50 hover:bg-opacity-40 p-2 flex`}
        >
          <div className='flex'>
            <FaRegHeart className='text-2xl lg:mr-4' />
            <span className='hidden lg:block'>Favorites</span>
          </div>
        </Link>
      </div>
      <div className='lg:w-full lg:px-4'>
        <Link 
          to='/logout'
          className='rounded-md p-2 flex hover:bg-blue-50 hover:bg-opacity-40'
        >
          <div className="flex">
            <AiOutlinePoweroff className='text-gray-800 text-2xl lg:mr-4' />
            <span className="hidden lg:block">Logout</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar