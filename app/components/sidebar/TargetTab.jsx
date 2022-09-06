import {Link} from '@remix-run/react'
import {FiTarget} from 'react-icons/fi'

function ShowsTab({expand}) {
  return (
    <div className='select-none'>
      <Link 
        to='/dashboard/goals'
        className='flex justify-between font-semibold text-2xl tracking-tight items-center shadow bg-white p-4 rounded-md group'
      >
        <span className={`${expand ? "block" : "hidden lg:block"}`}>Goals</span>
        <FiTarget
        className={`text-4xl text-purple-500 group-hover:scale-110 duration-200`}
        />
      </Link>
    </div>
  )
}

export default ShowsTab