import {Link} from '@remix-run/react'
import {RiLogoutCircleRLine} from 'react-icons/ri'

function ShowsTab({expand}) {
  return (
    <div>
      <Link 
        to='/logout'
        className='flex justify-between font-semibold text-2xl tracking-tight items-center shadow bg-white group p-4 rounded-md'
      >
        <span className={`${expand ? "block" : "hidden lg:block"}`}>Logout</span>
        <RiLogoutCircleRLine className='text-3xl group-hover:scale-110 duration-200'/>
      </Link>
    </div>
  )
}

export default ShowsTab