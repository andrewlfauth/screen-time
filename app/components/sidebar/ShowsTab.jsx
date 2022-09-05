import {Link} from '@remix-run/react'
import {FcFilmReel} from 'react-icons/fc'

function ShowsTab({expand}) {
  return (
    <div>
      <Link 
        to='/dashboard/shows'
        className='flex justify-between font-semibold text-2xl tracking-tight items-center shadow bg-white p-4 rounded-md group'
      >
        <span className={`${expand ? "block" : "hidden lg:block"}`}>Shows</span>
        <FcFilmReel
        className={`text-4xl rotate-[108deg] group-hover:scale-110 duration-200`}
        />
      </Link>
    </div>
  )
}

export default ShowsTab