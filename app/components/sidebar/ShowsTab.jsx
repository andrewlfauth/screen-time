import {Link, useLocation} from '@remix-run/react'
import {FcFilmReel} from 'react-icons/fc'

function ShowsTab({expand}) {
  const location = useLocation()
  const playAnim = location?.pathname === '/dashboard/shows'

  return (
    <div>
      <Link 
        to='/dashboard/shows'
        className='flex justify-between font-semibold text-2xl tracking-tight items-center shadow bg-white p-4 rounded-md'
      >
        <span className={`${expand ? "block" : "hidden lg:block"}`}>Shows</span>
        <FcFilmReel
        className={`${playAnim && 'rotate-[-70deg]'} text-4xl rotate-[108deg] duration-500`}
        />
      </Link>
    </div>
  )
}

export default ShowsTab