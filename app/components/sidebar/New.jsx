import {Link} from '@remix-run/react'

function New() {
  return (
    <div className='relative w-10 flex bg-blue-900 justify-center pt-32'>
      <div className='items-center bg-red-300 flex flex-col fixed h-full'>
        <Link 
          to='/dashboard'
          className="p-2 rounded-md bg-white w-full"
        >
          D
        </Link>
      <Link to='/dashboard/plans'>
        P
      </Link>
      <Link to='/dashboard/shows'>
        S
      </Link>
      <Link to='/dashboard/favorites'>
        F
      </Link>
    </div>  
  </div>
  )
}

export default New