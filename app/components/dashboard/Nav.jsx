import {AiOutlinePoweroff} from 'react-icons/ai'
import {RiPlantLine} from 'react-icons/ri'
import {FiGrid} from 'react-icons/fi'
import {GiFilmSpool} from 'react-icons/gi'
import {FaRegHeart} from 'react-icons/fa'
import NavLink from './NavLink'

function Nav() {  
  return (
    <div className='w-12 lg:w-[225px] flex flex-col justify-between items-center h-screen fixed pt-32 pb-20 md:pb-10 lg:pb-6 bg-white z-10'>
      <div className='space-y-1 lg:w-full lg:px-3'>
        <NavLink to="/dashboard" title="Dashboard">
          <FiGrid className="text-2xl" />
        </NavLink>
        <NavLink to="/dashboard/plans" title="Plans">
          <RiPlantLine className="text-2xl" />
        </NavLink>
        <NavLink to="/dashboard/shows" title="Shows">
          <GiFilmSpool className="text-2xl" />
        </NavLink>
        <NavLink to="/dashboard/favorites" title="Favorites">
          <FaRegHeart className="text-2xl" />
        </NavLink>
      </div>
      <div className='lg:w-full lg:px-3'>
        <NavLink to="/logout" title="Logout">
          <AiOutlinePoweroff className="text-2xl text-gray-800" />
        </NavLink>
      </div>
    </div>
  )
}

export default Nav