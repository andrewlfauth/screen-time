import {Link} from '@remix-run/react'
import {FiTarget} from 'react-icons/fi'

function PlansTab({expand}) {
  return (
    <div className='select-none scale-75 md:scale-100'>
      <Link 
        to='/dashboard/plans'
        className='flex justify-between font-semibold text-2xl tracking-tight items-center shadow bg-white p-4 rounded-md group'
      >
        <span className={`${expand ? "block" : "hidden lg:block"}`}>Plans</span>
        <FiTarget
        className='text-4xl text-purple-900 group-hover:scale-110 duration-200'
        />
      </Link>
    </div>
  )
}

export default PlansTab