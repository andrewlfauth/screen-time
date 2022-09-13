import {Link} from '@remix-run/react'
import {BsUiRadiosGrid} from 'react-icons/bs'

function DashboardTab({expand}) {
  
  return (
    <div className='select-none scale-75 md:scale-100'>
      <Link 
        to='/dashboard'
        className={`${expand ? "justify-between" : "justify-center"} flex lg:justify-between font-semibold text-2xl tracking-tight items-center shadow bg-white p-4 rounded-md group`}
      >
        <span className={`${expand ? "block" : "hidden lg:block"}`}>Dash</span>
        <BsUiRadiosGrid
        className='text-[30px] text-blue-900 group-hover:scale-110'
        />
      </Link>
    </div>
  )
}

export default DashboardTab