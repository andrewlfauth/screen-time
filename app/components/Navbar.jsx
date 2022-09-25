import { BsInfoCircle } from 'react-icons/bs'
import { Link, useLocation } from '@remix-run/react'

function Navbar() {
  const path = useLocation().pathname

  return (
    <div className='absolute top-0 left-0 z-50 flex justify-end w-full px-3 py-2 lg:px-4'>
      <Link to='/info' title='Info'>
        <BsInfoCircle
          className={`${
            path === '/info'
              ? 'text-gray-600'
              : 'text-gray-400 hover:text-gray-600'
          } text-lg lg:text-2xl`}
        />
      </Link>
    </div>
  )
}

export default Navbar
