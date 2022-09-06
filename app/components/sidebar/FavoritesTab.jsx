import {Link} from '@remix-run/react'
import {FaHeart} from 'react-icons/fa'

function FavoritesTab({expand}) {
  
  return (
    <div className='select-none'>
      <Link 
        to='/dashboard/favorites'
        className={`${expand ? "justify-between" : "justify-center"} flex lg:justify-between font-semibold text-2xl tracking-tight items-center shadow bg-white p-4 rounded-md group`}
      >
        <span className={`${expand ? "block" : "hidden lg:block"}`}>Favorites</span>
        <FaHeart
        className='text-[30px] text-emerald-500 hover:scale-110'
        />
      </Link>
    </div>
  )
}

export default FavoritesTab